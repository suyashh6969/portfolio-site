# Suyash Baskaran | Portfolio

My personal portfolio site: who I am, what I've built, and how to reach me. Built from scratch with plain HTML, CSS and JavaScript, with no frameworks and no build step.

**Live site:** https://suyashh6969.github.io/portfolio-site/

## About me

I'm a first-year ECE student at VIT, interested in where hardware meets software, especially AI. I work with Python (Flask, Tkinter) and Java, and I'm building up my Arduino and ESP32 skills.

## Features

- Purple and black theme with a light-mode toggle that remembers your choice
- Typing animation in the hero section
- Project cards with hover effects and tech tags
- Responsive layout for phones and laptops
- Smooth-scrolling navigation

## Projects featured

| Project | What it does | Tech |
| --- | --- | --- |
| [Attendance Tracker](https://github.com/suyashh6969/attendance-tracker) | Shows how many classes you can skip while staying above 75% | Python |
| [File Organizer](https://github.com/suyashh6969/file-organizer) | Sorts a messy folder by file type, with dry-run and undo | Python |
| [Temperature Monitor](https://github.com/suyashh6969/temperature-monitor) | Arduino Uno circuit in Wokwi: NTC sensor, 16x2 LCD and an LED alert above 25 °C | Arduino, C++ |
| [Portfolio Website](https://github.com/suyashh6969/portfolio-site) | This site | HTML, CSS, JavaScript |

## Project structure

```
portfolio-site/
├── index.html   # page content
├── style.css    # theme, layout and responsive rules
├── script.js    # typing effect and theme toggle
└── README.md
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Customize

1. Edit the About text and project cards in `index.html`
2. Change colors in the `:root` and `[data-theme]` blocks at the top of `style.css`
3. Edit the `phrases` array in `script.js` to change the typing text

## Deployment

The site is hosted free on GitHub Pages, served from the `main` branch root.

## Tech

HTML5, CSS3 (custom properties, grid, media queries), vanilla JavaScript

## Contact

- Email: suyashbaskaran@gmail.com
- GitHub: [suyashh6969](https://github.com/suyashh6969)
- LinkedIn: [Suyash Baskaran](https://www.linkedin.com/in/suyash-baskaran-5295063ba/)
