import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_contentWhereUniqueInputObjectSchema as step_contentWhereUniqueInputObjectSchema } from './step_contentWhereUniqueInput.schema';
import { step_contentUpdateWithoutStepsInputObjectSchema as step_contentUpdateWithoutStepsInputObjectSchema } from './step_contentUpdateWithoutStepsInput.schema';
import { step_contentUncheckedUpdateWithoutStepsInputObjectSchema as step_contentUncheckedUpdateWithoutStepsInputObjectSchema } from './step_contentUncheckedUpdateWithoutStepsInput.schema';
import { step_contentCreateWithoutStepsInputObjectSchema as step_contentCreateWithoutStepsInputObjectSchema } from './step_contentCreateWithoutStepsInput.schema';
import { step_contentUncheckedCreateWithoutStepsInputObjectSchema as step_contentUncheckedCreateWithoutStepsInputObjectSchema } from './step_contentUncheckedCreateWithoutStepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => step_contentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => step_contentUpdateWithoutStepsInputObjectSchema), z.lazy(() => step_contentUncheckedUpdateWithoutStepsInputObjectSchema)]),
  create: z.union([z.lazy(() => step_contentCreateWithoutStepsInputObjectSchema), z.lazy(() => step_contentUncheckedCreateWithoutStepsInputObjectSchema)])
}).strict();
export const step_contentUpsertWithWhereUniqueWithoutStepsInputObjectSchema: z.ZodType<Prisma.step_contentUpsertWithWhereUniqueWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.step_contentUpsertWithWhereUniqueWithoutStepsInput>;
export const step_contentUpsertWithWhereUniqueWithoutStepsInputObjectZodSchema = makeSchema();
