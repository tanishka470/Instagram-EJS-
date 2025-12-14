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
├─ app.js               # Express server entry
├─ package.json         # Dependencies and scripts
├─ data.json            # Sample user/profile data
├─ public/
│  └─ style.css         # Styles for views
└─ views/
   └─ profile.ejs       # EJS template for profile
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
# Using node
node app.js

# Using nodemon (auto-reload)
nodemon app.js
```
The server starts on `http://localhost:8080` (configurable in `app.js`).

## Scripts
Add these to `package.json` if not present:
```json
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
}
```
Run with:
```bash
npm run start
# or
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
