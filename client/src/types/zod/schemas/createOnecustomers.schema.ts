import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { customersSelectObjectSchema as customersSelectObjectSchema } from './objects/customersSelect.schema';
import { customersCreateInputObjectSchema as customersCreateInputObjectSchema } from './objects/customersCreateInput.schema';
import { customersUncheckedCreateInputObjectSchema as customersUncheckedCreateInputObjectSchema } from './objects/customersUncheckedCreateInput.schema';

export const customersCreateOneSchema: z.ZodType<Prisma.customersCreateArgs> = z.object({ select: customersSelectObjectSchema.optional(),  data: z.union([customersCreateInputObjectSchema, customersUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.customersCreateArgs>;

export const customersCreateOneZodSchema = z.object({ select: customersSelectObjectSchema.optional(),  data: z.union([customersCreateInputObjectSchema, customersUncheckedCreateInputObjectSchema]) }).strict();