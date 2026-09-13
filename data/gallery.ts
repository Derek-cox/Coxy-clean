/**
 * ─────────────────────────────────────────────────────────────────────────
 *  OUR WORK — PHOTO GALLERY CONFIG
 * ─────────────────────────────────────────────────────────────────────────
 *
 *  HOW TO ADD PHOTOS (no component code to touch):
 *
 *  1. Drop your image files into  public/gallery/
 *  2. Add an entry to `galleryItems` below. Paths start with "/gallery/".
 *  3. Save. The tabs, counts, captions, and lightbox all follow.
 *
 *  BEFORE/AFTER PAIR — gets an interactive drag slider:
 *    { id: "...", category: "move", caption: "Deep clean — oven",
 *      before: "/gallery/x-before.jpg", after: "/gallery/x-after.jpg",
 *      featured: true }
 *
 *  SINGLE PHOTO:
 *    { id: "...", category: "airbnb", caption: "Airbnb turnover — kitchen",
 *      src: "/gallery/x.jpg" }
 *
 *  FIELDS
 *  • `category` decides which filter pill the photo appears under. Change
 *    this one word to re-file a photo.
 *  • `caption` prints under the photo and is used as its alt text. Keep it
 *    to service type plus the room. Only name a town if you actually know
 *    it — e.g. "Move-out clean — Bellefonte".
 *  • `featured: true` promotes a before/after pair to the large slider
 *    band at the top of the page. Two or three featured pairs is the sweet
 *    spot; more than that and the band gets long.
 *
 *  IMAGE PREP: 1600px on the long edge, JPG, under ~400KB. All photos in
 *  here are portrait 3:4, which is what the grid tiles are shaped for.
 * ─────────────────────────────────────────────────────────────────────────
 */

/** One-line reassurance printed above the gallery. */
export const TRUST_LINE =
  "Every photo below is a real CoxyClean job — no stock photos.";

export type GalleryCategoryId =
  | "residential"
  | "move"
  | "airbnb"
  | "commercial";

/** The filter pills, including the "All" pseudo-category. */
export type FilterId = "all" | GalleryCategoryId;

export type GalleryItem = {
  /** Unique key. Anything, as long as no two items share it. */
  id: string;
  /** Which filter pill this photo appears under. */
  category: GalleryCategoryId;
  /** Printed under the photo and used as its alt text. */
  caption: string;
  /** Single-photo entries: the image path. */
  src?: string;
  /** Before/after entries: the "before" image path. */
  before?: string;
  /** Before/after entries: the "after" image path. */
  after?: string;
  /** Before/after entries only: show large at the top of the page. */
  featured?: boolean;
};

export const galleryFilters: { id: FilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "residential", label: "Residential" },
  { id: "move", label: "Move-In / Move-Out" },
  { id: "airbnb", label: "Airbnb" },
  { id: "commercial", label: "Commercial" },
];

// ─────────────────────────────────────────────────────────────────────────
//  PHOTOS
//
//  NOTE ON CATEGORIES: these were assigned from what's visible in each
//  photo, not from the filenames (the originals were all IMG_39xx.jpeg).
//  Staged towels on made beds read as short-term-rental turnover, so most
//  landed under "airbnb". You know which job was which — re-file any photo
//  by changing its `category` to "residential", "move", "airbnb", or
//  "commercial".
// ─────────────────────────────────────────────────────────────────────────
export const galleryItems: GalleryItem[] = [
  {
    id: "cooktop-deep-clean",
    category: "move",
    caption: "Deep clean — gas cooktop",
    before: "/gallery/cooktop-deep-clean-before.jpg",
    after: "/gallery/cooktop-deep-clean-after.jpg",
    featured: true,
  },
  {
    id: "turnover-kitchen-island",
    category: "airbnb",
    caption: "Airbnb turnover — kitchen and island",
    src: "/gallery/turnover-kitchen-island.jpg",
  },
  {
    id: "turnover-living-room",
    category: "airbnb",
    caption: "Airbnb turnover — living room",
    src: "/gallery/turnover-living-room.jpg",
  },
  {
    id: "turnover-lounge",
    category: "airbnb",
    caption: "Airbnb turnover — lower-level lounge",
    src: "/gallery/turnover-lounge.jpg",
  },
  {
    id: "turnover-queen-bedroom",
    category: "airbnb",
    caption: "Airbnb turnover — guest bedroom",
    src: "/gallery/turnover-queen-bedroom.jpg",
  },
  {
    id: "turnover-twin-bedroom",
    category: "airbnb",
    caption: "Airbnb turnover — twin guest room",
    src: "/gallery/turnover-twin-bedroom.jpg",
  },
  {
    id: "turnover-main-bedroom",
    category: "airbnb",
    caption: "Airbnb turnover — main bedroom",
    src: "/gallery/turnover-main-bedroom.jpg",
  },
  {
    id: "turnover-bunk-room",
    category: "airbnb",
    caption: "Airbnb turnover — bunk room",
    src: "/gallery/turnover-bunk-room.jpg",
  },
  {
    id: "turnover-kitchen",
    category: "airbnb",
    caption: "Airbnb turnover — kitchen",
    src: "/gallery/turnover-kitchen.jpg",
  },
  {
    id: "turnover-bathroom",
    category: "airbnb",
    caption: "Airbnb turnover — full bathroom",
    src: "/gallery/turnover-bathroom.jpg",
  },
  {
    id: "turnover-powder-room",
    category: "airbnb",
    caption: "Airbnb turnover — powder room",
    src: "/gallery/turnover-powder-room.jpg",
  },
  {
    id: "vacuumed-carpet",
    category: "airbnb",
    caption: "Airbnb turnover — bedroom carpets vacuumed",
    src: "/gallery/vacuumed-carpet.jpg",
  },
];

/** Placeholder tiles shown only when no photos have been added at all. */
export const PLACEHOLDER_TILES = 6;

export function isBeforeAfter(
  item: GalleryItem
): item is GalleryItem & { before: string; after: string } {
  return Boolean(item.before && item.after);
}

export const featuredPairs = galleryItems.filter(
  (item) => item.featured && isBeforeAfter(item)
);

export function filterItems(filter: FilterId): GalleryItem[] {
  return filter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);
}
