import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_actionsWhereInputObjectSchema as step_actionsWhereInputObjectSchema } from './step_actionsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => step_actionsWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => step_actionsWhereInputObjectSchema).optional()
}).strict();
export const Step_actionsScalarRelationFilterObjectSchema: z.ZodType<Prisma.Step_actionsScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Step_actionsScalarRelationFilter>;
export const Step_actionsScalarRelationFilterObjectZodSchema = makeSchema();
