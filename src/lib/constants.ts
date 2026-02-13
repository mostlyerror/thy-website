export const SITE = {
  name: "Thy Nguyen",
  title: "Thy Nguyen | Houston Realtor",
  description:
    "Houston real estate with a personal touch. Helping you buy, sell, and lease homes across Houston, TX.",
  tagline: "Real Estate That Feels Personal",
  url: "https://thynguyen.com",
  market: "Houston, TX",
} as const;

export const CONTACT = {
  email: "thy@thynguyen.com",
  phone: "(832) 555-0100",
  address: "Houston, TX",
  license: "TX #000000",
} as const;

export const SOCIAL = {
  linkedin: "https://linkedin.com/in/thyyu",
  facebook: "https://facebook.com/Thyzerr",
  instagram: "https://instagram.com/thyzer",
} as const;

export const NAV_LINKS = [
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Locate", href: "/locate" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Listings", href: "/listings" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const STATS = [
  { value: "200+", label: "Homes Sold" },
  { value: "15+", label: "Years Experience" },
  { value: "$50M+", label: "Total Volume" },
  { value: "98%", label: "Client Satisfaction" },
] as const;

export const SERVICES = [
  {
    title: "Buy",
    description:
      "Looking for a home in Houston? I'll help you find the right one and walk you through the entire process.",
    href: "/buy",
  },
  {
    title: "Sell",
    description:
      "Get the most from your home sale with smart pricing, professional staging, and marketing that actually works.",
    href: "/sell",
  },
  {
    title: "Locate",
    description:
      "Whether you're looking to rent or lease, I'll help you find the perfect space in Houston.",
    href: "/locate",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Thy made our first home purchase so easy. Her knowledge of the Houston market is second to none.",
    author: "Sarah & Michael T.",
    role: "First-Time Homebuyers",
  },
  {
    quote:
      "Professional, responsive, and truly cares about her clients. Thy sold our home above asking price in just two weeks.",
    author: "David L.",
    role: "Home Seller",
  },
  {
    quote:
      "Thy helped us relocate to Houston and find the perfect neighborhood for our family. We couldn't have done it without her.",
    author: "Jennifer & Mark P.",
    role: "Relocation Clients",
  },
] as const;

// Unsplash images: Houston skyline, residential real estate, interiors
export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?w=1920&q=80", // Houston skyline
  about: "/images/thy/portrait-bookshelf.jpeg",
  aboutPage: "/images/thy/portrait-window.jpeg",
  working: "/images/thy/working-laptop.jpeg",
  atDesk: "/images/thy/at-desk.jpeg",
  candid: "/images/thy/portrait-candid.jpeg",
  properties: [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80", // modern home exterior
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80", // luxury home
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80", // modern house
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=700&q=80", // house exterior
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=700&q=80", // suburban home
    "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=700&q=80", // house with yard
  ],
} as const;

export const FEATURED_PROPERTIES = [
  {
    id: "1",
    title: "Modern Heights Bungalow",
    address: "1234 Heights Blvd, Houston, TX",
    price: "$625,000",
    beds: 3,
    baths: 2,
    sqft: "2,100",
    image: IMAGES.properties[0],
  },
  {
    id: "2",
    title: "River Oaks Estate",
    address: "5678 River Oaks Dr, Houston, TX",
    price: "$1,250,000",
    beds: 5,
    baths: 4,
    sqft: "4,500",
    image: IMAGES.properties[1],
  },
  {
    id: "3",
    title: "Montrose Mid-Century",
    address: "910 Montrose Blvd, Houston, TX",
    price: "$475,000",
    beds: 2,
    baths: 2,
    sqft: "1,800",
    image: IMAGES.properties[2],
  },
  {
    id: "4",
    title: "Memorial Park Colonial",
    address: "2345 Memorial Dr, Houston, TX",
    price: "$890,000",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    image: IMAGES.properties[3],
  },
  {
    id: "5",
    title: "West University Cottage",
    address: "678 University Blvd, Houston, TX",
    price: "$550,000",
    beds: 3,
    baths: 2,
    sqft: "1,950",
    image: IMAGES.properties[4],
  },
] as const;

export const CONTACT_SERVICES = [
  "Purchase Home",
  "Buying Home",
  "Lease my Home",
  "Looking for Rental",
] as const;

export const RESOURCE_TOPICS = [
  {
    title: "Home Buying 101",
    description:
      "Everything you need to know before buying a home in Houston, whether it's your first time or your fifth.",
    href: "/resources#buying-101",
  },
  {
    title: "Home Selling 101",
    description:
      "How to prep, price, and sell your Houston home so it moves quickly and for the right number.",
    href: "/resources#selling-101",
  },
  {
    title: "Public Schools & Zoning",
    description:
      "A look at Houston's top school districts, ratings, and zoning info to help narrow your search.",
    href: "/resources#schools",
  },
  {
    title: "Utilities Checklist",
    description:
      "A checklist for getting electricity, water, gas, internet, and everything else set up at your new place.",
    href: "/resources#utilities",
  },
] as const;
