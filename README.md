# Barath's Memory Wall

## Files
- `index.html` — page structure. Usually you do not need to edit this.
- `styles.css` — design, responsive layout and animations.
- `script.js` — card rendering, filters, search, animations and form behaviour.
- `data.js` — **the file you edit for colleagues and memories.**
- `images/` — add colleague photos here.
- `fonts/` — place your two Likewize font files here locally:
  - `Likewize-Regular.otf`
  - `Likewize-Bold.otf`

## Add a colleague
Open `data.js`, copy an existing colleague block, paste it before the closing `];`, and edit:

```js
{
  name: "Colleague Name",
  role: "A short line about them",
  category: "Team",
  photo: "images/colleague-name.jpg",
  memory: `Your memory can be multiple sentences.`
},
```

Categories are automatic. If you add `category: "Manager"`, a Manager filter appears on the page.

If there is no photo, use:
```js
photo: ""
```
The page will show initials instead.

## Set the farewell email
In `data.js`:
```js
const SITE_CONFIG = {
  farewellEmail: "your-email@example.com"
};
```

## GitHub Pages
Commit these files to the root of your repository. In GitHub:
Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/ (root)` → Save.

Your existing project URL should then update after GitHub Pages finishes deploying.
