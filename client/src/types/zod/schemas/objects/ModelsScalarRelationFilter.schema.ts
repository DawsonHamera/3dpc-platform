import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { modelsWhereInputObjectSchema as modelsWhereInputObjectSchema } from './modelsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => modelsWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => modelsWhereInputObjectSchema).optional()
}).strict();
export const ModelsScalarRelationFilterObjectSchema: z.ZodType<Prisma.ModelsScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ModelsScalarRelationFilter>;
export const ModelsScalarRelationFilterObjectZodSchema = makeSchema();
