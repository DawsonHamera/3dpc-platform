import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { error_reportsWhereInputObjectSchema as error_reportsWhereInputObjectSchema } from './objects/error_reportsWhereInput.schema';

export const error_reportsDeleteManySchema: z.ZodType<Prisma.error_reportsDeleteManyArgs> = z.object({ where: error_reportsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.error_reportsDeleteManyArgs>;

export const error_reportsDeleteManyZodSchema = z.object({ where: error_reportsWhereInputObjectSchema.optional() }).strict();