import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { point_logWhereInputObjectSchema as point_logWhereInputObjectSchema } from './point_logWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => point_logWhereInputObjectSchema).optional(),
  some: z.lazy(() => point_logWhereInputObjectSchema).optional(),
  none: z.lazy(() => point_logWhereInputObjectSchema).optional()
}).strict();
export const Point_logListRelationFilterObjectSchema: z.ZodType<Prisma.Point_logListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Point_logListRelationFilter>;
export const Point_logListRelationFilterObjectZodSchema = makeSchema();
