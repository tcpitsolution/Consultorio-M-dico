# Consultorio Médico del Dr. Álvaro Pascuales

Premium Spanish-language clinic website built with React, Vite, Tailwind CSS, Lucide React, and Framer Motion.

## Run locally
1. Install Node.js 18+.
2. Extract this project and open a terminal in the project folder.
3. Run `npm install`
4. Run `npm run dev`
5. For a production build, run `npm run build` and preview with `npm run preview`.

## Before publishing
- Verify the Google Maps place URL and exact location with the clinic.
- Confirm business hours (the listing currently says open 24 hours, pending confirmation).
- Confirm which services are actually offered; the service cards are explicitly marked as proposed.
- Add only verified Facebook / Instagram / LinkedIn URLs in `src/config.js`.
- Replace the privacy policy placeholder with the clinic-approved policy.
- Supply authentic clinic photographs if available. Current photos are generic editorial healthcare imagery and are not represented as photographs of Dr. Pascuales.
- A Google review page URL was not supplied; the current button opens a Google Maps search for the clinic.
- The chat is a rule-based informational assistant, not a live AI service. It does not diagnose or prescribe.
- The map is a reference map of Jama, not a verified pin at the exact clinic premises.

## Configuration
Edit `src/config.js` for clinic name, contact details, WhatsApp number, maps URL, and verified social profile links.
