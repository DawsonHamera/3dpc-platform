import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { point_logsWhereInputObjectSchema as point_logsWhereInputObjectSchema } from './objects/point_logsWhereInput.schema';

export const point_logsDeleteManySchema: z.ZodType<Prisma.point_logsDeleteManyArgs> = z.object({ where: point_logsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.point_logsDeleteManyArgs>;

export const point_logsDeleteManyZodSchema = z.object({ where: point_logsWhereInputObjectSchema.optional() }).strict();