import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { customersSelectObjectSchema as customersSelectObjectSchema } from './objects/customersSelect.schema';
import { customersWhereUniqueInputObjectSchema as customersWhereUniqueInputObjectSchema } from './objects/customersWhereUniqueInput.schema';

export const customersDeleteOneSchema: z.ZodType<Prisma.customersDeleteArgs> = z.object({ select: customersSelectObjectSchema.optional(),  where: customersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.customersDeleteArgs>;

export const customersDeleteOneZodSchema = z.object({ select: customersSelectObjectSchema.optional(),  where: customersWhereUniqueInputObjectSchema }).strict();