import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_triggersWhereInputObjectSchema as step_triggersWhereInputObjectSchema } from './step_triggersWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => step_triggersWhereInputObjectSchema).optional(),
  some: z.lazy(() => step_triggersWhereInputObjectSchema).optional(),
  none: z.lazy(() => step_triggersWhereInputObjectSchema).optional()
}).strict();
export const Step_triggersListRelationFilterObjectSchema: z.ZodType<Prisma.Step_triggersListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Step_triggersListRelationFilter>;
export const Step_triggersListRelationFilterObjectZodSchema = makeSchema();
