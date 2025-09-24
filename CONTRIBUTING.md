# Contributing to the St. George Photography Website

Thanks for your interest in contributing! This document explains how to set up the project locally, coding conventions, and the process for issues and pull requests.

Getting started locally

1. Fork the repository and create a branch for your work:

   git clone <https://github.com/your-username/stgeorge-photography.git>
   cd stgeorge-photography
   git checkout -b feature/your-feature

2. Install dependencies and run the dev server:

   npm install
   npm run dev

3. Make changes and run the site locally to verify them.

Coding guidelines

- JavaScript/TypeScript: follow existing patterns in the repo; use TypeScript types where available.
- Styling: prefer Tailwind utilities and component-scoped CSS in `src/styles`.
- Accessibility: ensure images have alt text, use semantic HTML, and test with keyboard-only navigation.

Pull request process

- Open an issue first if the change is non-trivial.
- Create a single PR per logical change with a clear description and screenshots if relevant.
- Add unit or integration tests when adding or changing functionality.

Reporting bugs

- Provide steps to reproduce, expected behavior, and environment (OS, node version).

Contact

- For paid work or sponsorship inquiries, see `README.md` Funding section.
