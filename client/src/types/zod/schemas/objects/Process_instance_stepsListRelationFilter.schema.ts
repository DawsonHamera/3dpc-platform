import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_stepsWhereInputObjectSchema as process_instance_stepsWhereInputObjectSchema } from './process_instance_stepsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => process_instance_stepsWhereInputObjectSchema).optional(),
  some: z.lazy(() => process_instance_stepsWhereInputObjectSchema).optional(),
  none: z.lazy(() => process_instance_stepsWhereInputObjectSchema).optional()
}).strict();
export const Process_instance_stepsListRelationFilterObjectSchema: z.ZodType<Prisma.Process_instance_stepsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Process_instance_stepsListRelationFilter>;
export const Process_instance_stepsListRelationFilterObjectZodSchema = makeSchema();
