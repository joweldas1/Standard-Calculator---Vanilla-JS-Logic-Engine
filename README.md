# Standard Calculator - Vanilla JS Logic Engine

**Developer Note (September 2026):** 
While my daily work involves building complex WordPress/WooCommerce architectures and custom CMS applications, I recently built this zero-framework project to demonstrate pure DOM manipulation, event delegation, and raw JavaScript logic. I believe in keeping core fundamentals sharp without relying on external libraries.

## Overview
A lightweight, fully functional arithmetic calculator built entirely with Vanilla JavaScript (ES6+), HTML, and CSS. This project serves as a technical exercise in managing application state, handling complex keyboard events, and writing clean mathematical logic without the safety net of modern frameworks like React.

## Core Features
* **Multi-Step Arithmetic Evaluations:** Handles continuous operation chaining smoothly.
* **Keyboard Accessibility:** Full support for physical keyboard inputs (numpad, standard numbers, Enter for '=', Backspace for 'DEL').
* **Decimal Precision Handling:** Prevents multiple decimals in a single operand and handles standard JavaScript floating-point quirks.
* **Responsive UI:** Clean, modern interface built with CSS Flexbox/Grid.

## Tech Stack
* **HTML5:** Semantic markup.
* **CSS3:** Custom styling, hover states, and responsive layout.
* **JavaScript (ES6+):** Pure logic, DOM manipulation, and event listener management.

## Technical Highlights
Rather than using the risky `eval()` function, this calculator relies on a custom switch-case computation engine. The codebase highlights:
1. **State Management:** Tracking current operands, previous operands, and selected operators natively using JS classes or object structures.
2. **Event Mapping:** Connecting both mouse clicks and physical keystrokes to the exact same logic execution paths to keep the code DRY (Don't Repeat Yourself).
3. **Edge Case Prevention:** Handling scenarios like dividing by zero or appending multiple decimal points.

## How to Run (Local Setup)
Because this is a zero-framework project, running it is incredibly simple:
1. Clone this repository to your local machine.
2. Navigate to the project folder.
3. Double-click the `index.html` file to open it in any modern web browser.
4. No build tools, Webpack, or `npm install` required - it runs natively in the browser.

---
*Built by [Jowel Das](https://joweldas.vercel.app/) - CMS & Web Developer.*