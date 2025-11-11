import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_contentWhereUniqueInputObjectSchema as step_contentWhereUniqueInputObjectSchema } from './step_contentWhereUniqueInput.schema';
import { step_contentCreateWithoutStepsInputObjectSchema as step_contentCreateWithoutStepsInputObjectSchema } from './step_contentCreateWithoutStepsInput.schema';
import { step_contentUncheckedCreateWithoutStepsInputObjectSchema as step_contentUncheckedCreateWithoutStepsInputObjectSchema } from './step_contentUncheckedCreateWithoutStepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => step_contentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => step_contentCreateWithoutStepsInputObjectSchema), z.lazy(() => step_contentUncheckedCreateWithoutStepsInputObjectSchema)])
}).strict();
export const step_contentCreateOrConnectWithoutStepsInputObjectSchema: z.ZodType<Prisma.step_contentCreateOrConnectWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.step_contentCreateOrConnectWithoutStepsInput>;
export const step_contentCreateOrConnectWithoutStepsInputObjectZodSchema = makeSchema();
