import { defineType, defineField, defineArrayMember } from 'sanity'
import { BookIcon } from '@sanity/icons'

export const resourcesPage = defineType({
  name: 'resourcesPage',
  title: 'Resources Page',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'heroText',
      title: 'Hero Text',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'buyingTopics',
      title: 'Buying 101 Topics',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Title' }),
            defineField({ name: 'description', type: 'text', title: 'Description', rows: 6 }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'sellingTopics',
      title: 'Selling 101 Topics',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Title' }),
            defineField({ name: 'description', type: 'text', title: 'Description', rows: 6 }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'schools',
      title: 'School Districts',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'District Name' }),
            defineField({ name: 'description', type: 'text', title: 'Description', rows: 6 }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'utilities',
      title: 'Utilities',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Utility Name' }),
            defineField({ name: 'description', type: 'text', title: 'Description', rows: 4 }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Resources Page' }),
  },
})
