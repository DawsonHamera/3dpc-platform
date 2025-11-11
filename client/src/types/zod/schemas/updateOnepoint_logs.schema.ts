import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { point_logsSelectObjectSchema as point_logsSelectObjectSchema } from './objects/point_logsSelect.schema';
import { point_logsIncludeObjectSchema as point_logsIncludeObjectSchema } from './objects/point_logsInclude.schema';
import { point_logsUpdateInputObjectSchema as point_logsUpdateInputObjectSchema } from './objects/point_logsUpdateInput.schema';
import { point_logsUncheckedUpdateInputObjectSchema as point_logsUncheckedUpdateInputObjectSchema } from './objects/point_logsUncheckedUpdateInput.schema';
import { point_logsWhereUniqueInputObjectSchema as point_logsWhereUniqueInputObjectSchema } from './objects/point_logsWhereUniqueInput.schema';

export const point_logsUpdateOneSchema: z.ZodType<Prisma.point_logsUpdateArgs> = z.object({ select: point_logsSelectObjectSchema.optional(), include: point_logsIncludeObjectSchema.optional(), data: z.union([point_logsUpdateInputObjectSchema, point_logsUncheckedUpdateInputObjectSchema]), where: point_logsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.point_logsUpdateArgs>;

export const point_logsUpdateOneZodSchema = z.object({ select: point_logsSelectObjectSchema.optional(), include: point_logsIncludeObjectSchema.optional(), data: z.union([point_logsUpdateInputObjectSchema, point_logsUncheckedUpdateInputObjectSchema]), where: point_logsWhereUniqueInputObjectSchema }).strict();