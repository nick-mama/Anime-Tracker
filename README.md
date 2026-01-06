# Anime-Tracker

A React web app for browsing anime and keeping a personal list of favorites and watch statuses. Anime data comes from the **Jikan API** (unofficial MyAnimeList API), and your lists persist locally using **localStorage**.

## Features

- Browse anime via Jikan / MyAnimeList data
- Add / remove anime from **Favorites**
- Track watch status:
  - Watching
  - Completed
  - Plan to Watch
- Persistent data (localStorage)
- Responsive, clean UI

## Tech Stack

- **Frontend:** React (JavaScript)
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **State:** React Context + Hooks
- **API:** Jikan API (MyAnimeList unofficial)
- **Storage:** Browser localStorage
- **Build Tool:** Vite

## Architecture Overview

- **Pages** handle routing and high-level logic
- **Components** (e.g., `AnimeCard`, `AnimeList`) handle UI rendering
- **Global state** (favorites + watch status) is managed via React Context
- **API fetching** happens at the page level
- **localStorage** keeps data across refreshes

## Getting Started

### Prerequisites

- Node.js (LTS recommended)

### Install & Run

```bash
npm install
npm run dev
```
