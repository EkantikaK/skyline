# SKYLINE — Responsive Event and Discovery Portal

**Course:** K-Explore – Web Designing  
**Project:** Design and Develop a Responsive Event Management Website  
**Author:** Ekantika Kumari  
**Roll Number:** 24155625  
**GitHub Repository:** https://github.com/EkantikaK/skyline  
**Live Application:** https://skyline-green-rho.vercel.app/  

---

## Overview

SKYLINE is an event discovery and reservation platform designed to browse curated experiences across cinema, music festivals, culinary pop-ups, and regional getaways. The application combines custom interactive interface elements with a robust client-side event management pipeline, complete with form validation and local storage pass persistence.

---

## Project Objectives

* Deliver an interactive hero experience with layered visual staging and dynamic system dispatching.
* Structure and categorize event listings across distinct cultural districts (Cinema & Shows, Live Experiences, Brunch & Dining, Getaways & Voyages).
* Enforce structural card dimensions while accommodating category-specific media aspect ratios.
* Implement a JavaScript-based registration engine featuring strict input validation, real-time error reporting, and toast feedback.
* Provide client-side reservation persistence via LocalStorage with full view, badge count, and cancellation support.
* Maintain a responsive design architecture supporting desktop, tablet, and mobile viewport widths.

---

## Technical Specifications

* **Markup:** HTML5 semantic structure, viewport configuration, accessible modal wrappers.
* **Styling:** CSS3 variables, CSS Grid, Flexbox, custom keyframe animations, and layered backdrops.
* **Logic:** Vanilla JavaScript (ES6+), DOM manipulation, regex-based validation, state handling, and LocalStorage APIs.
* **Typography & Icons:** Space Grotesk, Syne, Plus Jakarta Sans, and FontAwesome 6.
* **Hosting & CI/CD:** GitHub, Vercel edge deployment.

---

## Core Architecture and Features

### 1. Interactive Signpost Stage
* Staged vector backdrop with procedural cloud movement.
* Interactive signpost hotspots paired with real-time shader overlays on hover.
* Live dispatch component calculating greeting intervals, system time, and date.
* Interactive cursor-tracked radial shader mask on brand typography.

### 2. Experience Districts and Event Carousels
* **Cinema & Shows:** Curated screenings presented in a 35mm film-strip frame with a vertical poster aspect ratio (~2:3).
* **Live Experiences:** Concerts and festivals displayed in a wide landscape poster format.
* **Brunch & Dining:** Tasting tables and artisan sessions framed in a cafe menu format.
* **Getaways & Voyages:** Curated regional itineraries with expedition airmail framing.
* Unified outer card dimensions of 880x440px across all districts to ensure visual consistency.

### 3. Pass Reservation and Client Validation
* Dynamic modal displaying event details, schedules, venues, and pricing.
* Form validation enforcing:
  * Name field verification (minimum 3 characters).
  * Valid email pattern verification via regular expressions.
  * 10-digit mobile number numerical verification.
* Accessible click-outside handling for modal overlays and wallet drawers.

### 4. Data Persistence (Pass Wallet)
* Client-side pass storage using the `metro_passes` local storage key.
* Dynamic counter badge showing active registrations in real time.
* Slide-out wallet drawer displaying pass holder credentials, event details, and booking timestamps.
* Pass cancellation handler to remove individual reservations directly from local storage.

---

## Repository Structure

```text
skyline/
├── index.html        Main markup structure and application containers
├── css/
│   └── style.css     Theme variables, layouts, and responsive breakpoints
├── js/
│   └── app.js        District data arrays, carousel state, validation, storage
├── assets/           Optimized images, shaders, and UI cutouts
└── README.md         Project documentation and submission details
```

---

## Local Development and Deployment Setup

To clone, run, or verify this project locally on your machine:

1. Clone the repository using Git:
```bash
git clone [https://github.com/EkantikaK/skyline.git](https://github.com/EkantikaK/skyline.git)
```

2. Navigate into the cloned repository folder:
```bash
cd skyline
```

3. Launch the application:
* Direct launch: Double-click `index.html` to open it in any modern browser (Chrome, Edge, Firefox, Safari).
* Development server: If using VS Code, right-click `index.html` and select **Open with Live Server**.

---

## Submission Summary

* **Student Name:** Ekantika Kumari
* **Roll Number:** 24155625
* **Repository Link:** https://github.com/EkantikaK/skyline
* **Live Deployment Link:** https://skyline-green-rho.vercel.app/
