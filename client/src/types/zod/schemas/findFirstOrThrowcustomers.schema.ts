import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { customersOrderByWithRelationInputObjectSchema as customersOrderByWithRelationInputObjectSchema } from './objects/customersOrderByWithRelationInput.schema';
import { customersWhereInputObjectSchema as customersWhereInputObjectSchema } from './objects/customersWhereInput.schema';
import { customersWhereUniqueInputObjectSchema as customersWhereUniqueInputObjectSchema } from './objects/customersWhereUniqueInput.schema';
import { CustomersScalarFieldEnumSchema } from './enums/CustomersScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const customersFindFirstOrThrowSelectSchema: z.ZodType<Prisma.customersSelect> = z.object({
    id: z.boolean().optional(),
    first_name: z.boolean().optional(),
    last_name: z.boolean().optional(),
    email_address: z.boolean().optional(),
    ip_address: z.boolean().optional(),
    session_id: z.boolean().optional(),
    first_seen: z.boolean().optional(),
    last_seen: z.boolean().optional(),
    preferred_shipping_address: z.boolean().optional(),
    preferred_shipping_method: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.customersSelect>;

export const customersFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    first_name: z.boolean().optional(),
    last_name: z.boolean().optional(),
    email_address: z.boolean().optional(),
    ip_address: z.boolean().optional(),
    session_id: z.boolean().optional(),
    first_seen: z.boolean().optional(),
    last_seen: z.boolean().optional(),
    preferred_shipping_address: z.boolean().optional(),
    preferred_shipping_method: z.boolean().optional()
  }).strict();

export const customersFindFirstOrThrowSchema: z.ZodType<Prisma.customersFindFirstOrThrowArgs> = z.object({ select: customersFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([customersOrderByWithRelationInputObjectSchema, customersOrderByWithRelationInputObjectSchema.array()]).optional(), where: customersWhereInputObjectSchema.optional(), cursor: customersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CustomersScalarFieldEnumSchema, CustomersScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.customersFindFirstOrThrowArgs>;

export const customersFindFirstOrThrowZodSchema = z.object({ select: customersFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([customersOrderByWithRelationInputObjectSchema, customersOrderByWithRelationInputObjectSchema.array()]).optional(), where: customersWhereInputObjectSchema.optional(), cursor: customersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CustomersScalarFieldEnumSchema, CustomersScalarFieldEnumSchema.array()]).optional() }).strict();