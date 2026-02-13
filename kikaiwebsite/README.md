# KIKAI Girls High School Website

A static multi-page school website built with HTML, CSS, and Vanilla JavaScript.

This project models a practical secondary-school website experience for:
- Students
- Parents and guardians
- School staff
- General visitors

It is intentionally simple and beginner-friendly, with no frameworks, no backend, and no build step.

## Project Purpose

The website provides core school information and student-portal basics in a lightweight format that can run on low-end devices and slower internet connections.

## Target Users

- Students: Portal registration/login and dashboard view
- Parents/Guardians: Access to announcements, contacts, departments, and documents
- Staff: School information pages and future portal integration
- Visitors: General school profile and updates

## Current Features

- Multi-page navigation (`Home`, `About`, `Contact`, `Portal`, `E-learning`, `Library`, `History/News`)
- Mobile-first responsive layout (Flexbox/Grid)
- Styled school UI with consistent spacing, typography, and color tokens
- Active navigation state (automatically applied by JavaScript)
- Student registration form with validation and inline feedback
- Student login with validation and session handling
- Dashboard with session-based user rendering and logout
- E-learning and library placeholder content in professional school tone
- Accessibility basics:
  - Semantic layout tags (`header`, `nav`, `main`, `section`, `footer`)
  - Form labels and helper text
  - `aria-live` feedback messages
  - `aria-current` support for active nav
  - Improved image `alt` text and keyboard-friendly links

## Folder Structure

```text
kikaiwebsite/
├── about.html
├── contact.html
├── dashboard.html
├── elearning.html
├── index.html
├── library.html
├── portal.html
├── school-details.html
├── std-login.html
├── std-registor.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
```

## How to Run Locally

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in your browser.

For better testing (recommended), serve files with a local static server.

Example:

```bash
# Python 3
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

### Option 1: GitHub Pages

1. Push the project to GitHub.
2. Go to `Settings` -> `Pages`.
3. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main` (or your default branch), folder `/ (root)`
4. Save and wait for deployment.
5. Use the generated GitHub Pages URL.

### Option 2: Netlify

1. Log in to Netlify.
2. Click `Add new site` -> `Import an existing project`.
3. Select your GitHub repository.
4. Build command: leave empty (not required for static HTML/CSS/JS).
5. Publish directory: `/` (root).
6. Deploy site.

## Known Limitations

- No backend/database (student data is browser storage only).
- Authentication is not secure for production use.
- Dashboard uses static placeholder academic data.
- Staff login and role-based access are not yet implemented.
- Download links are placeholders until final school documents are provided.

## Roadmap (Future Improvements)

- Add real backend authentication and role-based portals (student/staff/parent).
- Integrate real announcements and exam result data.
- Add downloadable real PDFs (fees, calendar, rules).
- Add search/filter in library resources.
- Improve chatbot/help panel with guided FAQ responses.
- Add multilingual support and stronger accessibility audits.

## Optional Refactor Suggestions

For larger classroom/team projects, consider:
- `pages/` for HTML pages
- `assets/images/` for images
- `css/` split into `base.css`, `layout.css`, and `components.css`
- `js/` split into `storage.js`, `auth.js`, and `ui.js`

## Submission Notes

This project is suitable for school or college frontend submission because it demonstrates:
- Responsive design
- Clean static architecture
- Basic form validation and session UX
- Accessibility-aware markup
- Clear documentation for non-technical reviewers
