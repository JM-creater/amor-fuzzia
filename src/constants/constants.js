import pinkRoseImg from "../screens/bouquet-screen/assets/pink-rose-bouquet.png";

export const HOME_PAGE = "/";
export const AMOR_FUZZIA = "AMor Fuzzia";

export const BOUQUET_PRODUCTS = [
  {
    id: 1,
    name: "Classic Pink Rose Bouquet",
    subtitle: "Single Stem Fuzzy Rose Bloom",
    price: "₱150",
    image: pinkRoseImg,
    isLatest: true,
    tag: "Bestseller",
    description:
      "A timeless single-stem pink rose handcrafted with velvety plush chenille stems and soft milk cotton yarn. Each petal is individually shaped and arranged by hand to create an everlasting bloom that never wilts. Perfect for thoughtful surprises, anniversaries, graduations, or a sweet desk companion.",
    materials: [
      { name: "Premium Plush Chenille Stems", note: "Soft velvet feel, vibrant blush pink & rose tones" },
      { name: "High-Grade Milk Cotton Yarn", note: "Hand-wrapped detailing on base and leaves" },
      { name: "Flexible Floral Wire Core", note: "Bendable stem structure for custom posing" },
      { name: "Waterproof Korean Matte Wrapping Paper", note: "Frosted aesthetic wrapper in blush & cream" },
      { name: "Double-Faced Satin Ribbon Bow", note: "Elegant matching ribbon accent" },
    ],
    details: {
      dimensions: "approx. 32 cm (H) × 14 cm (W)",
      craftTime: "1.5 – 2 Hours of handcrafting",
      bloomType: "Single Rose with Double Leaf Sprig",
      lifespan: "Everlasting (No water or sunlight needed)",
    },
    careTips: [
      "Keep away from direct moisture, water, and open flames.",
      "Gently shape the petals with fingers if compressed during transport.",
      "Lightly dust with a soft brush or cool hairdryer.",
    ],
    customization: "Custom wrapper colors and complimentary handwritten note cards available upon order.",
  },
  {
    id: 2,
    name: "Blush Blossom Bouquet",
    subtitle: "Pastel Pink & Cream Accents",
    price: "₱150",
    image: pinkRoseImg,
    isLatest: true,
    tag: "New Arrival",
    description:
      "Delicate pastel tones crafted for romance and elegance. Made from extra-dense fuzzy pipe cleaners with textured leaf wraps, wrapped in artisan frosted paper with a delicate satin finish.",
    materials: [
      { name: "Plush Velvet Chenille Stems", note: "Blush pink, soft cream & matcha green" },
      { name: "Fine Milk Cotton Yarn", note: "Hand-knit stem wrap" },
      { name: "Reinforced Floral Wire", note: "Durable internal structure" },
      { name: "Korean Aesthetic Cellophane & Kraft Wrap", note: "Two-tone layered design" },
      { name: "Satin Ribbon & Tag", note: "Handcrafted AMor Fuzzia seal" },
    ],
    details: {
      dimensions: "approx. 32 cm (H) × 14 cm (W)",
      craftTime: "1.5 – 2 Hours of handcrafting",
      bloomType: "Rose Bloom with Duo Leaves",
      lifespan: "Everlasting (No water needed)",
    },
    careTips: [
      "Keep indoors away from humidity and high heat.",
      "Dust gently using a dry soft brush when needed.",
    ],
    customization: "Ribbon color and greeting message can be customized.",
  },
  {
    id: 3,
    name: "Sweetheart Rose Bouquet",
    subtitle: "Hand-hooked Velvet Rose",
    price: "₱150",
    image: pinkRoseImg,
    isLatest: false,
    tag: "Popular",
    description:
      "Handcrafted with extra love and precision, featuring layered rose petals that give a full, plush appearance. Ideal for Valentine's, Mother's Day, or showing gratitude to someone dear.",
    materials: [
      { name: "Ultra-Soft Chenille Stems", note: "Vibrant and fade-resistant dyes" },
      { name: "Organic Cotton Yarn", note: "Seamless stem binding" },
      { name: "Galvanized Floral Wire", note: "Anti-rust and flexible" },
      { name: "Pearl Gloss Wrapper", note: "Premium textured wrapping" },
      { name: "Chiffon Ribbon", note: "Airy, romantic bow finish" },
    ],
    details: {
      dimensions: "approx. 30 cm (H) × 13 cm (W)",
      craftTime: "1.5 Hours of handcrafting",
      bloomType: "Full Bloom Single Rose",
      lifespan: "Everlasting keepsake",
    },
    careTips: [
      "Avoid submerging in liquids.",
      "Store in a cool, dry place out of intense direct sunlight.",
    ],
    customization: "Available with complimentary custom gift tag.",
  },
  {
    id: 4,
    name: "Petite Fuzzy Rose Bouquet",
    subtitle: "Handmade Single Bloom",
    price: "₱150",
    image: pinkRoseImg,
    isLatest: false,
    tag: "Classic",
    description:
      "A charming single flower designed to brighten any corner of a room. Made entirely by hand with soft-to-the-touch fuzzy stems that keep their shape for years to come.",
    materials: [
      { name: "Premium Chenille Pipe Cleaners", note: "Fluffy and dense texture" },
      { name: "Green Floral Binding Yarn", note: "Smooth leaf attachment" },
      { name: "Bendable Craft Wire", note: "Sturdy floral core" },
      { name: "Eco Kraft & Frosted Paper", note: "Minimalist aesthetic wrapping" },
      { name: "Cotton Twine & Satin Ribbon", note: "Rustic-modern bow" },
    ],
    details: {
      dimensions: "approx. 30 cm (H) × 12 cm (W)",
      craftTime: "1.5 Hours of handcrafting",
      bloomType: "Single Stem Rose",
      lifespan: "Everlasting",
    },
    careTips: [
      "Keep dry and dust occasionally.",
    ],
    customization: "Special dedication cards included upon request.",
  },
  {
    id: 5,
    name: "Enchanted Rose Bouquet",
    subtitle: "Artisan Fuzzy Flora",
    price: "₱150",
    image: pinkRoseImg,
    isLatest: false,
    tag: "Artisan Choice",
    description:
      "A captivating floral design crafted with intricate petal layering for a realistic yet whimsical look. Designed as a cherished keepsake for special celebrations.",
    materials: [
      { name: "High-Density Chenille Wire Stems", note: "Rich velvety feel" },
      { name: "Milk Cotton Yarn", note: "Delicate leaf veins and stem" },
      { name: "Floral Support Wire", note: "Firm upright posture" },
      { name: "Korean Translucent Wrapping", note: "Water-resistant frosted look" },
      { name: "Satin Accent Ribbon", note: "Coordinated pastel pink" },
    ],
    details: {
      dimensions: "approx. 33 cm (H) × 15 cm (W)",
      craftTime: "2 Hours of handcrafting",
      bloomType: "Sculpted Rose & Double Leaves",
      lifespan: "Everlasting keepsake",
    },
    careTips: [
      "Handle gently by the stem or base.",
      "Keep away from direct heat sources.",
    ],
    customization: "Ribbon & wrapping customization available.",
  },
  {
    id: 6,
    name: "Fuzzy Blossom Deluxe",
    subtitle: "Signature Pink Floral Design",
    price: "₱150",
    image: pinkRoseImg,
    isLatest: false,
    tag: "Signature",
    description:
      "Our signature handmade fuzzy rose bouquet, perfected through countless hours of craft. Makes a warm, memorable gift that expresses love and thoughtfulness.",
    materials: [
      { name: "Soft Chenille Pipe Cleaners", note: "100% skin-safe & durable" },
      { name: "Milk Cotton Threading", note: "Hand-bound stem finish" },
      { name: "Flexible Floral Core", note: "Adjustable arrangement" },
      { name: "Embossed Bouquet Wrapper", note: "Deluxe frosted paper" },
      { name: "Signature Satin Ribbon", note: "Premium finish" },
    ],
    details: {
      dimensions: "approx. 32 cm (H) × 14 cm (W)",
      craftTime: "1.5 – 2 Hours of handcrafting",
      bloomType: "Signature Rose Bloom",
      lifespan: "Permanent / Everlasting",
    },
    careTips: [
      "No watering or maintenance needed.",
      "Light dusting preserves freshness.",
    ],
    customization: "Personalized greeting message included for free.",
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