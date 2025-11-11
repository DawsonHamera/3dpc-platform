import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { activity_logsWhereInputObjectSchema as activity_logsWhereInputObjectSchema } from './activity_logsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => activity_logsWhereInputObjectSchema).optional(),
  some: z.lazy(() => activity_logsWhereInputObjectSchema).optional(),
  none: z.lazy(() => activity_logsWhereInputObjectSchema).optional()
}).strict();
export const Activity_logsListRelationFilterObjectSchema: z.ZodType<Prisma.Activity_logsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Activity_logsListRelationFilter>;
export const Activity_logsListRelationFilterObjectZodSchema = makeSchema();
