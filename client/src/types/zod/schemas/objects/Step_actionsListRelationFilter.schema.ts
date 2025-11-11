import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_actionsWhereInputObjectSchema as step_actionsWhereInputObjectSchema } from './step_actionsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => step_actionsWhereInputObjectSchema).optional(),
  some: z.lazy(() => step_actionsWhereInputObjectSchema).optional(),
  none: z.lazy(() => step_actionsWhereInputObjectSchema).optional()
}).strict();
export const Step_actionsListRelationFilterObjectSchema: z.ZodType<Prisma.Step_actionsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Step_actionsListRelationFilter>;
export const Step_actionsListRelationFilterObjectZodSchema = makeSchema();
