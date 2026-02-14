import type { StructureResolver } from 'sanity/structure'
import {
  CogIcon,
  HomeIcon,
  UserIcon,
  BasketIcon,
  TagIcon,
  PinIcon,
  ImageIcon,
  DocumentsIcon,
  BookIcon,
  EnvelopeIcon,
  CommentIcon,
} from '@sanity/icons'

const SINGLETONS = [
  'siteSettings',
  'homePage',
  'aboutPage',
  'buyPage',
  'sellPage',
  'locatePage',
  'portfolioPage',
  'listingsPage',
  'resourcesPage',
  'contactPage',
]

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Site Settings
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),

      S.divider(),

      // Pages group
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home')
                .icon(HomeIcon)
                .child(S.document().schemaType('homePage').documentId('homePage')),
              S.listItem()
                .title('About')
                .icon(UserIcon)
                .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
              S.listItem()
                .title('Buy')
                .icon(BasketIcon)
                .child(S.document().schemaType('buyPage').documentId('buyPage')),
              S.listItem()
                .title('Sell')
                .icon(TagIcon)
                .child(S.document().schemaType('sellPage').documentId('sellPage')),
              S.listItem()
                .title('Locate')
                .icon(PinIcon)
                .child(S.document().schemaType('locatePage').documentId('locatePage')),
              S.listItem()
                .title('Portfolio')
                .icon(ImageIcon)
                .child(S.document().schemaType('portfolioPage').documentId('portfolioPage')),
              S.listItem()
                .title('Listings')
                .icon(DocumentsIcon)
                .child(S.document().schemaType('listingsPage').documentId('listingsPage')),
              S.listItem()
                .title('Resources')
                .icon(BookIcon)
                .child(S.document().schemaType('resourcesPage').documentId('resourcesPage')),
              S.listItem()
                .title('Contact')
                .icon(EnvelopeIcon)
                .child(S.document().schemaType('contactPage').documentId('contactPage')),
            ]),
        ),

      S.divider(),

      // Content collections
      S.listItem()
        .title('Content')
        .child(
          S.list()
            .title('Content')
            .items([
              S.documentTypeListItem('property').title('Properties').icon(HomeIcon),
              S.documentTypeListItem('testimonial').title('Testimonials').icon(CommentIcon),
            ]),
        ),

      // Filter out singletons from remaining items
      ...S.documentTypeListItems().filter(
        (listItem) => !SINGLETONS.includes(listItem.getId() as string) &&
          !['property', 'testimonial'].includes(listItem.getId() as string),
      ),
    ])
