import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { point_logSelectObjectSchema as point_logSelectObjectSchema } from './objects/point_logSelect.schema';
import { point_logIncludeObjectSchema as point_logIncludeObjectSchema } from './objects/point_logInclude.schema';
import { point_logUpdateInputObjectSchema as point_logUpdateInputObjectSchema } from './objects/point_logUpdateInput.schema';
import { point_logUncheckedUpdateInputObjectSchema as point_logUncheckedUpdateInputObjectSchema } from './objects/point_logUncheckedUpdateInput.schema';
import { point_logWhereUniqueInputObjectSchema as point_logWhereUniqueInputObjectSchema } from './objects/point_logWhereUniqueInput.schema';

export const point_logUpdateOneSchema: z.ZodType<Prisma.point_logUpdateArgs> = z.object({ select: point_logSelectObjectSchema.optional(), include: point_logIncludeObjectSchema.optional(), data: z.union([point_logUpdateInputObjectSchema, point_logUncheckedUpdateInputObjectSchema]), where: point_logWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.point_logUpdateArgs>;

export const point_logUpdateOneZodSchema = z.object({ select: point_logSelectObjectSchema.optional(), include: point_logIncludeObjectSchema.optional(), data: z.union([point_logUpdateInputObjectSchema, point_logUncheckedUpdateInputObjectSchema]), where: point_logWhereUniqueInputObjectSchema }).strict();