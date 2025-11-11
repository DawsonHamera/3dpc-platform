import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ordersSelectObjectSchema as ordersSelectObjectSchema } from './objects/ordersSelect.schema';
import { ordersIncludeObjectSchema as ordersIncludeObjectSchema } from './objects/ordersInclude.schema';
import { ordersCreateInputObjectSchema as ordersCreateInputObjectSchema } from './objects/ordersCreateInput.schema';
import { ordersUncheckedCreateInputObjectSchema as ordersUncheckedCreateInputObjectSchema } from './objects/ordersUncheckedCreateInput.schema';

export const ordersCreateOneSchema: z.ZodType<Prisma.ordersCreateArgs> = z.object({ select: ordersSelectObjectSchema.optional(), include: ordersIncludeObjectSchema.optional(), data: z.union([ordersCreateInputObjectSchema, ordersUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ordersCreateArgs>;

export const ordersCreateOneZodSchema = z.object({ select: ordersSelectObjectSchema.optional(), include: ordersIncludeObjectSchema.optional(), data: z.union([ordersCreateInputObjectSchema, ordersUncheckedCreateInputObjectSchema]) }).strict();