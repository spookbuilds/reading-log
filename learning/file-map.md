# File Map

Every file and folder in this project, one line each: what it is, why it exists.

**Status tags:** `known` (I've explained it in my own words) · `parked` (honest one-liner for now, deep dive scheduled) · `generated` (machine-made, never hand-edit)

\---

## learning/

|Path|What it is|Why it exists|Status|
|-|-|-|-|
|learning/project.md|Project identity doc: who I am, my experience level, the project idea, MVP vs. Pantry (v2) feature split|So every session starts with the same shared context instead of re-explaining scope from scratch|known|
|learning/plan.md|Locked tech-stack decisions plus the 8-section build sequence|The roadmap — what we're building with, and in what order, so each step builds on the last|known|
|learning/knowledge-graph.md|Living record of every concept this project will teach, with a status per concept|Decides what I actually get quizzed on — keeps teaching honest instead of assumed|known|
|learning/file-map.md|This file — a map of every file/folder in the repo|So nothing in the project is a file I can't explain the purpose of|known|

## reading-log/ (the actual app — created 2026-07-30)

|Path|What it is|Why it exists|Status|
|-|-|-|-|
|reading-log/|The project folder itself, root of the real app code|Keeps actual application code separate from the `learning/` notes|known|
|reading-log/.git/|Hidden folder git uses to store the full change history|Created by `git init` — never hand-edited, git manages it entirely|generated|
|reading-log/index.html|The app's one page so far — has a `<title>` and an `<h1>` heading, filled in with own text|The file a browser loads first; the very first visible piece of the app|known|

\---

*(This map will grow as we build. Every new file or folder gets a line here before or as soon as it's created — nothing gets added to the repo as a mystery box.)*

