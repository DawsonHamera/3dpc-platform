import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsWhereInputObjectSchema as stepsWhereInputObjectSchema } from './stepsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => stepsWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => stepsWhereInputObjectSchema).optional().nullable()
}).strict();
export const StepsNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.StepsNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.StepsNullableScalarRelationFilter>;
export const StepsNullableScalarRelationFilterObjectZodSchema = makeSchema();
