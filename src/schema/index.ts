import { z } from 'zod';

export const OrderSchema = z.object({
  name: z.string()
    .min(1, { message: 'Name is required' }),
  total: z.number()
    .min(1, { message: 'There are errors in the order' }),
  order: z.array(z.object({
    id: z.number(),
    name: z.string(),
    price: z.number(),
    quantity: z.number(),
    subtotal: z.number() 
    }))
});

export const OrderIdSchema = z.object({
  orderId: z.string()
    .transform((value) => parseInt(value))
    .refine(value => value > 0, { message: 'There is an error with the order ID' })
});

export const SearchSchema = z.object({
  search: z.string()
    .trim()
    .min(1, { message: 'The search cannot be empty' })
});

export const ProductSchema = z.object({
    name: z.string()
        .trim()
        .min(1, { message: 'The product name cannot be empty' }),
    price: z.string()
        .trim()
        .transform((value) => parseFloat(value)) 
        .refine((value) => value > 0, { message: 'The price is not valid' })
        .or(z.number().min(1, {message: 'The category is required' })),
    categoryId: z.string()
        .trim()
        .transform((value) => parseInt(value)) 
        .refine((value) => value > 0, { message: 'The category is required' })
        .or(z.number().min(1, {message: 'The category is required' })),
    image: z.string()
        .min(1, { message: 'The image is required' })
});