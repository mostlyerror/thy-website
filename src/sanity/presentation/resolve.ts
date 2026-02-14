import { defineLocations, type PresentationPluginOptions } from 'sanity/presentation'

export const resolve: PresentationPluginOptions['resolve'] = {
  locations: {
    siteSettings: defineLocations({
      select: { title: 'name' },
      resolve: () => ({
        locations: [{ title: 'All Pages', href: '/' }],
      }),
    }),
    homePage: defineLocations({
      select: { title: 'introLabel' },
      resolve: () => ({
        locations: [{ title: 'Home', href: '/' }],
      }),
    }),
    aboutPage: defineLocations({
      select: { title: 'heroTitle' },
      resolve: () => ({
        locations: [{ title: 'About', href: '/about' }],
      }),
    }),
    buyPage: defineLocations({
      select: { title: 'heroTitle' },
      resolve: () => ({
        locations: [{ title: 'Buy', href: '/buy' }],
      }),
    }),
    sellPage: defineLocations({
      select: { title: 'heroTitle' },
      resolve: () => ({
        locations: [{ title: 'Sell', href: '/sell' }],
      }),
    }),
    locatePage: defineLocations({
      select: { title: 'heroTitle' },
      resolve: () => ({
        locations: [{ title: 'Locate', href: '/locate' }],
      }),
    }),
    portfolioPage: defineLocations({
      select: { title: 'heroTitle' },
      resolve: () => ({
        locations: [{ title: 'Portfolio', href: '/portfolio' }],
      }),
    }),
    listingsPage: defineLocations({
      select: { title: 'heroTitle' },
      resolve: () => ({
        locations: [{ title: 'Listings', href: '/listings' }],
      }),
    }),
    resourcesPage: defineLocations({
      select: { title: 'heroText' },
      resolve: () => ({
        locations: [{ title: 'Resources', href: '/resources' }],
      }),
    }),
    contactPage: defineLocations({
      select: { title: 'heroTitle' },
      resolve: () => ({
        locations: [{ title: 'Contact', href: '/contact' }],
      }),
    }),
    testimonial: defineLocations({
      select: { title: 'author' },
      resolve: (doc) => ({
        locations: [
          { title: doc?.title || 'Testimonial', href: '/' },
        ],
      }),
    }),
    property: defineLocations({
      select: { title: 'title', status: 'status' },
      resolve: (doc) => ({
        locations: [
          { title: doc?.title || 'Property', href: '/portfolio' },
          { title: 'Listings', href: '/listings' },
        ],
      }),
    }),
  },
}
