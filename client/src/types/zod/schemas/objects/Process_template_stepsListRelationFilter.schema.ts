import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_template_stepsWhereInputObjectSchema as process_template_stepsWhereInputObjectSchema } from './process_template_stepsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => process_template_stepsWhereInputObjectSchema).optional(),
  some: z.lazy(() => process_template_stepsWhereInputObjectSchema).optional(),
  none: z.lazy(() => process_template_stepsWhereInputObjectSchema).optional()
}).strict();
export const Process_template_stepsListRelationFilterObjectSchema: z.ZodType<Prisma.Process_template_stepsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Process_template_stepsListRelationFilter>;
export const Process_template_stepsListRelationFilterObjectZodSchema = makeSchema();
