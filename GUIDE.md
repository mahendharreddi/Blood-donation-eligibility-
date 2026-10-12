# Site flow & file guide

index.html → login.html → select-organization.html → dashboard.html ⇄ predict.html / donors.html / inventory.html

| File | Why it exists |
|---|---|
| index.html (+landing.css/js) | Your landing page, renamed from landing.html because login.html already links to `index.html` and servers/GitHub Pages open `index.html` by default. |
| login.html (+login.css/js) | Validates input, then saves a session flag (`bd_auth`) and redirects. |
| select-organization.html | Step login.js already pointed to; stores the chosen org (`bd_org`). |
| app.js / app.css | Shared sidebar, auth guard, and data helpers so each inner page stays small and consistent. |
| dashboard / predict / donors / inventory | Inner pages. All data lives in `localStorage` (no backend needed for a demo). |

## Why localStorage
No server required; works on GitHub Pages. Every read/write goes through `get`/`set`/`inv()`/`donors()` in app.js, so swapping to a real API means editing only those.

## Connecting your ML model
`evaluate()` in predict.html is a rule-based placeholder (age 18–65, weight ≥ 50 kg, Hb ≥ 12.5, 90 days gap, no recent illness/tattoo). Replace it with `fetch('/api/predict', {method:'POST', body: JSON.stringify(d)})` to your LightGBM (Flask/FastAPI) endpoint and show SHAP reasons in the result box.

## Fixes made to your files
- Removed stray `CSS` text on line 1 of landing.css.
- login.js now sets `bd_auth` before redirecting.
- Pricing buttons on the landing page now go to login.html.

## Run
Open `index.html`, or run `python -m http.server` in this folder. Demo login: any valid email + 6+ char password.
