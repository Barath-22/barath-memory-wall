/*
  BARATH'S MEMORY WALL — CONTENT FILE
  ====================================
  This is the main file you edit when adding/updating colleagues.

  QUICK STEPS TO ADD A COLLEAGUE:
  1. Copy one complete { ... } block below.
  2. Paste it before the closing ]; of COLLEAGUES.
  3. Change name, role, category, photo and memory.
  4. Separate each colleague block with a comma.

  CATEGORY:
  You can type ANY category you want:
  "Team", "Friend", "Mentor", "Manager", "Leadership", "Other", etc.
  The website creates the filter buttons automatically.

  PHOTO:
  Put photos in the images folder.
  Example: photo: "images/arun.jpg"
  If you don't have a photo, use photo: "" and initials are shown automatically.
*/

const SITE_CONFIG = {
  farewellEmail: "YOUR_EMAIL@example.com"
};

const COLLEAGUES = [
  {
    name: "Alex",
    role: "The teammate who always had my back",
    category: "Team",
    photo: "",
    memory: `Replace this with the real memory. You can write multiple sentences here.
Be specific — a project, an inside joke, advice, a difficult day, or something you will always remember.`
  },

  {
    name: "Priya",
    role: "Friend, problem-solver & professional mood-lifter",
    category: "Friend",
    photo: "",
    memory: `Replace this with your memory with Priya.`
  },

  {
    name: "Rahul",
    role: "The calm voice during chaotic days",
    category: "Mentor",
    photo: "",
    memory: `Replace this with your memory with Rahul.`
  }

  // ADD THE NEXT COLLEAGUE ABOVE THIS LINE.
];
