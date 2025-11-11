import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ordersSelectObjectSchema as ordersSelectObjectSchema } from './objects/ordersSelect.schema';
import { ordersIncludeObjectSchema as ordersIncludeObjectSchema } from './objects/ordersInclude.schema';
import { ordersUpdateInputObjectSchema as ordersUpdateInputObjectSchema } from './objects/ordersUpdateInput.schema';
import { ordersUncheckedUpdateInputObjectSchema as ordersUncheckedUpdateInputObjectSchema } from './objects/ordersUncheckedUpdateInput.schema';
import { ordersWhereUniqueInputObjectSchema as ordersWhereUniqueInputObjectSchema } from './objects/ordersWhereUniqueInput.schema';

export const ordersUpdateOneSchema: z.ZodType<Prisma.ordersUpdateArgs> = z.object({ select: ordersSelectObjectSchema.optional(), include: ordersIncludeObjectSchema.optional(), data: z.union([ordersUpdateInputObjectSchema, ordersUncheckedUpdateInputObjectSchema]), where: ordersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ordersUpdateArgs>;

export const ordersUpdateOneZodSchema = z.object({ select: ordersSelectObjectSchema.optional(), include: ordersIncludeObjectSchema.optional(), data: z.union([ordersUpdateInputObjectSchema, ordersUncheckedUpdateInputObjectSchema]), where: ordersWhereUniqueInputObjectSchema }).strict();