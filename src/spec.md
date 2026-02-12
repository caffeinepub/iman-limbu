# Specification

## Summary
**Goal:** Make the landing page reliably display the user photo and play the background track in production using local static assets, with clear fallbacks and error handling.

**Planned changes:**
- Update the landing page photo to use a local static portrait image as the primary source, with a graceful fallback to `/assets/generated/photo-placeholder.dim_1024x1024.png` if the local image is missing or fails to load (and not rely on the Google Photos share URL as the primary source).
- Fix the landing page music player to load and play the track from `/assets/20-dollears-in-my-pocket.mp3` reliably in production.
- Add user-visible error messaging near the player if the MP3 fails to fetch/decode, suggesting refresh or checking the asset path, while keeping the track label exactly: "20 dollears in my pocket".
- Ensure the required static assets (the portrait photo and the MP3) are present in the frontend build output under the public `/assets/...` path so they can be fetched via absolute URLs.

**User-visible outcome:** The landing page shows the user’s photo consistently after deployment (with a placeholder if it can’t load), and the music track plays in production with a clear on-page error message if the audio fails to load.
