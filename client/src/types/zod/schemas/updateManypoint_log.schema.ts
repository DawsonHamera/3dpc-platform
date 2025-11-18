import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { point_logUpdateManyMutationInputObjectSchema as point_logUpdateManyMutationInputObjectSchema } from './objects/point_logUpdateManyMutationInput.schema';
import { point_logWhereInputObjectSchema as point_logWhereInputObjectSchema } from './objects/point_logWhereInput.schema';

export const point_logUpdateManySchema: z.ZodType<Prisma.point_logUpdateManyArgs> = z.object({ data: point_logUpdateManyMutationInputObjectSchema, where: point_logWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.point_logUpdateManyArgs>;

export const point_logUpdateManyZodSchema = z.object({ data: point_logUpdateManyMutationInputObjectSchema, where: point_logWhereInputObjectSchema.optional() }).strict();