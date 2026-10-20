# AeroBMSCE — Aerospace & UAV Club Website

A front-end-only, multi-page website concept for AeroBMSCE at BMS College of Engineering. The visual direction combines an editorial aircraft-manufacturer layout with flight-instrument and technical drawing cues.

## Run locally
1. Extract the ZIP.
2. Open the extracted folder in VS Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. Use the top navigation to open Overview, Flight Log, Gallery, Partners and Contact.

No backend, package installation or build step is required. The contact form uses `mailto:` and prepares an email; it does not store or send form data itself.

## Photographs
Photographs are loaded directly from the public source repository’s `images/` folder, so you do not need to download or re-upload them. The landing-page aircraft hero is a locally stored custom SVG illustration at `assets/images/aircraft-hero.svg`; it can later be replaced with an approved club aircraft photo.

## Content
The pages present the club overview, teams, competition results, research initiatives, partner ecosystem, collaboration tiers and contact information.

## Files
- `index.html` — overview and recent highlights
- `journey.html` — teams and competition history (2018–2026)
- `gallery.html` — expanded visual archive of aircraft, team, workshop and flight activity
- `partners.html` — ecosystem, R&D, upcoming events and collaboration tiers
- `contact.html` — club contact details and front-end enquiry form
- `styles.css` — shared design system and page styling
- `script.js` — navigation state, mobile menu and email-form handler


## Image assets

The design uses the public images already referenced by the supplied AeroBMSCE task repository, loaded from its `main/images/` folder. If the original repository renames or removes those files, update the `raw.githubusercontent.com/rajeshbharadwaj44/AeroBMSCE_TASK_REPO/main/images/` URLs in the HTML/CSS. For a fully self-contained deployment, copy the original `images/` folder into this project and change those image URLs to relative `images/...` paths.

## Navigation and animation

All page navigation uses relative HTML paths (`index.html`, `journey.html`, `partners.html`, `contact.html`) so it works locally and on GitHub Pages. The contact form opens a pre-filled email draft (no backend is required). A cinematic drone intro traces a diagonal flight path with a loop, then disappears. It plays once per browser tab session and respects reduced-motion preferences. Partner wordmarks scroll continuously in a horizontal marquee.
