import { siteSettings } from './documents/site-settings'
import { homePage } from './documents/home-page'
import { aboutPage } from './documents/about-page'
import { buyPage } from './documents/buy-page'
import { sellPage } from './documents/sell-page'
import { locatePage } from './documents/locate-page'
import { portfolioPage } from './documents/portfolio-page'
import { listingsPage } from './documents/listings-page'
import { resourcesPage } from './documents/resources-page'
import { contactPage } from './documents/contact-page'
import { testimonial } from './documents/testimonial'
import { property } from './documents/property'

export const schemaTypes = [
  // Singletons
  siteSettings,
  homePage,
  aboutPage,
  buyPage,
  sellPage,
  locatePage,
  portfolioPage,
  listingsPage,
  resourcesPage,
  contactPage,
  // Collections
  testimonial,
  property,
]
