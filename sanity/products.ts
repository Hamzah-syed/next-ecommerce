import { defineType, defineField } from "sanity";


export const product = defineType({
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        defineField({
            name: "productName",
            type: "string",
            title: "Product name",
        }),
        defineField({
            name: "description",
            type: "string",
            title: "Description"
        }),
        defineField({
            name: "price",
            type: "number",
            title: "Price"
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Image",
            options:{
                accept:"image/jpeg, image/png",
                hotspot:true
            }
        })

    ],
})

