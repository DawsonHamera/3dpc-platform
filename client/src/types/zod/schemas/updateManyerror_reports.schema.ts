import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { error_reportsUpdateManyMutationInputObjectSchema as error_reportsUpdateManyMutationInputObjectSchema } from './objects/error_reportsUpdateManyMutationInput.schema';
import { error_reportsWhereInputObjectSchema as error_reportsWhereInputObjectSchema } from './objects/error_reportsWhereInput.schema';

export const error_reportsUpdateManySchema: z.ZodType<Prisma.error_reportsUpdateManyArgs> = z.object({ data: error_reportsUpdateManyMutationInputObjectSchema, where: error_reportsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.error_reportsUpdateManyArgs>;

export const error_reportsUpdateManyZodSchema = z.object({ data: error_reportsUpdateManyMutationInputObjectSchema, where: error_reportsWhereInputObjectSchema.optional() }).strict();