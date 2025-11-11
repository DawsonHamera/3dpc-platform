import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { point_logsUpdateManyMutationInputObjectSchema as point_logsUpdateManyMutationInputObjectSchema } from './objects/point_logsUpdateManyMutationInput.schema';
import { point_logsWhereInputObjectSchema as point_logsWhereInputObjectSchema } from './objects/point_logsWhereInput.schema';

export const point_logsUpdateManySchema: z.ZodType<Prisma.point_logsUpdateManyArgs> = z.object({ data: point_logsUpdateManyMutationInputObjectSchema, where: point_logsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.point_logsUpdateManyArgs>;

export const point_logsUpdateManyZodSchema = z.object({ data: point_logsUpdateManyMutationInputObjectSchema, where: point_logsWhereInputObjectSchema.optional() }).strict();