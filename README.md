# Barath's Memory Wall

A static, GitHub Pages-ready farewell website.

## Files

- `index.html` — complete website
- `images/` — put colleague photos here
- `.nojekyll` — tells GitHub Pages to serve the site as-is

## Customize

Open `index.html` and edit the `people` array near the bottom.

Example:

```js
{
  name: "Arun Kumar",
  role: "BI Analyst",
  category: "Team",
  photo: "images/arun.jpg",
  title: "The Debugger",
  memory: "Your short memory...",
  story: "Your longer personal memory...",
  year: "2024"
}
```

Also change `YOUR_EMAIL@example.com` in `sendMemory()` if you want the "Leave a Memory" button to open your email client.

## GitHub Pages

1. Create a personal GitHub account.
2. Create a public repository named `barath-memory-wall`.
3. Upload all files in this folder.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select **main** and **/(root)**.
7. Save.
8. GitHub will provide your live Pages URL.

Keep this repository under your personal account, not your employer's account, so the site remains independent after you leave the organization.

## Important

Do not put confidential company information, credentials, internal links, customer data, or proprietary screenshots into a public repository. Ask colleagues before publishing their identifiable photos or personal information.
