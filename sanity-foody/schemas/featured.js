export default {
    name: 'featured',
    title: 'Featured Menu categories',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Featured category name',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'short_description',
            title: 'Short Description',
            type: 'string',
            validation: Rule => Rule.max(200),
        },
        {
            name: 'restaurants',
            type: 'array',
            title: 'Restaurants',
            of: [{type: 'reference', to: {type: 'restaurant'}}],
        }
    ],
}
