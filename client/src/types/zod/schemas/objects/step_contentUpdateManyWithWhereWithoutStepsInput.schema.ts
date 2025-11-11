import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_contentScalarWhereInputObjectSchema as step_contentScalarWhereInputObjectSchema } from './step_contentScalarWhereInput.schema';
import { step_contentUpdateManyMutationInputObjectSchema as step_contentUpdateManyMutationInputObjectSchema } from './step_contentUpdateManyMutationInput.schema';
import { step_contentUncheckedUpdateManyWithoutStepsInputObjectSchema as step_contentUncheckedUpdateManyWithoutStepsInputObjectSchema } from './step_contentUncheckedUpdateManyWithoutStepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => step_contentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => step_contentUpdateManyMutationInputObjectSchema), z.lazy(() => step_contentUncheckedUpdateManyWithoutStepsInputObjectSchema)])
}).strict();
export const step_contentUpdateManyWithWhereWithoutStepsInputObjectSchema: z.ZodType<Prisma.step_contentUpdateManyWithWhereWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.step_contentUpdateManyWithWhereWithoutStepsInput>;
export const step_contentUpdateManyWithWhereWithoutStepsInputObjectZodSchema = makeSchema();
