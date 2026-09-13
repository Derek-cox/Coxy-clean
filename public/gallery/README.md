# Drop your job photos in this folder

Files here are served from the site root, so `public/gallery/kitchen.jpg`
is reachable at `/gallery/kitchen.jpg`.

## Two steps

1. Copy your image files into this folder.
2. Open `data/gallery.ts` and add an entry per photo. That file has
   commented-out examples you can copy.

Nothing else needs editing — the grid, the category tabs, the photo counts,
and the lightbox all read from that one list.

## Naming

Anything works, but a pattern keeps pairs obvious:

    airbnb-calder-before.jpg
    airbnb-calder-after.jpg
    res-kitchen.jpg

## Shooting tips

- **Before/after pairs convert best.** Shoot the "before" from a spot you can
  stand in again, and take the "after" from the exact same spot and angle.
  The comparison slider only lands when the framing matches.
- Landscape orientation crops best into the 4:3 grid tiles.
- Resize to roughly 1600px on the long edge and keep files under ~400KB.
  Most ad traffic is on phones — large files cost you clicks.
- Never include guest or client belongings, mail, photos, or anything
  identifying without asking the owner first.
