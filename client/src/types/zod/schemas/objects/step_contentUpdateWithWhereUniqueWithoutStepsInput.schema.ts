import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_contentWhereUniqueInputObjectSchema as step_contentWhereUniqueInputObjectSchema } from './step_contentWhereUniqueInput.schema';
import { step_contentUpdateWithoutStepsInputObjectSchema as step_contentUpdateWithoutStepsInputObjectSchema } from './step_contentUpdateWithoutStepsInput.schema';
import { step_contentUncheckedUpdateWithoutStepsInputObjectSchema as step_contentUncheckedUpdateWithoutStepsInputObjectSchema } from './step_contentUncheckedUpdateWithoutStepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => step_contentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => step_contentUpdateWithoutStepsInputObjectSchema), z.lazy(() => step_contentUncheckedUpdateWithoutStepsInputObjectSchema)])
}).strict();
export const step_contentUpdateWithWhereUniqueWithoutStepsInputObjectSchema: z.ZodType<Prisma.step_contentUpdateWithWhereUniqueWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.step_contentUpdateWithWhereUniqueWithoutStepsInput>;
export const step_contentUpdateWithWhereUniqueWithoutStepsInputObjectZodSchema = makeSchema();
