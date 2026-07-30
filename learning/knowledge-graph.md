# Knowledge Graph

The map of what I actually know. Updated after every lesson. Drives what I get quizzed on.

**Status ladder:** seed (not yet taught) → introduced (explained once) → practicing (used it with help) → understood (explained in my own words *and* passed a quiz)

Rule: statuses only upgrade on real evidence — something I said or did. Nothing gets quizzed if it's already `understood` and the last review is recent.

\---

## Low-level (syntax \& fundamentals)

|Concept|Status|Introduced|Last reviewed|Evidence|
|-|-|-|-|-|
|Variables|seed|—|—|—|
|Loops|seed|—|—|—|
|Functions|seed|—|—|—|
|Conditionals (if/else)|seed|—|—|—|
|Arrays|seed|—|—|—|
|Objects|seed|—|—|—|
|DOM manipulation|seed|—|—|—|
|Event listeners|seed|—|—|—|
|Async/await \& promises|seed|—|—|—|
|HTTP requests/responses (what a request and response actually are)|practicing|2026-07-30|2026-07-30|Predicted "nothing happens" on form submit, was wrong, then observed the real GET query string in the address bar and correctly identified it as the form's default submission method.|

## Structural (how the pieces connect)

|Concept|Status|Introduced|Last reviewed|Evidence|
|-|-|-|-|-|
|Client-server architecture (frontend vs backend separation)|introduced|2026-07-29|2026-07-29|Explained during "core components" walkthrough — frontend talks to backend, backend talks to database, never frontend-to-database directly.|
|Data model design (what a "book entry" record looks like)|introduced|2026-07-29|2026-07-29|Introduced as component #2 during core-components walkthrough.|
|Files/modules talking to each other (imports/exports)|seed|—|—|—|
|package.json \& npm dependencies|seed|—|—|—|
|REST API endpoints \& routing|seed|—|—|—|
|Database schema / tables|seed|—|—|—|
|SQL queries (basic CRUD)|seed|—|—|—|
|Database as a persistent store (why it beats a spreadsheet-in-memory)|introduced|2026-07-29|2026-07-29|Understood the SQLite-vs-Postgres distinction was about being a single local file vs. an always-on networked service — confirmed after correction.|
|Backend/API as a middleman|introduced|2026-07-29|2026-07-29|Explained during core-components walkthrough.|
|Hosting \& deployment (what "live on the internet" requires)|introduced|2026-07-29|2026-07-29|Explained during core-components walkthrough.|

## Engineering practice

|Concept|Status|Introduced|Last reviewed|Evidence|
|-|-|-|-|-|
|MVP scoping \& feature prioritization|introduced|2026-07-29|2026-07-29|Actively split features into MVP vs Pantry (v2) during MVP session.|
|Technical decision-making with tradeoffs (boring/popular default vs alternatives)|introduced|2026-07-29|2026-07-29|Walked through 4 stack decisions (language, frontend, database, hosting), gave own reasoning for each before lock-in.|
|Version control fundamentals (git \& GitHub, why from day one)|practicing|2026-07-29|2026-07-30|Ran `git init` in own terminal, correctly predicted it would create a repo, confirmed the `.git` folder afterward, and reasoned through local-first vs. GitHub-first workflow tradeoffs unprompted.|
|Making commits (add/commit/push workflow)|seed|—|—|—|
|Automated testing|seed|—|—|—|
|Environment variables / config secrets|seed|—|—|—|
|Debugging with browser dev tools|introduced|2026-07-29|2026-07-29|Explained during core-components walkthrough as component #7.|

## AI-era practice

|Concept|Status|Introduced|Last reviewed|Evidence|
|-|-|-|-|-|
|Writing a good plan (sequencing, sizing deliverables)|introduced|2026-07-29|2026-07-29|Co-built the 8-section build plan, sequenced so each layer builds on the last.|
|Agent memory files (persistent context docs like project.md/plan.md)|introduced|2026-07-29|2026-07-29|Directly specified the pattern: "every future session should start by reading that file."|
|Reviewing a diff|seed|—|—|—|
|Directing an AI collaborator with a spec (structured requests, explicit constraints)|introduced|2026-07-29|2026-07-29|Demonstrated across every request in this project so far — precise structure, explicit constraints, review checkpoints.|



