import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { activity_logWhereInputObjectSchema as activity_logWhereInputObjectSchema } from './activity_logWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => activity_logWhereInputObjectSchema).optional(),
  some: z.lazy(() => activity_logWhereInputObjectSchema).optional(),
  none: z.lazy(() => activity_logWhereInputObjectSchema).optional()
}).strict();
export const Activity_logListRelationFilterObjectSchema: z.ZodType<Prisma.Activity_logListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Activity_logListRelationFilter>;
export const Activity_logListRelationFilterObjectZodSchema = makeSchema();
