import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logsWhereInputObjectSchema as process_logsWhereInputObjectSchema } from './process_logsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => process_logsWhereInputObjectSchema).optional(),
  some: z.lazy(() => process_logsWhereInputObjectSchema).optional(),
  none: z.lazy(() => process_logsWhereInputObjectSchema).optional()
}).strict();
export const Process_logsListRelationFilterObjectSchema: z.ZodType<Prisma.Process_logsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Process_logsListRelationFilter>;
export const Process_logsListRelationFilterObjectZodSchema = makeSchema();
