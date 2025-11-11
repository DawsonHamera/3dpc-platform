import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { customersSelectObjectSchema as customersSelectObjectSchema } from './objects/customersSelect.schema';
import { customersWhereUniqueInputObjectSchema as customersWhereUniqueInputObjectSchema } from './objects/customersWhereUniqueInput.schema';
import { customersCreateInputObjectSchema as customersCreateInputObjectSchema } from './objects/customersCreateInput.schema';
import { customersUncheckedCreateInputObjectSchema as customersUncheckedCreateInputObjectSchema } from './objects/customersUncheckedCreateInput.schema';
import { customersUpdateInputObjectSchema as customersUpdateInputObjectSchema } from './objects/customersUpdateInput.schema';
import { customersUncheckedUpdateInputObjectSchema as customersUncheckedUpdateInputObjectSchema } from './objects/customersUncheckedUpdateInput.schema';

export const customersUpsertOneSchema: z.ZodType<Prisma.customersUpsertArgs> = z.object({ select: customersSelectObjectSchema.optional(),  where: customersWhereUniqueInputObjectSchema, create: z.union([ customersCreateInputObjectSchema, customersUncheckedCreateInputObjectSchema ]), update: z.union([ customersUpdateInputObjectSchema, customersUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.customersUpsertArgs>;

export const customersUpsertOneZodSchema = z.object({ select: customersSelectObjectSchema.optional(),  where: customersWhereUniqueInputObjectSchema, create: z.union([ customersCreateInputObjectSchema, customersUncheckedCreateInputObjectSchema ]), update: z.union([ customersUpdateInputObjectSchema, customersUncheckedUpdateInputObjectSchema ]) }).strict();