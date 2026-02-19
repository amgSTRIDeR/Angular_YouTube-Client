# YouTube Client (RS School)

Educational Angular project created for Rolling Scopes School. The app provides a YouTube-like search experience with custom cards, filtering, sorting, and a detailed view.

## Features

- Search YouTube videos via API
- Sorting and filtering of search results
- Detailed view with date-based visual cues
- Custom cards (admin page)
- Authentication guards and login flow
- NgRx store for search and custom items

## Tech Stack

- Angular 15
- RxJS
- NgRx
- Angular Material
- SCSS

## Getting Started

### Prerequisites

- Node.js 16+
- Angular CLI 15+

### Install

```bash
npm install
```

### Run in development

```bash
npm start
```

### Run with local secrets

```bash
npm run start:local
```

App runs at `http://localhost:4200/`.

### Build

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## Scripts

- `npm start` — dev server
- `npm run build` — production build
- `npm run watch` — dev build with watch
- `npm test` — unit tests (Karma)
- `npm run lint` — linting
- `npm run deploy` — GitHub Pages deploy

## Configuration

- API key is read from `src/environments/environment.ts` via `environment.youtubeApiKey`.
- Local secret file: `src/environments/environment.local.ts` (ignored by git).
- Create your local secret file from `src/environments/environment.local.example.ts` and set your key.
- Run `npm run start:local` to use local secrets.
- For production, prefer a backend/proxy because frontend keys are still visible in browser requests.

### GitHub Actions secret

- Add repository secret `YOUTUBE_API_KEY` in `Settings → Secrets and variables → Actions`.
- CI workflow `.github/workflows/build.yml` generates `src/environments/environment.local.ts` from this secret.

## Project Structure

```text
src/
├─ app/
│  ├─ auth/
│  ├─ core/
│  ├─ redux/
│  ├─ shared/
│  └─ youtube/
├─ assets/
├─ styles.scss
└─ main.ts
```

## Notes

- This repository is intended for learning purposes.
- Some routes are protected with auth guards.
- GitHub Pages uses hash routing in this project (for example: `/#/main`) to avoid 404 on direct route refresh.
