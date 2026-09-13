/**
 * ─────────────────────────────────────────────────────────────────────────
 *  OUR WORK — PHOTO GALLERY CONFIG
 * ─────────────────────────────────────────────────────────────────────────
 *
 *  HOW TO ADD PHOTOS (no component code to touch):
 *
 *  1. Drop your image files into  public/gallery/
 *     e.g.  public/gallery/airbnb-calder-before.jpg
 *           public/gallery/airbnb-calder-after.jpg
 *
 *  2. Add an entry to `galleryItems` below. Paths always start with
 *     "/gallery/" — that maps to the public/gallery folder.
 *
 *     A BEFORE/AFTER PAIR (best converting — use this whenever you have both):
 *       {
 *         id: "airbnb-calder",
 *         category: "airbnb",
 *         title: "2BR downtown turnover",
 *         before: "/gallery/airbnb-calder-before.jpg",
 *         after: "/gallery/airbnb-calder-after.jpg",
 *       },
 *
 *     A SINGLE PHOTO:
 *       {
 *         id: "res-kitchen",
 *         category: "residential",
 *         title: "Kitchen deep clean",
 *         src: "/gallery/res-kitchen.jpg",
 *       },
 *
 *  3. Save. That's it — the grid, the category tabs, the counts, and the
 *     lightbox all update themselves.
 *
 *  NOTES
 *  • `id` just needs to be unique. `title` shows under the photo and is
 *    used for the image alt text, so describe the space briefly.
 *  • Any category with no entries automatically shows "Photo coming soon"
 *    placeholder tiles instead, so the page never looks broken.
 *  • Keep files under ~400KB each for fast mobile loads. JPG or WebP,
 *    roughly 1600px on the long edge, is plenty. Shoot before/after pairs
 *    from the SAME spot and angle — that's what makes the slider land.
 * ─────────────────────────────────────────────────────────────────────────
 */

export type GalleryCategoryId =
  | "airbnb"
  | "residential"
  | "move"
  | "commercial";

export type GalleryItem = {
  /** Unique key. Anything, as long as no two items share it. */
  id: string;
  /** Which tab this photo lives under. */
  category: GalleryCategoryId;
  /** Short description of the space. Shown as a caption + used as alt text. */
  title: string;
  /** Single-photo entries: the image path. */
  src?: string;
  /** Before/after entries: the "before" image path. */
  before?: string;
  /** Before/after entries: the "after" image path. */
  after?: string;
};

export const galleryCategories: {
  id: GalleryCategoryId;
  label: string;
  blurb: string;
}[] = [
  {
    id: "airbnb",
    label: "Airbnb Turnover",
    blurb: "Fast resets between guests, staged and photo-ready.",
  },
  {
    id: "residential",
    label: "Residential",
    blurb: "Recurring and one-time cleans for homes around State College.",
  },
  {
    id: "move",
    label: "Move-In / Move-Out",
    blurb: "Top-to-bottom deep cleans for handing over the keys.",
  },
  {
    id: "commercial",
    label: "Commercial",
    blurb: "Offices, retail, and small business spaces on your schedule.",
  },
];

// ─────────────────────────────────────────────────────────────────────────
//  ADD YOUR PHOTOS HERE. Uncomment the examples and edit, or write your own.
// ─────────────────────────────────────────────────────────────────────────
export const galleryItems: GalleryItem[] = [
  // {
  //   id: "airbnb-calder",
  //   category: "airbnb",
  //   title: "2BR downtown turnover",
  //   before: "/gallery/airbnb-calder-before.jpg",
  //   after: "/gallery/airbnb-calder-after.jpg",
  // },
  // {
  //   id: "move-oven",
  //   category: "move",
  //   title: "Move-out oven and range",
  //   before: "/gallery/move-oven-before.jpg",
  //   after: "/gallery/move-oven-after.jpg",
  // },
  // {
  //   id: "res-kitchen",
  //   category: "residential",
  //   title: "Kitchen deep clean",
  //   src: "/gallery/res-kitchen.jpg",
  // },
];

/** How many "Photo coming soon" tiles to show for an empty category. */
export const PLACEHOLDER_TILES = 6;

export function isBeforeAfter(
  item: GalleryItem
): item is GalleryItem & { before: string; after: string } {
  return Boolean(item.before && item.after);
}
