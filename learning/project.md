# Project: Personal Reading Log

## Who I am
- Warehouse and website manager
- Learning to code for real, not just tutorials
- Background: finished The Odin Project foundations, built a portfolio art webpage
- Comfortable with: HTML, CSS, JavaScript
- Not yet covered: backend/server, databases, deployment (this project is the vehicle for learning those)
- Hobbies that motivated this project: heavy gaming (one game at a time, deep hours, revisits favorites) and audiobooks (currently just uses Audible, with no personal record of history/ratings)

## The idea
A personal reading log that tracks both books and audiobooks — progress, ratings,
and eventually barcode lookup and series ownership. Solves the real gap that
Audible tracks playback but not personal history/opinions.

## MVP — "In the MVP"
The smallest version that is genuinely usable end to end, live on the internet
(not just running locally):

- Add an entry: title, author, type (book / audiobook)
- Status: to-read / reading / finished
- % read (single progress number — not chapters, to keep books and audiobooks consistent)
- Personal rating (added once finished)
- View all entries in a list
- Edit / delete an entry
- Deployed live with data that actually persists (real backend + database, not localStorage)

## Pantry (v2) — deliberately deferred, not forgotten
- Barcode scanning to add books (camera access + ISBN lookup API — two separate hard skills, too much for MVP)
- Series tracking: which books in a series are owned/read (a second data model/relationship, not a field)
- Chapter-based progress tracking (redundant with % read — pick one for MVP)
- Notes / written reviews per entry
- Search, filter, sort
- Auto-fetched cover images
- Stats dashboard (hours logged, books per month, etc.)

## Working agreement
Every future session on this project should start by reading this file for context
before jumping into code.
