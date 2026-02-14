import { defineType, defineField } from 'sanity'
import { DocumentsIcon } from '@sanity/icons'

export const listingsPage = defineType({
  name: 'listingsPage',
  title: 'Listings Page',
  type: 'document',
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroText',
      title: 'Hero Text',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Listings Page' }),
  },
})
