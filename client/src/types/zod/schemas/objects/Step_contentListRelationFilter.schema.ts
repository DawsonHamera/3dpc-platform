import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_contentWhereInputObjectSchema as step_contentWhereInputObjectSchema } from './step_contentWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => step_contentWhereInputObjectSchema).optional(),
  some: z.lazy(() => step_contentWhereInputObjectSchema).optional(),
  none: z.lazy(() => step_contentWhereInputObjectSchema).optional()
}).strict();
export const Step_contentListRelationFilterObjectSchema: z.ZodType<Prisma.Step_contentListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Step_contentListRelationFilter>;
export const Step_contentListRelationFilterObjectZodSchema = makeSchema();
