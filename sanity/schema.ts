import { type SchemaTypeDefinition } from 'sanity'
import { product } from "./products"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
