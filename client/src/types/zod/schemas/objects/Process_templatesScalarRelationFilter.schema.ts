import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templatesWhereInputObjectSchema as process_templatesWhereInputObjectSchema } from './process_templatesWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => process_templatesWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => process_templatesWhereInputObjectSchema).optional()
}).strict();
export const Process_templatesScalarRelationFilterObjectSchema: z.ZodType<Prisma.Process_templatesScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Process_templatesScalarRelationFilter>;
export const Process_templatesScalarRelationFilterObjectZodSchema = makeSchema();
