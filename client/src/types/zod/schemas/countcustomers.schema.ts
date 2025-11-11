import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { customersOrderByWithRelationInputObjectSchema as customersOrderByWithRelationInputObjectSchema } from './objects/customersOrderByWithRelationInput.schema';
import { customersWhereInputObjectSchema as customersWhereInputObjectSchema } from './objects/customersWhereInput.schema';
import { customersWhereUniqueInputObjectSchema as customersWhereUniqueInputObjectSchema } from './objects/customersWhereUniqueInput.schema';
import { CustomersCountAggregateInputObjectSchema as CustomersCountAggregateInputObjectSchema } from './objects/CustomersCountAggregateInput.schema';

export const customersCountSchema: z.ZodType<Prisma.customersCountArgs> = z.object({ orderBy: z.union([customersOrderByWithRelationInputObjectSchema, customersOrderByWithRelationInputObjectSchema.array()]).optional(), where: customersWhereInputObjectSchema.optional(), cursor: customersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CustomersCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.customersCountArgs>;

export const customersCountZodSchema = z.object({ orderBy: z.union([customersOrderByWithRelationInputObjectSchema, customersOrderByWithRelationInputObjectSchema.array()]).optional(), where: customersWhereInputObjectSchema.optional(), cursor: customersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CustomersCountAggregateInputObjectSchema ]).optional() }).strict();