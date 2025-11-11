import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { point_logsSelectObjectSchema as point_logsSelectObjectSchema } from './objects/point_logsSelect.schema';
import { point_logsIncludeObjectSchema as point_logsIncludeObjectSchema } from './objects/point_logsInclude.schema';
import { point_logsWhereUniqueInputObjectSchema as point_logsWhereUniqueInputObjectSchema } from './objects/point_logsWhereUniqueInput.schema';
import { point_logsCreateInputObjectSchema as point_logsCreateInputObjectSchema } from './objects/point_logsCreateInput.schema';
import { point_logsUncheckedCreateInputObjectSchema as point_logsUncheckedCreateInputObjectSchema } from './objects/point_logsUncheckedCreateInput.schema';
import { point_logsUpdateInputObjectSchema as point_logsUpdateInputObjectSchema } from './objects/point_logsUpdateInput.schema';
import { point_logsUncheckedUpdateInputObjectSchema as point_logsUncheckedUpdateInputObjectSchema } from './objects/point_logsUncheckedUpdateInput.schema';

export const point_logsUpsertOneSchema: z.ZodType<Prisma.point_logsUpsertArgs> = z.object({ select: point_logsSelectObjectSchema.optional(), include: point_logsIncludeObjectSchema.optional(), where: point_logsWhereUniqueInputObjectSchema, create: z.union([ point_logsCreateInputObjectSchema, point_logsUncheckedCreateInputObjectSchema ]), update: z.union([ point_logsUpdateInputObjectSchema, point_logsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.point_logsUpsertArgs>;

export const point_logsUpsertOneZodSchema = z.object({ select: point_logsSelectObjectSchema.optional(), include: point_logsIncludeObjectSchema.optional(), where: point_logsWhereUniqueInputObjectSchema, create: z.union([ point_logsCreateInputObjectSchema, point_logsUncheckedCreateInputObjectSchema ]), update: z.union([ point_logsUpdateInputObjectSchema, point_logsUncheckedUpdateInputObjectSchema ]) }).strict();