import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { point_logsSelectObjectSchema as point_logsSelectObjectSchema } from './objects/point_logsSelect.schema';
import { point_logsIncludeObjectSchema as point_logsIncludeObjectSchema } from './objects/point_logsInclude.schema';
import { point_logsWhereUniqueInputObjectSchema as point_logsWhereUniqueInputObjectSchema } from './objects/point_logsWhereUniqueInput.schema';

export const point_logsFindUniqueOrThrowSchema: z.ZodType<Prisma.point_logsFindUniqueOrThrowArgs> = z.object({ select: point_logsSelectObjectSchema.optional(), include: point_logsIncludeObjectSchema.optional(), where: point_logsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.point_logsFindUniqueOrThrowArgs>;

export const point_logsFindUniqueOrThrowZodSchema = z.object({ select: point_logsSelectObjectSchema.optional(), include: point_logsIncludeObjectSchema.optional(), where: point_logsWhereUniqueInputObjectSchema }).strict();