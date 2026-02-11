# Specification

## Summary
**Goal:** Make the website name configurable from a single source of truth and apply it consistently to the browser/tab title, HTML metadata, and the only visible text on initial load.

**Planned changes:**
- Create a single, clearly-defined configuration location for the website name string to avoid duplicated hard-coded copies.
- Update the landing page so that on initial load the only visible on-page text is exactly the configured website name.
- Set the document/browser title to the configured website name.
- Add basic HTML head metadata that uses the same configured website name (at minimum: `title` and `og:title`) without introducing any additional visible UI text.

**User-visible outcome:** On first load, the page shows only the website name, and the browser tab title and common preview metadata reflect the same configured name.
