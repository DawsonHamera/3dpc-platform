import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { point_logSelectObjectSchema as point_logSelectObjectSchema } from './objects/point_logSelect.schema';
import { point_logIncludeObjectSchema as point_logIncludeObjectSchema } from './objects/point_logInclude.schema';
import { point_logWhereUniqueInputObjectSchema as point_logWhereUniqueInputObjectSchema } from './objects/point_logWhereUniqueInput.schema';

export const point_logFindUniqueSchema: z.ZodType<Prisma.point_logFindUniqueArgs> = z.object({ select: point_logSelectObjectSchema.optional(), include: point_logIncludeObjectSchema.optional(), where: point_logWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.point_logFindUniqueArgs>;

export const point_logFindUniqueZodSchema = z.object({ select: point_logSelectObjectSchema.optional(), include: point_logIncludeObjectSchema.optional(), where: point_logWhereUniqueInputObjectSchema }).strict();