# KIKAI Girls High School Website

A static multi-page school website for **KIKAI GIRLS HIGH SCHOOL** built with plain HTML, CSS, and JavaScript.

## Project Overview

This project provides:
- A public-facing school website (`Home`, `About`, `Contact`, `E-learning`, `Library`, `History | News`).
- A basic student portal flow (`Registration` -> `Login` -> `Dashboard`) using browser `localStorage`.
- Shared global styling and JavaScript across pages.

No build tools or backend services are required.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Browser `localStorage` for demo authentication/storage

## Folder Structure

```text
kikaiwebsite/
├── index.html
├── about.html
├── contact.html
├── portal.html
├── elearning.html
├── library.html
├── school-details.html
├── std-registor.html
├── std-login.html
├── dashboard.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    └── (site images and logo)
```

## Pages and Behavior

- `index.html`: Landing page with school branding and navigation.
- `about.html`: Mission, vision, and school description.
- `contact.html`: Contact details (phone, email, address).
- `portal.html`: Entry page linking to student registration/login routes.
- `std-registor.html`: Student registration form.
  - Calls `register()` in `js/script.js`.
  - Saves `{ name, admission number, stream }` to `localStorage` under key pattern `student_<admission_number>`.
  - Redirects to `std-login.html`.
- `std-login.html`: Student login form.
  - Calls `login()` in `js/script.js`.
  - Looks up `student_<admission_number>` in `localStorage`.
  - Redirects to `dashboard.html` when found.
- `dashboard.html`: Student dashboard template with placeholder academic/account data.
- `elearning.html`: Placeholder for e-learning content.
- `library.html`: Placeholder links for revision resources.
- `school-details.html`: Image/news-style gallery with repeated school-highlight sections.

## Running Locally

Because this is a static site, open `index.html` directly in a browser, or use a local server.

### Option 1: Open directly

- Double-click `index.html`.

### Option 2: Use a lightweight local server (recommended)

From the project root:

```bash
python3 -m http.server 8000
```

Then visit:

- `http://localhost:8000/index.html`

## Shared JavaScript

`js/script.js` currently contains:
- `toggleChat()` to show/hide the chatbot UI container.
- `register()` for student signup and storage.
- `login()` for student admission-number login.

## Shared Styles

`css/style.css` defines:
- Global page/header/footer styling
- Navigation layout
- Image container and gallery classes
- Form styling for registration/login
- Chatbox UI styling

## Current Limitations / Notes

- `portal.html` starts with an extra text token (`html`) before the doctype.
- `dashboard.html` script references `regName`/`egAdm` storage IDs that are not aligned with the keys saved by `register()`.
- Authentication is client-side only (`localStorage`) and not secure for production use.
- Several portal/library/e-learning areas are placeholders and need backend integration for real data.
- Some copy and spelling can be refined for production polish.

## Suggested Next Improvements

- Add proper backend authentication and database storage.
- Fix dashboard data-binding to use stored student object consistently.
- Replace placeholder links/content with real academic resources and CMS-driven updates.
- Improve responsive behavior and accessibility (landmarks, ARIA, keyboard flow).
- Add deployment instructions (GitHub Pages, Netlify, or school hosting).

## License

No license file is currently included in this repository. Add one if distribution terms are needed.
