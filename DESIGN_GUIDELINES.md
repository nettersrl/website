# Design Guidelines

## Core Design Principles

### Edges and Borders
- **SQUARED EDGES ONLY** - This website must use squared edges throughout
- NO rounded corners (`rounded-lg`, `rounded-md`, etc.)
- All containers, cards, tiles, and UI elements should have sharp, angular corners
- This applies to:
  - Feature tiles/cards
  - Content containers
  - Buttons (if customized)
  - Modal/popup containers
  - Navigation elements
  - Any bordered elements

### Visual Consistency
- Maintain squared edge aesthetic across all pages and components
- Use sharp, geometric design language
- Modern, angular appearance preferred over soft, rounded designs

### Text Readability
- Use dark backgrounds (`bg-black/60`) for content overlays on images
- Apply text shadows for better contrast against background images
- Ensure high contrast ratios for accessibility

### Background Images
- Use local images from `src/assets/` directory
- Apply proper background sizing and positioning
- Layer content appropriately with z-index

## Implementation Notes
- Always check for `rounded-*` classes when creating or modifying components
- Maintain design consistency across all pages
- This preference should be applied to any new components or pages created