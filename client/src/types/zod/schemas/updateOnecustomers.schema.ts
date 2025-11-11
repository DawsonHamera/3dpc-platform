import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { customersSelectObjectSchema as customersSelectObjectSchema } from './objects/customersSelect.schema';
import { customersUpdateInputObjectSchema as customersUpdateInputObjectSchema } from './objects/customersUpdateInput.schema';
import { customersUncheckedUpdateInputObjectSchema as customersUncheckedUpdateInputObjectSchema } from './objects/customersUncheckedUpdateInput.schema';
import { customersWhereUniqueInputObjectSchema as customersWhereUniqueInputObjectSchema } from './objects/customersWhereUniqueInput.schema';

export const customersUpdateOneSchema: z.ZodType<Prisma.customersUpdateArgs> = z.object({ select: customersSelectObjectSchema.optional(),  data: z.union([customersUpdateInputObjectSchema, customersUncheckedUpdateInputObjectSchema]), where: customersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.customersUpdateArgs>;

export const customersUpdateOneZodSchema = z.object({ select: customersSelectObjectSchema.optional(),  data: z.union([customersUpdateInputObjectSchema, customersUncheckedUpdateInputObjectSchema]), where: customersWhereUniqueInputObjectSchema }).strict();