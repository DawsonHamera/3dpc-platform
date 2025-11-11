import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { point_logsWhereInputObjectSchema as point_logsWhereInputObjectSchema } from './point_logsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => point_logsWhereInputObjectSchema).optional(),
  some: z.lazy(() => point_logsWhereInputObjectSchema).optional(),
  none: z.lazy(() => point_logsWhereInputObjectSchema).optional()
}).strict();
export const Point_logsListRelationFilterObjectSchema: z.ZodType<Prisma.Point_logsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Point_logsListRelationFilter>;
export const Point_logsListRelationFilterObjectZodSchema = makeSchema();
