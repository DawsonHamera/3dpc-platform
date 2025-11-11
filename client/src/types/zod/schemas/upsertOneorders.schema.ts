import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ordersSelectObjectSchema as ordersSelectObjectSchema } from './objects/ordersSelect.schema';
import { ordersIncludeObjectSchema as ordersIncludeObjectSchema } from './objects/ordersInclude.schema';
import { ordersWhereUniqueInputObjectSchema as ordersWhereUniqueInputObjectSchema } from './objects/ordersWhereUniqueInput.schema';
import { ordersCreateInputObjectSchema as ordersCreateInputObjectSchema } from './objects/ordersCreateInput.schema';
import { ordersUncheckedCreateInputObjectSchema as ordersUncheckedCreateInputObjectSchema } from './objects/ordersUncheckedCreateInput.schema';
import { ordersUpdateInputObjectSchema as ordersUpdateInputObjectSchema } from './objects/ordersUpdateInput.schema';
import { ordersUncheckedUpdateInputObjectSchema as ordersUncheckedUpdateInputObjectSchema } from './objects/ordersUncheckedUpdateInput.schema';

export const ordersUpsertOneSchema: z.ZodType<Prisma.ordersUpsertArgs> = z.object({ select: ordersSelectObjectSchema.optional(), include: ordersIncludeObjectSchema.optional(), where: ordersWhereUniqueInputObjectSchema, create: z.union([ ordersCreateInputObjectSchema, ordersUncheckedCreateInputObjectSchema ]), update: z.union([ ordersUpdateInputObjectSchema, ordersUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ordersUpsertArgs>;

export const ordersUpsertOneZodSchema = z.object({ select: ordersSelectObjectSchema.optional(), include: ordersIncludeObjectSchema.optional(), where: ordersWhereUniqueInputObjectSchema, create: z.union([ ordersCreateInputObjectSchema, ordersUncheckedCreateInputObjectSchema ]), update: z.union([ ordersUpdateInputObjectSchema, ordersUncheckedUpdateInputObjectSchema ]) }).strict();