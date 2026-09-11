import bouquetLargeBlue1 from "../screens/bouquet-screen/assets/bouquet-images/bouquet_large_blue_1.jpg";
import bouquetLargePink1 from "../screens/bouquet-screen/assets/bouquet-images/bouquet_large_pink_1.jpg";
import bouquetLargePurple1 from "../screens/bouquet-screen/assets/bouquet-images/bouquet_large_purple_1.jpg";
import bouquetLargePurpleWhite1 from "../screens/bouquet-screen/assets/bouquet-images/bouquet_large_purple_white_1.jpg";
import bouquetLargeRed1 from "../screens/bouquet-screen/assets/bouquet-images/bouquet_large_red_1.jpg";
import bouquetLargeRed2 from "../screens/bouquet-screen/assets/bouquet-images/bouquet_large_red_2.jpg";
import bouquetLargeYellow1 from "../screens/bouquet-screen/assets/bouquet-images/bouquet_large_yellow_1.jpg";
import bouquetLargeYellow2 from "../screens/bouquet-screen/assets/bouquet-images/bouquet_large_yellow_2.jpg";
import bouquetLargeYellow3 from "../screens/bouquet-screen/assets/bouquet-images/bouquet_large_yellow_3.jpg";
import bouquetLargeYellow4 from "../screens/bouquet-screen/assets/bouquet-images/bouquet_large_yellow_4.jpg";
import bouquetLargeYellow5 from "../screens/bouquet-screen/assets/bouquet-images/bouquet_large_yellow_5.jpg";

import bouquetSmallPink1 from "../screens/bouquet-screen/assets/bouquet-images/bouquet_small_pink_1.jpg";
import bouquetSmallPurple1 from "../screens/bouquet-screen/assets/bouquet-images/bouquet_small_purple_1.jpg";
import bouquetSmallTulips1 from "../screens/bouquet-screen/assets/bouquet-images/bouquet_small_tulips_1.jpg";
import bouquetSmallTulips2 from "../screens/bouquet-screen/assets/bouquet-images/bouquet_small_tulips_2.jpg";
import bouquetSmallTulips3 from "../screens/bouquet-screen/assets/bouquet-images/bouquet_small_tulips_3.jpg";
import bouquetSmallYellow1 from "../screens/bouquet-screen/assets/bouquet-images/bouquet_small_yellow_1.jpg";
import bouquetSmallYellowSunflower1 from "../screens/bouquet-screen/assets/bouquet-images/bouquet_small_yellow_sunflower_1.jpg";

export const HOME_PAGE = "/";
export const AMOR_FUZZIA = "AMor Fuzzia";

export const HANDMADE_BOUQUET_MATERIALS = [
  { name: "Fuzzy Wire", note: "Plush, flexible wire stems shaping each petal & leaf" },
  { name: "Pong Pong Balls", note: "Decorative plush accents & flower cores" },
  { name: "Tissue Paper", note: "Delicate inner layering for volume and texture" },
  { name: "Snow Dots", note: "Textured dot detailing & decorative accents" },
  { name: "Fish Tail Ribbon", note: "Premium accent bow with fish tail cut" },
  { name: "Pearls", note: "Elegant pearl adornments nestled among blooms" },
  { name: "Plastic Wrapper", note: "Protective, frosted aesthetic outer wrapper" },
  { name: "Honey Comb Paper", note: "Artisan textured wrapper layer" },
];

export const BOUQUET_PRODUCTS = [
  // ! commented out because of the image is not 
  // {
  //   id: 1,
  //   name: "Classic Pink Rose Bouquet",
  //   subtitle: "Single Stem Fuzzy Rose Bloom",
  //   price: "₱150",
  //   image: bouquetLargePink1,
  //   isLatest: true,
  //   tag: "New",
  //   description:
  //     "A timeless single-stem pink rose handcrafted with velvety plush fuzzy wire. Each petal is individually shaped and arranged by hand to create an everlasting keepsake. Perfect for thoughtful surprises, anniversaries, graduations, or a sweet desk companion.",
  //   materials: HANDMADE_BOUQUET_MATERIALS,
  //   details: {
  //     dimensions: "approx. 32 cm (H) × 14 cm (W)",
  //     craftTime: "1.5 – 2 Hours of handcrafting",
  //     bloomType: "Single Rose with Double Leaf Sprig",
  //   },
  // },
  {
    id: 1,
    name: "Sunburst Sunflower Bouquet",
    subtitle: "Bright Yellow Handcrafted Bloom",
    price: "₱50",
    image: bouquetSmallYellowSunflower1,
    isLatest: true,
    tag: "New",
    description:
      "Vibrant yellow sunflower handcrafted from bendable fuzzy wire with pong pong ball center and honeycomb paper wrapping.",
    materials: HANDMADE_BOUQUET_MATERIALS,
    details: {
      dimensions: "approx. 30 cm (H) × 14 cm (W)",
      craftTime: "1.5 – 2 Hours of handcrafting",
      bloomType: "Sunflower Bloom with Duo Leaves",
    },
  },
  {
    id: 2,
    name: "Lavender Twilight Bouquet",
    subtitle: "Handcrafted Purple Blossom",
    price: "₱100",
    image: bouquetLargePurple1,
    isLatest: true,
    tag: "New",
    description:
      "Delicate purple fuzzy wire blooms adorned with pearl accents and fish tail ribbon, wrapped in layered tissue and frosted plastic wrapper.",
    materials: HANDMADE_BOUQUET_MATERIALS,
    details: {
      dimensions: "approx. 32 cm (H) × 14 cm (W)",
      craftTime: "1.5 – 2 Hours of handcrafting",
      bloomType: "Sculpted Purple Bloom",
    },
  },
  {
    id: 3,
    name: "Pastel Tulip Trio",
    subtitle: "Handmade Spring Tulips",
    price: "₱35",
    image: bouquetSmallTulips1,
    isLatest: true,
    tag: "New",
    description:
      "Charming handcrafted tulips made with soft fuzzy wire stems, snow dots accents, and honeycomb paper.",
    materials: HANDMADE_BOUQUET_MATERIALS,
    details: {
      dimensions: "approx. 28 cm (H) × 12 cm (W)",
      craftTime: "2 Hours of handcrafting",
      bloomType: "Trio Tulip Sprig",
    },
  },
  {
    id: 4,
    name: "Royal Azure Bouquet",
    subtitle: "Vibrant Blue Artisan Arrangement",
    price: "₱100",
    image: bouquetLargeBlue1,
    isLatest: true,
    tag: "New",
    description:
      "Bold blue handmade fuzzy wire blooms accented with pearls, snow dots, and fish tail ribbon in an aesthetic waterproof wrapper.",
    materials: HANDMADE_BOUQUET_MATERIALS,
    details: {
      dimensions: "approx. 33 cm (H) × 15 cm (W)",
      craftTime: "2 Hours of handcrafting",
      bloomType: "Full Arrangement",
    },
  },
  {
    id: 5,
    name: "Crimson Romance Bouquet",
    subtitle: "Deep Red Fuzzy Wire Roses",
    price: "₱150",
    image: bouquetLargeRed1,
    isLatest: true,
    tag: "New",
    description:
      "Stunning deep red fuzzy wire rose arrangement embellished with pong pong balls and finished with an elegant ribbon.",
    materials: HANDMADE_BOUQUET_MATERIALS,
    details: {
      dimensions: "approx. 33 cm (H) × 15 cm (W)",
      craftTime: "2 Hours of handcrafting",
      bloomType: "Signature Rose Bloom",
    },
  },
  {
    id: 6,
    name: "Golden Sunshine Bouquet",
    subtitle: "Lush Yellow Fuzzy Wire Florals",
    price: "₱100",
    image: bouquetLargeYellow1,
    isLatest: true,
    tag: "New",
    description:
      "An energizing large bouquet of handcrafted yellow florals, wrapped in premium tissue paper, honeycomb paper, and fish tail ribbon.",
    materials: HANDMADE_BOUQUET_MATERIALS,
    details: {
      dimensions: "approx. 35 cm (H) × 16 cm (W)",
      craftTime: "2.5 Hours of handcrafting",
      bloomType: "Large Multi-Bloom Arrangement",
    },
  },
  {
    id: 7,
    name: "Violet & Ivory Blossom",
    subtitle: "Two-Tone Handcrafted Elegance",
    price: "₱100",
    image: bouquetLargePurpleWhite1,
    isLatest: true,
    tag: "New",
    description:
      "A delicate harmony of rich purple and soft ivory fuzzy wire flowers, accented with pearls and frosted plastic wrapper.",
    materials: HANDMADE_BOUQUET_MATERIALS,
    details: {
      dimensions: "approx. 32 cm (H) × 14 cm (W)",
      craftTime: "2 Hours of handcrafting",
      bloomType: "Dual-Tone Bouquet",
    },
  },
];

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contacts", href: "/contacts" },
  { label: "Bouquet", href: "/bouquet" },
  { label: "Find Us", href: "/find-us" },
];

export const MOBILE_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contacts", href: "/contacts" },
  { label: "Bouquet", href: "/bouquet" },
  { label: "Find Us", href: "/find-us" },
];

export const CONTACT_INFO = {
  phones: [
    {
      display: "0931 995 2887",
      raw: "09319952887",
      tel: "tel:09319952887",
      sms: "sms:09319952887",
      label: "Smart / TNT",
    },
    {
      display: "0956 991 1935",
      raw: "09569911935",
      tel: "tel:09569911935",
      sms: "sms:09569911935",
      label: "Globe / TM",
    },
  ],
  email: "amorfuzzia@gmail.com",
  gmailCompose: "https://mail.google.com/mail/?view=cm&fs=1&to=amorfuzzia@gmail.com&su=AMor%20Fuzzia%20Inquiry",
  mailto: "mailto:amorfuzzia@gmail.com?subject=AMor%20Fuzzia%20Inquiry",
  hours: "Monday – Sunday: 8:00 AM – 8:00 PM",
  responseNotice: "We usually respond within 1–2 hours during business hours.",
  location: "Philippines • Nationwide Delivery Available",
};

export const CONCERN_TOPICS = [
  { id: "custom", label: "🌸 Custom Bouquet", description: "Personalized flowers, colors & wrapping" },
  { id: "stock", label: "✨ Stock & Availability", description: "Inquire about ready-to-ship batches" },
  { id: "order", label: "📦 Order & Delivery", description: "Tracking, payment & courier inquiries" },
  { id: "bulk", label: "💐 Bulk / Events", description: "Weddings, graduations & event souvenirs" },
  { id: "other", label: "💌 Other Concern", description: "General questions & notes for our studio" },
];

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  toEmail: "amorfuzzia@gmail.com",
};

export const HIGHLIGHT_FEATURES = [
  {
    icon: "💐",
    title: "Accepting Orders",
    badge: "Made-to-Order",
    description:
      "Every single bloom and bouquet is lovingly crafted by hand to order, ensuring each piece is unique and fresh.",
  },
  {
    icon: "🎀",
    title: "Student-Friendly Budget",
    badge: "Less than ₱500",
    description:
      "Handmade fuzzy bouquets for under ₱500 — perfect for thoughtful gifts, surprises, and celebrations without overspending.",
  },
  {
    icon: "🤍",
    title: "Handmade with Love & Care",
    badge: "100% Artisan",
    description:
      "Crafted with soft plush chenille stems and milk cotton yarn, designed with attention to every delicate petal.",
  },
  {
    icon: "🎨",
    title: "Customizable Designs",
    badge: "Your Style",
    description:
      "Choose your favorite colors, themes, wrapping aesthetic, and ribbon style to match your recipient's taste.",
  },
  {
    icon: "⏳",
    title: "1–3 Days Production Time",
    badge: "Fast Crafting",
    description:
      "Standard production takes usually 1–3 days. Rush orders are accommodated depending on batch availability.",
  },
  {
    icon: "⚠️",
    title: "Limited Slots Per Day",
    badge: "Quality First",
    description:
      "We intentionally limit crafting slots each day to ensure every creation meets our highest quality standards.",
  },
];

export const ORDERING_STEPS = [
  {
    number: "1",
    icon: "📷",
    title: "Design Idea or Photo",
    desc: "Share your reference photo, requested flowers, or preferred color palette.",
  },
  {
    number: "2",
    icon: "💰",
    title: "Your Target Budget",
    desc: "Let us know your budget so we can adjust the flower count, wrapping, and design.",
  },
  {
    number: "3",
    icon: "📅",
    title: "Date Needed",
    desc: "Specify your event or celebration date so we can reserve your production slot.",
  },
];

export const NOT_NAVBAR_HOME = {
  "/": "AMor Fuzzia - Home",
  "/bouquet": "AMor Fuzzia - Bouquet",
  "/contacts": "AMor Fuzzia - Contacts",
  "/about": "AMor Fuzzia - About",
  "/find-us": "AMor Fuzzia - Find Us",
};

export const FULFILLMENT_OPTIONS = [
  {
    icon: "📦",
    title: "Studio Pickup",
    badge: "Free of Charge",
    highlight: "Jaclupan, Talisay City",
    description:
      "Pick up your handcrafted fuzzy bouquet directly from our home studio in Jaclupan. Please message ahead so we can prepare your order and provide exact arrival directions.",
  },
  {
    icon: "🤝",
    title: "Talisay Meetups",
    badge: "Talisay Area Only",
    highlight: "Convenient Landmarks",
    description:
      "We offer meetups at designated Talisay City hubs including Talisay City Hall, Gaisano Grand Fiesta Mall, Starmall Azienda, and Tabunok Public Market.",
  },
  {
    icon: "🛵",
    title: "Local Courier Delivery",
    badge: "Shipping by Buyer",
    highlight: "Metro Cebu & Nearby",
    description:
      "Same-day or scheduled delivery via Maxim, Lalamove, or Grab across Talisay, Cebu City, Mandaue, and Lapu-Lapu. Delivery fee is paid directly by the buyer.",
  },
  {
    icon: "🚚",
    title: "Nationwide Shipping",
    badge: "Protective Packaging",
    highlight: "All Over Philippines",
    description:
      "Provincial orders are securely wrapped and packed in durable, crush-resistant boxes shipped via J&T Express or LBC so your flowers arrive in perfect blooming shape.",
  },
];

export const POPULAR_MEETUP_SPOTS = [
  { name: "Talisay City Hall", area: "Poblacion / Lawaan", icon: "🏛️" },
  { name: "Gaisano Grand Fiesta Mall", area: "Tabunok", icon: "🛍️" },
  { name: "Starmall Azienda", area: "Lawaan 1", icon: "🏬" },
  { name: "Tabunok Flyover Area", area: "Central Tabunok", icon: "📍" },
];

export const TIMELINE_STEPS = [
  {
    number: "1",
    icon: "🌸",
    title: "Choose & Order",
    desc: "Select a ready design from our bouquet catalog or send your reference photo and target budget.",
  },
  {
    number: "2",
    icon: "⏳",
    title: "Handcrafted with Care",
    desc: "We hand-hook each stem using soft velvet chenille pipe cleaners (usually 1–3 days crafting time).",
  },
  {
    number: "3",
    icon: "📍",
    title: "Meetup, Pickup, or Delivery",
    desc: "Receive your everlasting fuzzy bouquet via studio pickup, Talisay meetup, or doorstep courier delivery.",
  },
];