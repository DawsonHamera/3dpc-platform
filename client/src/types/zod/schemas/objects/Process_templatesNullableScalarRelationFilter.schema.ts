import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templatesWhereInputObjectSchema as process_templatesWhereInputObjectSchema } from './process_templatesWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => process_templatesWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => process_templatesWhereInputObjectSchema).optional().nullable()
}).strict();
export const Process_templatesNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.Process_templatesNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Process_templatesNullableScalarRelationFilter>;
export const Process_templatesNullableScalarRelationFilterObjectZodSchema = makeSchema();
