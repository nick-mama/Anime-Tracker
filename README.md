# Anime-Tracker

A React-based web application that allows users to browse anime, track what they are watching, and manage a list of favorite anime. Anime data is fetched from an external API, and user data is persisted locally.

**Features**
- Browse anime using an external API (Jikan / MyAnimeList)
- Add and remove anime from favorites
- Track watching status:
  - Watching
  - Completed
  - Plan to Watch
- Persistent data using localStorage
- Responsive and clean UI

**Tech Stack**
- Frontend: React (JavaScript)
- Styling: Tailwind CSS
- API: Jikan API (MyAnimeList unofficial API)
- Routing: React Router
- State Management: React Context + Hooks
- Storage: Browser localStorage
- Build Tool: Vite

**Architecture Overview**
- Pages handle routing and high-level logic
- Reusable components (AnimeCard, AnimeList) handle UI rendering
- Global state (favorites and watch status) is managed via React Context
- API fetching occurs at the page level
- Local storage ensures data persists across page refreshes
