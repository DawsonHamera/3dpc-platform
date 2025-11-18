import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { recycling_logWhereInputObjectSchema as recycling_logWhereInputObjectSchema } from './recycling_logWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => recycling_logWhereInputObjectSchema).optional(),
  some: z.lazy(() => recycling_logWhereInputObjectSchema).optional(),
  none: z.lazy(() => recycling_logWhereInputObjectSchema).optional()
}).strict();
export const Recycling_logListRelationFilterObjectSchema: z.ZodType<Prisma.Recycling_logListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Recycling_logListRelationFilter>;
export const Recycling_logListRelationFilterObjectZodSchema = makeSchema();
