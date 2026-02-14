import { defineType, defineField, defineArrayMember } from 'sanity'
import { BasketIcon } from '@sanity/icons'

export const buyPage = defineType({
  name: 'buyPage',
  title: 'Buy Page',
  type: 'document',
  icon: BasketIcon,
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
      title: 'Buying Steps',
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
      name: 'offerTitle',
      title: 'Complimentary Offer Title',
      type: 'string',
    }),
    defineField({
      name: 'offerText',
      title: 'Complimentary Offer Text',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'comparisons',
      title: 'Rent vs Buy Comparisons',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', title: 'Label' }),
            defineField({ name: 'rent', type: 'string', title: 'Renting' }),
            defineField({ name: 'buy', type: 'string', title: 'Buying' }),
          ],
        }),
      ],
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
    prepare: () => ({ title: 'Buy Page' }),
  },
})
