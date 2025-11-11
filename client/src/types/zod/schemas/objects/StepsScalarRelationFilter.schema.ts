import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsWhereInputObjectSchema as stepsWhereInputObjectSchema } from './stepsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => stepsWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => stepsWhereInputObjectSchema).optional()
}).strict();
export const StepsScalarRelationFilterObjectSchema: z.ZodType<Prisma.StepsScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.StepsScalarRelationFilter>;
export const StepsScalarRelationFilterObjectZodSchema = makeSchema();
