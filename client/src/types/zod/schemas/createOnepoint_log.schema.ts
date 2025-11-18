import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { point_logSelectObjectSchema as point_logSelectObjectSchema } from './objects/point_logSelect.schema';
import { point_logIncludeObjectSchema as point_logIncludeObjectSchema } from './objects/point_logInclude.schema';
import { point_logCreateInputObjectSchema as point_logCreateInputObjectSchema } from './objects/point_logCreateInput.schema';
import { point_logUncheckedCreateInputObjectSchema as point_logUncheckedCreateInputObjectSchema } from './objects/point_logUncheckedCreateInput.schema';

export const point_logCreateOneSchema: z.ZodType<Prisma.point_logCreateArgs> = z.object({ select: point_logSelectObjectSchema.optional(), include: point_logIncludeObjectSchema.optional(), data: z.union([point_logCreateInputObjectSchema, point_logUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.point_logCreateArgs>;

export const point_logCreateOneZodSchema = z.object({ select: point_logSelectObjectSchema.optional(), include: point_logIncludeObjectSchema.optional(), data: z.union([point_logCreateInputObjectSchema, point_logUncheckedCreateInputObjectSchema]) }).strict();