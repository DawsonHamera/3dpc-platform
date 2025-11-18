import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { point_logSelectObjectSchema as point_logSelectObjectSchema } from './objects/point_logSelect.schema';
import { point_logIncludeObjectSchema as point_logIncludeObjectSchema } from './objects/point_logInclude.schema';
import { point_logWhereUniqueInputObjectSchema as point_logWhereUniqueInputObjectSchema } from './objects/point_logWhereUniqueInput.schema';
import { point_logCreateInputObjectSchema as point_logCreateInputObjectSchema } from './objects/point_logCreateInput.schema';
import { point_logUncheckedCreateInputObjectSchema as point_logUncheckedCreateInputObjectSchema } from './objects/point_logUncheckedCreateInput.schema';
import { point_logUpdateInputObjectSchema as point_logUpdateInputObjectSchema } from './objects/point_logUpdateInput.schema';
import { point_logUncheckedUpdateInputObjectSchema as point_logUncheckedUpdateInputObjectSchema } from './objects/point_logUncheckedUpdateInput.schema';

export const point_logUpsertOneSchema: z.ZodType<Prisma.point_logUpsertArgs> = z.object({ select: point_logSelectObjectSchema.optional(), include: point_logIncludeObjectSchema.optional(), where: point_logWhereUniqueInputObjectSchema, create: z.union([ point_logCreateInputObjectSchema, point_logUncheckedCreateInputObjectSchema ]), update: z.union([ point_logUpdateInputObjectSchema, point_logUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.point_logUpsertArgs>;

export const point_logUpsertOneZodSchema = z.object({ select: point_logSelectObjectSchema.optional(), include: point_logIncludeObjectSchema.optional(), where: point_logWhereUniqueInputObjectSchema, create: z.union([ point_logCreateInputObjectSchema, point_logUncheckedCreateInputObjectSchema ]), update: z.union([ point_logUpdateInputObjectSchema, point_logUncheckedUpdateInputObjectSchema ]) }).strict();