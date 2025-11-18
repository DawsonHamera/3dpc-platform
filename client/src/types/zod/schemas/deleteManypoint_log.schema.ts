import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { point_logWhereInputObjectSchema as point_logWhereInputObjectSchema } from './objects/point_logWhereInput.schema';

export const point_logDeleteManySchema: z.ZodType<Prisma.point_logDeleteManyArgs> = z.object({ where: point_logWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.point_logDeleteManyArgs>;

export const point_logDeleteManyZodSchema = z.object({ where: point_logWhereInputObjectSchema.optional() }).strict();