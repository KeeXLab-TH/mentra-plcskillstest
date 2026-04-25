# UI/UX Redesign Implementation Plan

## Goal Description
The objective is to perform a complete UI/UX overhaul of the "PLC Skill Test" web application (`index.html`, `dashboard.html`, `exam.html`, `admin.html`). The new design will be modern, clean, and highly professional—suitable for a large corporate organization. 

We will introduce the following libraries via CDN:
- **Tailwind CSS & DaisyUI**: For rapid, modern, and responsive UI components.
- **Font Awesome**: For professional icons.
- **SweetAlert2**: For beautiful alerts and confirmation dialogs.
- **AOS (Animate On Scroll)**: For smooth reveal animations.
- **Swiper.js**: For touch-friendly sliders (e.g., swiping through exam sets or branches on mobile).

We will also implement a centralized global loading state (spinning loader) for operations that take time, such as syncing with Firebase or logging in.

> [!IMPORTANT]
> This is a major architectural redesign of the frontend. All inline Javascript that renders HTML (like `renderGrid()` in `dashboard.html`, `renderQuestions()` in `exam.html`, and rendering logic in `admin.html`) will be updated to output Tailwind/DaisyUI compatible markup. Existing `id`s used for logic will be strictly preserved.

## Proposed Changes

---

### Global Assets & Styles
#### [MODIFY] `assets/style.css`
- Remove legacy layout/card/button styles to prevent conflicts with Tailwind/DaisyUI.
- Add custom utility classes for glassmorphism, background animations, custom scrollbars, and specific typographic tweaks.

#### [MODIFY] `assets/app.js`
- Create a global `showLoading(message)` and `hideLoading()` utility using SweetAlert2 or a custom DaisyUI overlay to handle the requested "หมุนๆ เวลารอนาน" (spinning loader).

---

### Pages (HTML)

#### [MODIFY] `index.html`
- **Head**: Inject CDN links for Tailwind, DaisyUI, SweetAlert2, FontAwesome, AOS.
- **Layout**: Implement a modern split-screen or centered glassmorphism design for the login/register forms. 
- **Typography**: Apply `Sarabun` font globally via Tailwind configuration.
- **Interactions**: Use SweetAlert2 for login/register errors and success messages. Implement the global loader during authentication.
- **Animations**: Add AOS classes (`data-aos="fade-up"`) to elements.

#### [MODIFY] `dashboard.html`
- **Head**: Inject CDN links.
- **Navbar**: Replace with DaisyUI `<div class="navbar">`.
- **Hero & Stats**: Use DaisyUI `<div class="stats">` for the top overview numbers.
- **Branch Tabs**: Implement a Swiper.js slider for branch selection on mobile, or clean Tailwind flex containers.
- **Scripts**: Rewrite `renderGrid()` to generate modern DaisyUI `<div class="card">` elements instead of the old `.exam-set-card`.

#### [MODIFY] `exam.html`
- **Head**: Inject CDN links.
- **Layout**: Clean, distraction-free interface. Sticky header with a prominent, styled timer.
- **Questions**: Rewrite `renderQuestions()` to generate Tailwind-styled blocks with DaisyUI radio buttons (`radio radio-primary`).
- **Navigation (Dots)**: Use a sleek Tailwind grid or Swiper slider for jumping between questions.
- **Modals**: Replace the old HTML modals (`#submitModal`, `#cancelModal`, `#reportModal`) with SweetAlert2 or DaisyUI modals (`<dialog class="modal">`).

#### [MODIFY] `admin.html`
- **Head**: Inject CDN links.
- **Layout**: Modern admin dashboard layout (sidebar or clean top-nav with tabs).
- **Tabs**: Update tab buttons and content areas to use Tailwind styling.
- **Overview Stats**: Use DaisyUI Stats component.
- **Tables**: Apply DaisyUI `table` classes for the Users, Results, and Sets lists.
- **Scripts**: Update inline JS rendering (like `reportsList`, `usersTableBody`) to output Tailwind-styled rows and badges. Use SweetAlert2 for delete confirmations.

## User Review Required
> [!WARNING]
> Because existing JavaScript directly outputs HTML strings (e.g., `grid.innerHTML += '<div class="...">...'`), replacing these templates is necessary to apply the new UI framework. I will ensure all critical `id` and `onclick` attributes remain exactly the same to preserve functionality.

## Verification Plan
### Automated & Manual Testing
- **Visual Check**: Verify that all pages load with the new Tailwind/DaisyUI styling.
- **Responsiveness**: Ensure the layout adapts gracefully to mobile screens.
- **Functionality**: 
  - Test Login and Registration to ensure Firebase sync and loader work.
  - Test `dashboard.html` to ensure Exam Sets load correctly.
  - Test `exam.html` to ensure questions render, radio buttons work, timer functions, and submission succeeds.
  - Test `admin.html` to ensure tables populate and tabs switch correctly.
