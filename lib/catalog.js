// ─────────────────────────────────────────────────────────────
//  Product catalog — the single source of truth for what's for sale.
//  Price IDs are NOT secret; safe to ship to the browser.
//  1. Create each Product + Price in Stripe.
//  2. Replace every "price_REPLACE_*" below with the real price ID.
//  Display strings are cosmetic — the real amount lives in Stripe.
// ─────────────────────────────────────────────────────────────

export const BAGEL_FLAVORS = [
  "Plain",
  "Everything",
  "Sesame",
  "Poppy",
  "Cinnamon Raisin",
  "Asiago",
  "Jalapeño Cheddar",
  "Salt",
];

export const bagelBatches = [
  {
    id: "half",
    label: "Half dozen",
    count: 6,
    oneTimePriceId: "price_REPLACE_bagel_half_once",
    subscriptionPriceId: "price_REPLACE_bagel_half_week",
    oneTimeDisplay: "$18",
    subscribeDisplay: "$15.30",
  },
  {
    id: "dozen",
    label: "Dozen",
    count: 12,
    oneTimePriceId: "price_REPLACE_bagel_dozen_once",
    subscriptionPriceId: "price_REPLACE_bagel_dozen_week",
    oneTimeDisplay: "$30",
    subscribeDisplay: "$25.50",
    featured: true,
  },
  {
    id: "bakers",
    label: "Baker's dozen",
    count: 13,
    oneTimePriceId: "price_REPLACE_bagel_bakers_once",
    subscriptionPriceId: "price_REPLACE_bagel_bakers_week",
    oneTimeDisplay: "$32",
    subscribeDisplay: "$27.20",
  },
];

export const breads = [
  {
    id: "country",
    name: "Country Sourdough",
    blurb: "Our everyday loaf — open crumb, blistered crust, long cold ferment.",
    priceDisplay: "$9",
    oneTimePriceId: "price_REPLACE_bread_country_once",
  },
  {
    id: "seeded",
    name: "Seeded Multigrain",
    blurb: "Toasted sunflower, flax, and sesame folded through a hearty crumb.",
    priceDisplay: "$11",
    oneTimePriceId: "price_REPLACE_bread_seeded_once",
  },
];

export const tiers = [
  {
    id: "bagel-club",
    name: "Bagel Club",
    blurb: "Just bagels — a dozen, mixed as you like, on your doorstep weekly.",
    priceDisplay: "$26",
    cadence: "/ week",
    priceId: "price_REPLACE_tier_bagelclub_week",
    features: [
      "One dozen bagels weekly",
      "Mix & match any flavors",
      "Free local delivery",
      "Pause or cancel anytime",
    ],
  },
  {
    id: "farmhouse-box",
    name: "The Farmhouse Box",
    blurb: "Bread and bagels together, one weekly delivery. Our best value.",
    priceDisplay: "$42",
    cadence: "/ week",
    priceId: "price_REPLACE_tier_farmhouse_week",
    featured: true,
    features: [
      "One loaf + a half dozen bagels weekly",
      "First pick of seasonal specials",
      "Free local delivery",
      "Pause or cancel anytime",
    ],
  },
  {
    id: "weekly-bread",
    name: "Weekly Loaf",
    blurb: "A fresh loaf of Country Sourdough, baked and delivered every week.",
    priceDisplay: "$28",
    cadence: "/ week",
    priceId: "price_REPLACE_tier_weeklybread_week",
    features: [
      "One loaf weekly",
      "Baker's choice or your standing pick",
      "Free local delivery",
      "Pause or cancel anytime",
    ],
  },
];
