import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { point_logsSelectObjectSchema as point_logsSelectObjectSchema } from './objects/point_logsSelect.schema';
import { point_logsIncludeObjectSchema as point_logsIncludeObjectSchema } from './objects/point_logsInclude.schema';
import { point_logsCreateInputObjectSchema as point_logsCreateInputObjectSchema } from './objects/point_logsCreateInput.schema';
import { point_logsUncheckedCreateInputObjectSchema as point_logsUncheckedCreateInputObjectSchema } from './objects/point_logsUncheckedCreateInput.schema';

export const point_logsCreateOneSchema: z.ZodType<Prisma.point_logsCreateArgs> = z.object({ select: point_logsSelectObjectSchema.optional(), include: point_logsIncludeObjectSchema.optional(), data: z.union([point_logsCreateInputObjectSchema, point_logsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.point_logsCreateArgs>;

export const point_logsCreateOneZodSchema = z.object({ select: point_logsSelectObjectSchema.optional(), include: point_logsIncludeObjectSchema.optional(), data: z.union([point_logsCreateInputObjectSchema, point_logsUncheckedCreateInputObjectSchema]) }).strict();