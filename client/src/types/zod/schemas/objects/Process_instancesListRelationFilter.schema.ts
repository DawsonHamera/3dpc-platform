import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesWhereInputObjectSchema as process_instancesWhereInputObjectSchema } from './process_instancesWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => process_instancesWhereInputObjectSchema).optional(),
  some: z.lazy(() => process_instancesWhereInputObjectSchema).optional(),
  none: z.lazy(() => process_instancesWhereInputObjectSchema).optional()
}).strict();
export const Process_instancesListRelationFilterObjectSchema: z.ZodType<Prisma.Process_instancesListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Process_instancesListRelationFilter>;
export const Process_instancesListRelationFilterObjectZodSchema = makeSchema();
