# Instagram EJS

A simple Node.js + Express app using EJS templates to render an Instagram-like profile page.

## Features
- EJS templating with layouts/partials
- Static assets (CSS) served from `public/`
- Sample profile view in `views/profile.ejs`
- Example dynamic data from `data.json`

## Project Structure
```
EJS/
├─ app.js
├─ package.json
├─ data.json
├─ public/
│  └─ style.css
└─ views/
  └─ profile.ejs
```

## Requirements
- Node.js 18+ (tested on Node 22)
- npm

## Setup
```bash
npm install
```

## Run
```bash
node app.js

nodemon app.js
```
The server starts on `http://localhost:8080` (configurable in `app.js`).

## Scripts
```json
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
}
```
```bash
npm run start
npm run dev
```

## Configuration
- Port: change the `port` variable in `app.js`.
- Static files: ensure `public/` is served via Express `static` middleware if added.

## Deployment Notes
- Do not commit `node_modules/`; see `.gitignore`.
- Use environment variables for secrets/config if needed (`.env`).

## License
MIT
