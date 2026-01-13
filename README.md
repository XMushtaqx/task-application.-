Task / Productivity App

## Overview
This is a **multi-page task management web application** built with **HTML, Tailwind CSS, and vanilla JavaScript**.  
It is designed as a **real-world frontend project**, with proper architecture for authentication, task management, and state handling.  

The app is **modular**, production-ready, and can serve as a foundation for advanced frontend concepts like componentization, service layers, and async behavior.

---

## Features (Planned / Scaffolded)

- **Authentication Pages**
  - `login.html` — login form with email and password
  - `register.html` — registration form with email, password, confirm password
- **Dashboard**
  - Displays task overview
  - Add tasks input
  - Placeholder for task list and empty state
- **Task Details Page**
  - View/Edit a single task
  - Task title, description, and status
  - Save/Delete buttons
  - Validation messages for missing or incorrect inputs

> Currently, pages are scaffolded with **IDs and layout** ready for JS wiring.

---

## Folder Structure

/project-2-task-app
│
├─ /pages
│ ├─ login.html
│ ├─ register.html
│ ├─ dashboard.html
│ └─ task.html
│
├─ /css
│ └─ tailwind.css (global styles via CDN)
│
├─ /js
│ ├─ /core (app-wide logic: storage.js, auth.js, router.js)
│ ├─ /models (Task model: task.model.js)
│ ├─ /services (Task services: task.service.js)
│ ├─ /ui (Reusable UI components: taskCard.js, emptyState.js)
│ └─ /pages (Page controllers: login.js, register.js, dashboard.js, task.js)
│
└─ README.md

markdown
Copy code

---

## Development Notes

- **Tailwind CSS** is used for rapid, consistent styling.
- **IDs on inputs, buttons, and containers** are ready for JavaScript event handling.
- Error messages use the `hidden` class for easy toggling.
- Pages are **modular**, meaning the HTML scaffolding is separate from JS logic and services.
- Button IDs, input IDs, and form IDs are consistent across pages to simplify JS wiring.
- Labels use `sr-only` classes for accessibility.

---

## Next Steps

1. Implement `storage.js` to handle localStorage-based persistence for tasks and users.
2. Implement `auth.js` for login/register authentication flow.
3. Implement `task.model.js` for task structure and validation.
4. Implement `task.service.js` for CRUD operations.
5. Wire **page controllers** (`login.js`, `register.js`, `dashboard.js`, `task.js`) to connect DOM elements, call services, and render UI.
6. Implement **UI components** (`taskCard.js`, `emptyState.js`) for reusable DOM elements.
7. Add **task list rendering**, **empty state handling**, and **form validation**.

---

## How to Run

1. Clone the repository:

```bash
git clone <repo-url>
cd project-2-task-app
Open any HTML page in your browser (no server required for basic scaffolding):

bash
Copy code
open pages/login.html
JS wiring will handle interactions once implemented.

Author
Your Name — Junior Frontend Developer leveling up to intermediate level.

Project is part of a 3-project rotation system for multi-page real-world frontend applications.
