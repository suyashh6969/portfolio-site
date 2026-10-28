# Portfolio Website

A responsive personal portfolio built with plain HTML, CSS and JavaScript.
No frameworks, no build step.

## Features
- Responsive layout (works on phones and laptops)
- Purple and black theme with a light-mode toggle that remembers your choice
- Typing animation in the hero section
- Project cards with hover effects and tech tags
- Smooth-scrolling navigation

## Run locally
Open `index.html` in a browser, or serve the folder:
```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Customize
1. Edit the About text and project cards in `index.html`
2. Add a LinkedIn link in the Contact section once your profile is ready
3. Change colors in the `:root` / `[data-theme]` blocks at the top of `style.css`
4. Edit the `phrases` array in `script.js` for the typing effect

## Deploy free on GitHub Pages
1. Push this folder to a repo named `portfolio-site`
2. Go to Settings, then Pages
3. Choose the `main` branch and the root folder, then Save
4. Your site goes live at `https://suyashh6969.github.io/portfolio-site/`

## Tech
HTML5, CSS3 (custom properties, grid, media queries), vanilla JavaScript
