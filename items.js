/**
 * ============================================================
 *  BANKAPUR STORES · BOOK STALL — ITEMS DATA FILE
 * ============================================================
 *  HOW TO USE:
 *  1. Each object in window.SECTIONS is one section (category).
 *  2. The `id`  → used for the category pill filter. Keep it short, no spaces.
 *  3. The `label` → displayed as the pill text and section header.
 *  4. Add as many sections as you want — pills and sections generate automatically.
 *  5. Each item inside `products` follows this structure:
 *
 *     {
 *       id:        1,               // unique number across ALL sections
 *       name:      "Item Name",
 *       image:     "img/file.jpg",  // or "" for placeholder
 *       price:     25,              // selling price (₹)
 *       mrp:       30,              // original MRP — shown struck-through
 *       stock:     10,              // current stock count (set to 0 → Out of Stock)
 *       available: true             // false → always Out of Stock regardless of stock
 *     }
 *
 *  ⚠️  id must be unique across every section.
 *  ⚠️  Do NOT rename window.SECTIONS — index.html depends on it.
 * ============================================================
 */

window.SECTIONS = [

  /* ── SECTION 1 : SINGLE LINE BOOKS ─────────────────────── */
  {
    id:    "single-line",
    label: "Single Line Books",
    products: [
      { id: 1,  name: "A4 Single Line Notebook 100 Pages", image: "", price: 35,  mrp: 45,  stock: 20, available: true },
      { id: 2,  name: "A5 Single Line Notebook 200 Pages", image: "", price: 55,  mrp: 70,  stock: 15, available: true },
      { id: 3,  name: "Long Notebook Single Line 300 Pages",image: "", price: 70,  mrp: 85,  stock: 8,  available: true },
      { id: 4,  name: "Pocket Diary Single Line",          image: "", price: 25,  mrp: 30,  stock: 0,  available: true },
    ]
  },

  /* ── SECTION 2 : BOOKS ──────────────────────────────────── */
  {
    id:    "books",
    label: "Books",
    products: [
      { id: 5,  name: "A4 Ruled Notebook 200 Pages",       image: "", price: 60,  mrp: 75,  stock: 12, available: true },
      { id: 6,  name: "A5 Four-Line Notebook",             image: "", price: 40,  mrp: 50,  stock: 10, available: true },
      { id: 7,  name: "Drawing Book A4 60 Pages",          image: "", price: 50,  mrp: 65,  stock: 5,  available: true },
      { id: 8,  name: "Graph Book A4",                     image: "", price: 45,  mrp: 55,  stock: 0,  available: false },
    ]
  },

  /* ── SECTION 3 : PENS & PENCILS ─────────────────────────── */
  {
    id:    "pens-pencils",
    label: "Pens & Pencils",
    products: [
      { id: 9,  name: "Reynolds 045 Fine Carbure (10 pc)", image: "", price: 55,  mrp: 70,  stock: 30, available: true },
      { id: 10, name: "Cello Pinpoint Pen (5 pc)",         image: "", price: 40,  mrp: 50,  stock: 18, available: true },
      { id: 11, name: "Natraj HB Pencil (10 pc)",          image: "", price: 25,  mrp: 30,  stock: 25, available: true },
      { id: 12, name: "Apsara Platinum Pencil (10 pc)",    image: "", price: 30,  mrp: 38,  stock: 20, available: true },
      { id: 13, name: "Camlin Geometry Pen (Blue)",        image: "", price: 15,  mrp: 20,  stock: 0,  available: true },
    ]
  },

  /* ── SECTION 4 : STATIONERY ──────────────────────────────── */
  {
    id:    "stationery",
    label: "Stationery",
    products: [
      { id: 14, name: "Stapler with 1000 Pins",            image: "", price: 85,  mrp: 110, stock: 7,  available: true },
      { id: 15, name: "Scissors (Medium)",                  image: "", price: 45,  mrp: 60,  stock: 9,  available: true },
      { id: 16, name: "Fevistick Glue Stick",               image: "", price: 20,  mrp: 25,  stock: 14, available: true },
      { id: 17, name: "Scale 30cm Transparent",             image: "", price: 10,  mrp: 15,  stock: 22, available: true },
      { id: 18, name: "Geometry Box (Camlin)",              image: "", price: 120, mrp: 150, stock: 6,  available: true },
    ]
  },

  /* ── ADD MORE SECTIONS BELOW THIS LINE ───────────────────── */
  /*
  {
    id:    "your-section-id",
    label: "Your Section Label",
    products: [
      { id: 19, name: "...", image: "", price: 0, mrp: 0, stock: 10, available: true },
    ]
  },
  */

];
