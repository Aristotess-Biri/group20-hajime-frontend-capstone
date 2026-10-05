# Team Playbook

Rules for everyone on the team. Read it once fully, then come back to it whenever you're unsure. If something isn't covered here, ask the team lead or assistant team lead in the group chat before guessing.

## 1. The goal

Recreate the Capstone Figma design as a responsive web page that works in **light and dark mode**, and that loads planet information from an API using `fetch`.

- **Deadline:** Mon Oct 19, 2026. We aim to submit by **Sun Oct 18**.
- **Code freeze:** Fri Oct 16. After that, nothing new gets merged.
- **Grading:** everyone submits individually, and we are graded as a group *and* on individual contribution. Your work must be visible on GitHub (commits, pull requests, and reviews).

## 2. Links

| What | Link |
|---|---|
| Figma design | https://www.figma.com/design/IhNMADS0jxaEeafBRK9KAj/Hajime-cohort?node-id=98381-1371&t=w6pVVY0IaIGOOpQ5-1 |
| Planet data (JSON) | https://anurella.github.io/json/planet.json |
| Live site | https://group20-hajime-frontend.netlify.app/ |
| Group chat | https://chat.whatsapp.com/IqfWKJfLNYH5L7Doz752DJ |
| GitHub Project board | https://github.com/Aristotess-Biri/group20-hajime-planetary-data/projects |
| Meeting link (Google Meet) | https://meet.google.com/krk-rvos-hwk |

## 3. Squads

| Squad | Members | What they own |
|---|---|---|
| Team lead | Ufuophu-Biri Aristotess | Coordination, unblocking people, checking who's active, README |
| Assistant lead | Emelife Henry Chibuike | PR review triage, covers for the lead, README |
| Foundation | Group A | Page skeleton, design tokens (light + dark), base CSS, Netlify/Vercel deploy |
| Header | Group B | Logo, header layout, theme toggle button, `theme.js` |
| Search | Group C | Search bar markup and styling, search logic, hover/focus/error states |
| Planet profile | Group D | Fetch (1 person), planet display + default planet, styling + mobile layout |
| Table | Group E | Table HTML, styling, hiding the Mass column on mobile |
| Footer | Group F | Footer layout and links, list of names + GitHub links, README, deployment checks |

Squads that finish early become **reviewers** for other squads.

## 4. Setting up your computer (one time only)

1. Accept the GitHub invitation to the repo (check your email or GitHub notifications).
2. Install **VS Code**, **Git**, and the **Live Server** extension for VS Code.
3. Copy the repo to your computer. In a terminal:
   ```
   git clone PASTE-THE-REPO-URL-HERE
   cd REPO-FOLDER-NAME
   code .
   ```
4. To view the page, right-click `index.html` in VS Code and choose **Open with Live Server**.

## 5. Mock Git workflow: every task, step by step

```
git checkout main
git pull
git checkout -b feat/search-input-states
```
(now do your work)
```
git status
git add .
git commit -m "feat(search): add input hover and focus styles"
git push -u origin feat/search-input-states
```

Then go to the repo on GitHub, click **Compare & pull request**, type the title, fill in the template, and ask for review.

### The rules
1. **Never commit directly to `main`.** It is protected.
2. Always run `git checkout main` then `git pull` **before** creating a new branch.
3. One branch = one task = one PR. Finish the task properly before opening the PR. Avoid unnecessary commits and PRs.
4. **You cannot review or merge your own PR.**
5. Every PR needs **1 approval** before it can be merged.
6. Reviewers answer within **24 hours**.
7. Merge with **Squash and merge** only. A reviewer does the merge, not the author.
8. Delete your branch after it's merged.
9. Only edit files that belong to your section (see section 6).
10. If GitHub says your PR has **conflicts**, don't try to fix it alone. Message the lead or assistant lead.

### Branch names
Format: `type/section-short-description`. Lowercase, with hyphens.

Examples: `feat/search-input-states`, `style/table-mobile-column`, `fix/footer-links`, `docs/readme`.

### Commit messages and PR titles
Format: `type(scope): short summary in the imperative`

| Type | Use for |
|---|---|
| `feat` | New markup, styles, or behavior for a feature |
| `fix` | Fixing a bug |
| `style` | CSS and visual tweaks |
| `refactor` | Cleaning code without changing what it does |
| `docs` | README and comments |
| `chore` | Setup and config |

Good: `feat(header): add theme toggle button`, `fix(table): hide mass column on mobile`.
Bad: `update`, `changes`, `asdf`, `final final 2`.

The **PR title uses the same format**. GitHub can't pre-fill titles, so you must type it yourself.

## 6. Files and who edits what

```
css/
  base.css          (Foundation only)
  header.css
  search.css
  planet-profile.css
  table.css
  footer.css
js/
  fetch.js            (shared fetch, Planet profile squad owns)
  theme.js            (Header squad)
  planet-profile.js   (Planet profile squad)
  search.js           (Search squad)
assets/   (logo and icons exported from Figma)
README.md
PLAYBOOK.md
```

- Each squad edits ONLY its own CSS/JS file and its own <section> in index.html.
- base.css and the shared structure of index.html belong to Foundation only.
  Need a change there? Message the lead or assistant lead.
- Asset file names: lowercase, hyphens, no spaces (theme-toggle-sun.svg, not
  Sun Icon.SVG). The live server is case-sensitive and your laptop isn't.

## 7. HTML rules

- Use semantic elements: `header`, `nav`, `main`, `section` (each with a heading), `footer`.
- The table is a real `<table>` with `<thead>`, `<tbody>`, and `<th scope="col">`.
- Buttons are `<button>`. Every input has a `<label>`. Every image has `alt`.
- Footer links that open a new tab use `target="_blank" rel="noopener noreferrer"`.

## 8. CSS rules

### BEM class names
Format: `.block__element--modifier`. Lowercase, hyphens inside a name.

| Section | Block |
|---|---|
| Header | `.site-header` |
| Search | `.search` |
| Planet profile | `.planet-profile` |
| Table | `.data-table` |
| Footer | `.site-footer` |

- Examples: `.search__input`, `.search__input--error`, `.planet-profile__image`.
- Never nest names deeper than one element. Write `.card__title`, not `.card__body__title`.
- Style with **classes only**. No IDs, no bare selectors like `div p {}`, no inline styles.
- States are modifiers: `.search__input--error`, `.planet-profile--loading`.

### Tokens: no hex codes in section files
All colours, spacing, and font sizes come from tokens. Write `var(--color-surface)`, not `#1a1a2e`.

Token names describe **purpose**, not colour: `--color-bg-main`, `--color-bg-surface`, `--color-text`, `--color-text-dark`, `--color-border`. Spacing and type tokens follow the same idea. Foundation publishes the final list in `base.css`. If you need a token that doesn't exist, ask Foundation. Don't invent your own.

### Light and dark mode
Light values live in `:root`. Dark values live in `[data-theme="dark"]`. If you only use tokens, dark mode works automatically.

Icons that need to change colour must be inline SVG using `currentColor`.

### Responsive: desktop-first, one breakpoint
- Your base styles are the **desktop design**. Tablet looks the same as desktop.
- There is **one** breakpoint for the whole team: `@media (max-width: 767px)`.
- Media queries can't use CSS variables, which is why the number is written here.
- Wide screens: the page content sits inside a container with `max-width: var(--container-max)` and `margin-inline: auto`.
- Test **every width from 320px to 1600px**, not just the Figma frames. Nothing may scroll sideways.

### Mobile differences (from Figma)
- Table: the **Mass** column disappears. Give the `<th>` and every `<td>` in that column the class `.data-table__cell--mass`, then hide it in the mobile block.
- Planet profile: changes from a row to a column.
- Footer: changes from a row to a column.
- Header: logo and toggle only, same on all sizes.

## 9. JavaScript rules

### Sample planet
Use these field names exactly, with the same capital letters.

```json
{
  "name": "Earth",
  "type": "Terrestrial",
  "distanceFromSun": 149.6,
  "image": "https://anurella.github.io/images/planets/earth.jpg",
  "mass": 0.00315,
  "diameter": 12756,
  "period": 365,
  "temperature": 288,
  "gravity": 9.8,
  "moons": 1,
  "description": "The only known planet to support life, with liquid water on its surface."
}
```

### Page behaviour
- **On load:** show **Earth** as the default planet.
- **While loading:** show a loading message.
- **If the fetch fails:** show a "could not load planets" message.
- **Search:** trim the text and compare names ignoring capital letters. If nothing matches, show "Planet not found" and give the input the `--error` style.

### The theme toggle contract
- The button has `id="theme-toggle"` and an `aria-label`.
- Clicking it sets `data-theme="dark"` or `data-theme="light"` on the `<html>` element.
- The choice is saved in `localStorage` under the key `theme`.

## 10. Definition of done

A PR is ready for review only when every box in the PR template's **author checklist** is ticked. Reviewers work through the **reviewer checklist**: run the branch locally, compare it to Figma in light and dark, resize the browser, and leave specific, kind comments.

## 11. Communication

- Post in the group chat **every day**: **Did / Doing / Blocked**.
- Stuck for more than 15 minutes? Post in the chat with what you tried and a screenshot. Blocked for more than 24 hours? Tell the lead or assistant. Asking early is a good sign.
- Meetings happen twice a week at class time on Google Meet. **Attendance is compulsory.** They are for demos, questions, and review triage.

## 12. Timeline

| Dates | What happens |
|---|---|
| Sep 28 | Repo set up, playbook pinned, assistant lead chosen |
| Sep 29-30 | **Kickoff meeting:** Figma walkthrough, squads announced |
| Oct 1 | **Foundation merges the skeleton and tokens.** No one else writes code before this |
| Oct 2 | Practice PR for everyone on a throwaway branch |
| Oct 3-4 | Deploy the empty skeleton to Netlify or Vercel |
| Oct 5-11 | Squads build, one branch and one PR per task. Two demos in meetings |
| Oct 11 | Target: 80% of features merged |
| Oct 12-13 | Everything merged. Full checks: light/dark, mobile/desktop, 320-1600px |
| Oct 14-15 | Bug fixes only |
| **Oct 16** | **Code freeze.** README finished with all names and GitHub links |
| Oct 17-18 | **Everyone submits their own repo link and deployment link** |
| Oct 19 | Deadline (buffer only) |
