import { defineQuery } from 'next-sanity'

// ── Site Settings ──
export const SITE_SETTINGS_QUERY = defineQuery(
  `*[_type == "siteSettings"][0]{
    name,
    tagline,
    description,
    email,
    phone,
    address,
    license,
    linkedin,
    facebook,
    instagram,
    officeHours[]{_key, days, hours},
    contactServices[]
  }`
)

// ── Home Page ──
export const HOME_PAGE_QUERY = defineQuery(
  `*[_type == "homePage"][0]{
    heroImage{asset->{_id, url}},
    introLabel,
    introText,
    stats[]{_key, value, label},
    servicesLabel,
    servicesTitle,
    services[]{_key, title, description, href},
    aboutLabel,
    aboutTitle,
    aboutParagraph1,
    aboutParagraph2,
    aboutImage{asset->{_id, url}},
    newsletterLabel,
    newsletterTitle,
    newsletterDescription,
    ctaTitle,
    ctaText
  }`
)

// ── About Page ──
export const ABOUT_PAGE_QUERY = defineQuery(
  `*[_type == "aboutPage"][0]{
    heroTitle,
    bioTitle,
    bioImage{asset->{_id, url}},
    bioParagraphs[],
    credentials[]{_key, title, description},
    philosophyTitle,
    philosophyParagraphs[],
    ctaTitle,
    ctaText
  }`
)

// ── Buy Page ──
export const BUY_PAGE_QUERY = defineQuery(
  `*[_type == "buyPage"][0]{
    heroTitle,
    heroText,
    steps[]{_key, number, title, description},
    offerTitle,
    offerText,
    comparisons[]{_key, label, rent, buy},
    ctaTitle,
    ctaText
  }`
)

// ── Sell Page ──
export const SELL_PAGE_QUERY = defineQuery(
  `*[_type == "sellPage"][0]{
    heroTitle,
    heroText,
    steps[]{_key, number, title, description},
    cmaOfferText,
    pricingTitle,
    pricingParagraphs[],
    ctaTitle,
    ctaText
  }`
)

// ── Locate Page ──
export const LOCATE_PAGE_QUERY = defineQuery(
  `*[_type == "locatePage"][0]{
    heroTitle,
    heroText,
    services[]{_key, title, description},
    steps[]{_key, number, title, description},
    ctaTitle,
    ctaText
  }`
)

// ── Portfolio Page ──
export const PORTFOLIO_PAGE_QUERY = defineQuery(
  `*[_type == "portfolioPage"][0]{
    heroTitle,
    heroText,
    ctaTitle,
    ctaText
  }`
)

// ── Listings Page ──
export const LISTINGS_PAGE_QUERY = defineQuery(
  `*[_type == "listingsPage"][0]{
    heroTitle,
    heroText,
    ctaTitle,
    ctaText
  }`
)

// ── Resources Page ──
export const RESOURCES_PAGE_QUERY = defineQuery(
  `*[_type == "resourcesPage"][0]{
    heroText,
    buyingTopics[]{_key, title, description},
    sellingTopics[]{_key, title, description},
    schools[]{_key, title, description},
    utilities[]{_key, title, description}
  }`
)

// ── Contact Page ──
export const CONTACT_PAGE_QUERY = defineQuery(
  `*[_type == "contactPage"][0]{
    heroTitle,
    heroText,
    faqs[]{_key, question, answer}
  }`
)

// ── Collections ──
export const TESTIMONIALS_QUERY = defineQuery(
  `*[_type == "testimonial"] | order(order asc){
    _id,
    _key,
    quote,
    author,
    role
  }`
)

export const FEATURED_PROPERTIES_QUERY = defineQuery(
  `*[_type == "property" && featured == true] | order(order asc){
    _id,
    title,
    address,
    price,
    beds,
    baths,
    sqft,
    image{asset->{_id, url}},
    status
  }`
)

export const PORTFOLIO_PROPERTIES_QUERY = defineQuery(
  `*[_type == "property" && status in ["Sold", "Bought", "Leased"]] | order(order asc){
    _id,
    title,
    address,
    price,
    beds,
    baths,
    sqft,
    image{asset->{_id, url}},
    status
  }`
)

export const ACTIVE_LISTINGS_QUERY = defineQuery(
  `*[_type == "property" && status == "Active"] | order(order asc){
    _id,
    title,
    address,
    price,
    beds,
    baths,
    sqft,
    image{asset->{_id, url}},
    status
  }`
)
