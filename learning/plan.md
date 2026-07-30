# Build Plan: Personal Reading Log

Primary objective for this project: **learning and understanding, not speed.**
By the end, the goal is to be able to explain how the app works end to end.

## Locked technology decisions

|Decision|Choice|Why (in plain terms)|
|-|-|-|
|Backend language|JavaScript / Node.js|Already know JS from frontend work — no new language to learn while also learning backend concepts. Huge community and beginner docs.|
|Frontend|Plain HTML, CSS, JavaScript (no framework)|Solid, familiar ground to build on while everything else (backend, database) is new. React deferred until this is comfortable.|
|Database|PostgreSQL|Relational (table-based) database, well suited to structured data like books/ratings/series. Runs as an always-on service reachable over the network — required for "live on the internet," unlike SQLite which is a single local file.|
|Hosting|Render|Beginner-focused platform, connects directly to GitHub, hosts both Node backend and Postgres database with a free tier. Chosen over AWS/GCP/Azure specifically to avoid fighting infrastructure complexity on a first deployed project.|
|Version control|Git + GitHub|Used from day one, not bolted on later. Tracks every change, enables safe experimentation, and is how code gets deployed to Render.|

## Sectioned build plan

Each section ends with something concrete and visible working. Sections build on each other in order. Git commits happen continuously throughout every section, not as a separate step.

1. **Static frontend skeleton** — Basic HTML/CSS page renders in the browser with hardcoded fake entries (form + list layout).
*Deliverable: a page you can open and look at.*

   * \[x] 1.1 Create the project folder + git tracking, and a minimal `index.html` that renders in the browser
   * \[x] 1.2 Build the page skeleton: a header and two containers (one for the form, one for the list)
   * \[x] 1.3 Add 2–3 hardcoded fake entries into the list container
   * \[x] 1.4 Add the (static, non-functional yet) form markup for adding a new entry
2. **Styling \& client-side interactivity** — Real styling applied; JavaScript allows adding/removing entries in-browser only (no persistence yet).
*Deliverable: an app that feels alive, but forgets everything on refresh.*
3. **Simple local server** — Node + Express running locally, serving a basic response.
*Deliverable: visiting localhost shows something your own server sent.*
4. **Building the API** — Endpoints for add/get/update/delete a book, tested directly, still backed by fake in-memory data.
*Deliverable: sending a request returns the right data — backend logic proven on its own.*
5. **Connecting a real database** — Postgres running and connected to the backend, replacing in-memory data with real persisted storage.
*Deliverable: add a book, restart the server, it's still there.*
6. **Wiring frontend to backend — core features complete** — Frontend calls the real API instead of fake data. Full add/edit/delete/rate flow works end to end.
*Deliverable: the actual MVP, fully working on your machine.*
7. **Testing** — Automated tests for the API (add, delete, update behave correctly).
*Deliverable: a passing test suite that would catch a broken feature.*
8. **Live deployment** — Push to GitHub, deploy backend + database to Render.
*Deliverable: a real URL, usable from your phone, anywhere.*

