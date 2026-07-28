#  - COMPLETED ✅

## Step 1: index.html - Semantic & ARIA improvements ✅
- [x] Wrap content in `<main>` landmark
- [x] Add `<section>` with `aria-labelledby` for the quiz
- [x] Add `aria-live="polite"` region for screen reader announcements
- [x] Add `aria-atomic="true"` on live region for complete announcement
- [x] Add skip-to-content link for keyboard navigation
- [x] Use `aria-labelledby` to associate question with answers container (`role="group"`)
- [x] Add `tabindex="-1"` on question heading for programmatic focus

## Step 2: script.js - Focus & announcement improvements ✅
- [x] Add `announce()` function using `aria-live` region
- [x] Focus management: move focus to question heading on new question
- [x] Announce correct/incorrect feedback via screen reader
- [x] Announce score and final results via live region
- [x] Use `aria-label` for dynamic button text (answers + next/try again)

## Step 3: style.css - Visual accessibility ✅
- [x] Add prominent `:focus-visible` outline styles for buttons and heading
- [x] Add `prefers-reduced-motion` media query
- [x] Add `prefers-color-scheme: dark` support
- [x] Style skip link visibility on focus
- [x] Add `.sr-only` utility class for screen-reader-only content
- [x] Add `outline-offset` for better visibility

