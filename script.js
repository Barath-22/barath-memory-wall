const cardsEl=document.getElementById("cards"),emptyEl=document.getElementById("empty"),searchEl=document.getElementById("search"),filtersEl=document.getElementById("filters");
let activeFilter="All";

const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
const initials=name=>name.trim().split(/\s+/).slice(0,2).map(x=>x[0]).join("").toUpperCase();

function categories(){
  return ["All",...new Set(COLLEAGUES.map(p=>p.category?.trim()).filter(Boolean))];
}
function renderFilters(){
  filtersEl.innerHTML=categories().map(c=>`<button class="filter ${c===activeFilter?"active":""}" data-category="${esc(c)}">${esc(c)}</button>`).join("");
  filtersEl.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{activeFilter=b.dataset.category;renderFilters();renderCards()}));
}
function renderCards(){
  const q=searchEl.value.trim().toLowerCase();
  const list=COLLEAGUES.filter(p=>(activeFilter==="All"||p.category===activeFilter)&&`${p.name} ${p.role} ${p.memory}`.toLowerCase().includes(q));
  cardsEl.innerHTML=list.map((p,i)=>{
    const photo=p.photo?`<img class="portrait" src="${esc(p.photo)}" alt="${esc(p.name)}" loading="lazy"><div class="photo-overlay"></div>`:`<div class="initials">${esc(initials(p.name))}</div>`;
    return `<article class="memory-card ${p.photo?"has-photo":""}" style="animation-delay:${Math.min(i*55,440)}ms" tabindex="0" role="button" aria-label="Flip ${esc(p.name)}'s memory card" aria-pressed="false">
      <div class="card-inner">
        <div class="face front ${i%2?"alt":""}">${photo}<div class="front-content"><span class="tag">${esc(p.category)}</span><h3>${esc(p.name)}</h3><div class="role">${esc(p.role)}</div><div class="flip-hint"><span>Flip for our memory</span><span class="flip-circle">↻</span></div></div></div>
        <div class="face back"><div class="back-label">A memory worth keeping</div><h3>${esc(p.name)}</h3><p class="memory">${esc(p.memory)}</p><div class="signoff">— Barath.</div></div>
      </div></article>`;
  }).join("");
  emptyEl.style.display=list.length?"none":"block";
  document.getElementById("peopleCount").textContent=COLLEAGUES.length;
  document.getElementById("statPeople").textContent=COLLEAGUES.length;
  bindCards();
}
function bindCards(){
  cardsEl.querySelectorAll(".memory-card").forEach(card=>{
    const flip=()=>{card.classList.toggle("flipped");card.setAttribute("aria-pressed",String(card.classList.contains("flipped")))};
    card.addEventListener("click",flip);
    card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();flip()}});
  });
}
searchEl.addEventListener("input",renderCards);

const menu=document.getElementById("menuButton"),nav=document.getElementById("navLinks");
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open);menu.textContent=open?"×":"☰"});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false");menu.textContent="☰"}));

const progress=document.getElementById("scrollProgress");
function progressBar(){const m=document.documentElement.scrollHeight-innerHeight;progress.style.width=(m>0?scrollY/m*100:0)+"%"}
addEventListener("scroll",progressBar,{passive:true});addEventListener("resize",progressBar);

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.getElementById("memoryForm").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("fromName").value.trim(),message=document.getElementById("message").value.trim(),email=SITE_CONFIG.farewellEmail;
  if(!email||email==="YOUR_EMAIL@example.com"){alert("Add Barath's email address in data.js first.");return}
  location.href=`mailto:${email}?subject=${encodeURIComponent(`A farewell memory from ${name}`)}&body=${encodeURIComponent(`Hi Barath,\n\n${message}\n\n— ${name}`)}`;
});

renderFilters();renderCards();progressBar();
