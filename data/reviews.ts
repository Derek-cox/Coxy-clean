/**
 * ─────────────────────────────────────────────────────────────────────────
 *  CUSTOMER REVIEWS CONFIG
 * ─────────────────────────────────────────────────────────────────────────
 *
 *  This list is intentionally EMPTY. Nothing here is invented — the site
 *  shows a "Reviews coming soon" state until you add real ones below.
 *
 *  HOW TO ADD A REVIEW:
 *
 *    {
 *      id: "sarah-m",              // any unique string
 *      name: "Sarah M.",           // first name + last initial only
 *      rating: 5,                  // whole number, 1 through 5
 *      quote: "They turned our rental around in under three hours.",
 *      service: "Airbnb Turnover", // see SERVICE_LABELS below
 *      location: "State College",  // optional, omit if you'd rather not
 *    },
 *
 *  The section is designed to look right with as few as 3 reviews — you do
 *  not need dozens. 3 to 6 is the sweet spot; past 6 it scrolls as a
 *  carousel on mobile and a grid on desktop.
 *
 *  ONLY POST REVIEWS PEOPLE ACTUALLY GAVE YOU. If you're pulling them from
 *  Google or Facebook, copy the wording as written and shorten the display
 *  name to first name + last initial.
 * ─────────────────────────────────────────────────────────────────────────
 */

export type Review = {
  id: string;
  /** First name + last initial, e.g. "Sarah M." */
  name: string;
  /** Whole stars, 1–5. */
  rating: 1 | 2 | 3 | 4 | 5;
  /** The customer's own words. Two or three sentences reads best. */
  quote: string;
  /** Which service they booked — shows as a small tag on the card. */
  service: string;
  /** Optional neighborhood or town. */
  location?: string;
};

/** Suggested values for `service` so the tags stay consistent. */
export const SERVICE_LABELS = [
  "Airbnb Turnover",
  "Residential Cleaning",
  "Commercial Cleaning",
  "Move-In / Move-Out",
  "Deep Clean",
] as const;

// ─────────────────────────────────────────────────────────────────────────
//  ADD REAL REVIEWS HERE.
// ─────────────────────────────────────────────────────────────────────────
export const reviews: Review[] = [];
