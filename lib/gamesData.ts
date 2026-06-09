export interface GameFeature {
  icon: string; // SVG path string
  title: string;
  desc: string;
}

export interface GameData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  badge: string;
  badgeColor: string;
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  category: string;
  features: GameFeature[];
  includes: string[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const ALL_GAMES: GameData[] = [
  {
    slug: "casino-game-on-rent",
    name: "Casino Game on Rent",
    tagline: "Roll the dice — Bring Vegas to your event!",
    description: "Full casino setup with roulette, poker tables, chips & more for your event.",
    longDescription:
      "Transform your party into a glamorous Las Vegas experience! Our premium casino game package includes professional-grade roulette wheels, poker tables, blackjack setups, and fun money chips. Perfect for corporate parties, kitty parties, wedding receptions, and birthday bashes. Our trained hosts ensure everyone has a blast — no real money involved, just pure fun!",
    badge: "Most Popular",
    badgeColor: "#e8647a",
    gradientFrom: "#1a0a2e",
    gradientTo: "#6b21a8",
    accentColor: "#a855f7",
    category: "Games on Rent",
    features: [
      { icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", title: "Professional Setup", desc: "Casino-grade tables and equipment delivered & set up at your venue" },
      { icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2", title: "Trained Hosts", desc: "Friendly game hosts who explain rules and keep energy high" },
      { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Safe & Legal", desc: "Fun money chips only — zero real money gambling" },
      { icon: "M9 12l2 2 4-4", title: "All Ages Welcome", desc: "Games suitable for adults and teens alike" },
      { icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z", title: "Pan India Delivery", desc: "Available in 100+ cities across India" },
      { icon: "M12 8v4l3 3", title: "2–8 Hour Packages", desc: "Flexible rental durations to match your event schedule" },
    ],
    includes: [
      "1 Roulette wheel with table",
      "2 Poker / Teen Patti tables",
      "1 Blackjack table",
      "500 Fun-money chips per table",
      "1 Trained game host",
      "Setup & takedown service",
      "Prize hampers (optional add-on)",
    ],
    faqs: [
      { q: "Is real money involved?", a: "Absolutely not. We use fun-money chips only. Everything is purely for entertainment." },
      { q: "How much space is required?", a: "A minimum of 400 sq ft is recommended for a full casino setup." },
      { q: "Do you provide staff?", a: "Yes, trained hosts are included in every package to manage the tables and explain rules." },
      { q: "What is the booking advance?", a: "We require 50% advance at the time of booking and remaining on the day of the event." },
    ],
    relatedSlugs: ["hammer-game-on-rent", "electronic-games-on-rent", "wooden-games-on-rent", "bouncy-castle-on-rent"],
  },
  {
    slug: "hammer-game-on-rent",
    name: "Hammer Game on Rent",
    tagline: "Test your strength — Ring the bell!",
    description: "Classic high striker hammer game for all ages — who's the strongest?",
    longDescription:
      "The iconic High Striker is the life of any fair or outdoor event! Guests pick up the hammer and strike the pad to send the puck flying — the harder you hit, the higher it goes. Brilliant for corporate team-building, school fairs, birthday parties, and festive melas. Perfectly safe with padded base and professional attendant.",
    badge: "Fun for All",
    badgeColor: "#f59e0b",
    gradientFrom: "#1c1008",
    gradientTo: "#c8861a",
    accentColor: "#f59e0b",
    category: "Games on Rent",
    features: [
      { icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", title: "Height Adjustable", desc: "Bell height adjustable from 3 ft to 6 ft for all age groups" },
      { icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2", title: "Attendant Included", desc: "A dedicated attendant manages the game and keeps score" },
      { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Safety Padded", desc: "Rubberised base and padded hammer for complete safety" },
      { icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z", title: "Outdoor & Indoor", desc: "Works great in gardens, halls, rooftops & lawns" },
      { icon: "M12 8v4l3 3", title: "Easy Transport", desc: "Compact enough to fit through standard doorways" },
      { icon: "M9 12l2 2 4-4", title: "Prize Boards", desc: "Custom strength ratings board for fun bragging rights" },
    ],
    includes: [
      "1 High Striker (Hammer Game) unit",
      "1 Safety hammer",
      "1 Game attendant",
      "Strength rating board / banner",
      "Setup & takedown",
      "Extension cord & power backup (if needed)",
    ],
    faqs: [
      { q: "Is it safe for children?", a: "Yes! We provide a lighter hammer for kids and adjust the difficulty level accordingly." },
      { q: "Does it need electricity?", a: "The electronic sound/light version needs a standard 5A plug point. Manual version needs none." },
      { q: "What is the minimum rental duration?", a: "Minimum rental is 2 hours. We offer 2, 4, 6, and full-day packages." },
      { q: "Can we rent just the game without an attendant?", a: "We strongly recommend keeping an attendant for safety. Attendant-free rentals are available for verified venues." },
    ],
    relatedSlugs: ["casino-game-on-rent", "bouncy-castle-on-rent", "cricket-machine-on-rent", "mega-wire-on-rent"],
  },
  {
    slug: "bouncy-castle-on-rent",
    name: "Bouncy Castle on Rent",
    tagline: "Jump into joy — Kids' ultimate party favourite!",
    description: "Colorful inflatable bouncy castles — kids' favourite at any party!",
    longDescription:
      "Nothing makes kids happier than a giant bouncy castle! Our premium inflatable castles come in multiple themes — unicorn, superhero, princess, jungle, and more. Made from commercial-grade PVC with safety nets on all sides, each castle is cleaned and sanitised before every event. Includes blower, ground mat, and a safety attendant.",
    badge: "Kids Favourite",
    badgeColor: "#10b981",
    gradientFrom: "#0a2a1a",
    gradientTo: "#10b981",
    accentColor: "#10b981",
    category: "Games on Rent",
    features: [
      { icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", title: "Multiple Themes", desc: "Unicorn, Superhero, Princess, Jungle & more themes available" },
      { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Safety First", desc: "Safety nets on all sides, non-slip floor mat included" },
      { icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2", title: "Safety Attendant", desc: "Dedicated attendant monitors kids at all times" },
      { icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z", title: "Sanitised Before Use", desc: "Cleaned & sanitised before every single event" },
      { icon: "M9 12l2 2 4-4", title: "Quick Setup", desc: "Fully inflated and ready to use in under 15 minutes" },
      { icon: "M12 8v4l3 3", title: "Up to 8 Kids", desc: "Accommodates up to 8 kids simultaneously" },
    ],
    includes: [
      "1 Inflatable bouncy castle (theme of choice)",
      "Electric blower",
      "Ground safety mat",
      "Side safety nets",
      "1 Safety attendant",
      "Setup & takedown",
    ],
    faqs: [
      { q: "What age group is it suitable for?", a: "Ideal for kids aged 2–12 years. We have larger units for teenagers too." },
      { q: "How much space does it need?", a: "Standard castle needs approx 15ft x 15ft flat ground. Indoor & outdoor both work." },
      { q: "Is an electrical connection needed?", a: "Yes, a standard 15A socket is required for the blower." },
      { q: "What if it rains?", a: "Outdoor use is paused during rain for safety. Indoor castles can be used anytime." },
    ],
    relatedSlugs: ["hammer-game-on-rent", "electronic-toy-train-on-rent", "toy-clay-machine-on-rent", "candy-floss-machine-on-rent"],
  },
  {
    slug: "electronic-games-on-rent",
    name: "Electronic Games on Rent",
    tagline: "Arcade thrills at your event!",
    description: "Arcade classics, racing simulators & interactive digital entertainment setups.",
    longDescription:
      "Bring the arcade home! Our electronic games package covers everything from classic arcade cabinets to racing simulators, air hockey tables, and interactive digital walls. Perfect for corporate events, college fests, exhibitions, and premium birthday parties. All machines are maintained in top condition and delivered with a technician.",
    badge: "Trending",
    badgeColor: "#3b82f6",
    gradientFrom: "#0a1628",
    gradientTo: "#3b82f6",
    accentColor: "#3b82f6",
    category: "Games on Rent",
    features: [
      { icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", title: "Wide Game Library", desc: "50+ arcade & digital games across all categories" },
      { icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2", title: "Technician On-Site", desc: "Technical expert present throughout the event" },
      { icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z", title: "Plug & Play", desc: "Ready to use within 30 minutes of arrival" },
      { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "All Ages", desc: "Kid-friendly and adult games both available" },
      { icon: "M9 12l2 2 4-4", title: "Bundle Discounts", desc: "Rent 3+ machines and get up to 20% discount" },
      { icon: "M12 8v4l3 3", title: "Indoor Optimised", desc: "Compact footprint — fits in banquet halls & homes" },
    ],
    includes: [
      "Choice of 3–5 arcade/electronic games",
      "All power cables & adapters",
      "1 On-site technician",
      "Setup & takedown",
      "Unlimited plays during rental period",
    ],
    faqs: [
      { q: "Can I choose which games I want?", a: "Absolutely! Share your preferred games while booking and we'll confirm availability." },
      { q: "How many power points are needed?", a: "Each machine needs one 5A socket. We recommend 1 power strip per 3 machines." },
      { q: "What is the minimum order?", a: "Minimum 2 machines per booking. Single-machine rentals available at a small premium." },
      { q: "Is there a damage deposit?", a: "Yes, a refundable security deposit of ₹2,000–₹5,000 per machine is charged." },
    ],
    relatedSlugs: ["casino-game-on-rent", "electronic-basketball-on-rent", "mega-wire-on-rent", "cricket-machine-on-rent"],
  },
  {
    slug: "electronic-basketball-on-rent",
    name: "Electronic Basketball on Rent",
    tagline: "Shoot hoops — Score big at your party!",
    description: "Electronic scoring basketball hoop — perfect for indoor events.",
    longDescription:
      "The Electronic Basketball machine is an instant crowd-pleaser at any event! Players shoot as many hoops as possible before the timer runs out, with an electronic scoreboard tracking every point. Great for corporate team-building, school events, malls, exhibitions and birthday parties. Adjustable hoop height for all ages.",
    badge: "Sports Fun",
    badgeColor: "#f97316",
    gradientFrom: "#1a0a00",
    gradientTo: "#f97316",
    accentColor: "#f97316",
    category: "Games on Rent",
    features: [
      { icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", title: "Electronic Scoreboard", desc: "Digital score tracking with timer and sound effects" },
      { icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2", title: "2-Player Mode", desc: "Head-to-head competition mode for exciting duels" },
      { icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z", title: "Adjustable Height", desc: "Hoop adjustable from 5ft to 8ft for kids and adults" },
      { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Auto Ball Return", desc: "Automatic ball return system — no manual retrieval" },
      { icon: "M9 12l2 2 4-4", title: "Indoor Use", desc: "Perfect for indoor halls, lobbies, and event spaces" },
      { icon: "M12 8v4l3 3", title: "Leaderboard", desc: "High-score leaderboard for friendly competition" },
    ],
    includes: [
      "1 Electronic basketball machine",
      "6 foam basketballs",
      "Electronic score display",
      "1 Game attendant",
      "Setup & takedown",
    ],
    faqs: [
      { q: "How much space is required?", a: "Approx 8ft x 6ft floor space plus 9ft ceiling clearance." },
      { q: "Can it be used outdoors?", a: "It is primarily designed for indoors, but can be used under a covered outdoor space." },
      { q: "Is it suitable for corporate events?", a: "Absolutely! It's one of our most popular picks for corporate team events and exhibitions." },
      { q: "What is the rental duration?", a: "Available for 2-hour, 4-hour, 8-hour (full day) slots." },
    ],
    relatedSlugs: ["electronic-games-on-rent", "cricket-machine-on-rent", "hammer-game-on-rent", "mega-wire-on-rent"],
  },
  {
    slug: "popcorn-machine-on-rent",
    name: "Popcorn Machine on Rent",
    tagline: "Freshly popped happiness at your event!",
    description: "Freshly popped popcorn machine — the perfect snack station for events.",
    longDescription:
      "Nothing beats the smell of freshly popped popcorn to set the party mood! Our commercial-grade popcorn machines produce large quantities quickly and can be themed with custom buckets to match your event décor. Includes popcorn kernels, oil, salt and flavour sachets. Perfect for birthdays, school events, fairs and corporate gatherings.",
    badge: "Snack Hit",
    badgeColor: "#ca8a04",
    gradientFrom: "#1a1000",
    gradientTo: "#ca8a04",
    accentColor: "#ca8a04",
    category: "Food Machines",
    features: [
      { icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", title: "High Output", desc: "Produces up to 500 servings per hour" },
      { icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2", title: "Multiple Flavours", desc: "Classic salted, caramel, cheese & masala available" },
      { icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z", title: "Custom Buckets", desc: "Branded event-themed popcorn buckets available" },
      { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Hygienic & Safe", desc: "Cleaned and sanitised unit with food-grade materials" },
      { icon: "M9 12l2 2 4-4", title: "Operator Included", desc: "Trained operator runs the machine throughout the event" },
      { icon: "M12 8v4l3 3", title: "Starter Stock", desc: "Kernels and ingredients for 200 servings included" },
    ],
    includes: [
      "1 Commercial popcorn machine",
      "Kernels, oil & salt for 200 servings",
      "2 Flavour sachets of your choice",
      "100 serving bags / cups",
      "1 Machine operator",
      "Setup & takedown",
    ],
    faqs: [
      { q: "How many people can it serve?", a: "Our standard package includes 200 servings. Additional stock can be ordered at extra cost." },
      { q: "Does it need electricity?", a: "Yes, a standard 15A socket is required." },
      { q: "Can we get custom-branded cups?", a: "Yes! Custom-printed cups with your event name/logo can be arranged with 3 days' notice." },
      { q: "Is it suitable for outdoor events?", a: "Yes, as long as there is a power source and the machine is under shade." },
    ],
    relatedSlugs: ["candy-floss-machine-on-rent", "chocolate-fountain-on-rent", "bouncy-castle-on-rent", "casino-game-on-rent"],
  },
];

// Helper to get related games
export function getRelatedGames(slugs: string[]): GameData[] {
  return slugs.map(s => ALL_GAMES.find(g => g.slug === s)).filter(Boolean) as GameData[];
}

export function getGameBySlug(slug: string): GameData | undefined {
  return ALL_GAMES.find(g => g.slug === slug);
}