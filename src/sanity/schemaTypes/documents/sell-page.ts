import { defineType, defineField, defineArrayMember } from 'sanity'
import { TagIcon } from '@sanity/icons'

export const sellPage = defineType({
  name: 'sellPage',
  title: 'Sell Page',
  type: 'document',
  icon: TagIcon,
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
      name: 'steps',
      title: 'Selling Steps',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'number', type: 'string', title: 'Step Number' }),
            defineField({ name: 'title', type: 'string', title: 'Title' }),
            defineField({ name: 'description', type: 'text', title: 'Description', rows: 3 }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'cmaOfferText',
      title: 'CMA Offer Text',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'pricingTitle',
      title: 'Pricing Section Title',
      type: 'string',
    }),
    defineField({
      name: 'pricingParagraphs',
      title: 'Pricing Paragraphs',
      type: 'array',
      of: [defineArrayMember({ type: 'text' })],
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
    prepare: () => ({ title: 'Sell Page' }),
  },
})
