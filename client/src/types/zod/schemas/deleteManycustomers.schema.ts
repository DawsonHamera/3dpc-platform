import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { customersWhereInputObjectSchema as customersWhereInputObjectSchema } from './objects/customersWhereInput.schema';

export const customersDeleteManySchema: z.ZodType<Prisma.customersDeleteManyArgs> = z.object({ where: customersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.customersDeleteManyArgs>;

export const customersDeleteManyZodSchema = z.object({ where: customersWhereInputObjectSchema.optional() }).strict();