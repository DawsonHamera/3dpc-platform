import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsWhereUniqueInputObjectSchema as stepsWhereUniqueInputObjectSchema } from './stepsWhereUniqueInput.schema';
import { stepsCreateWithoutProcess_template_stepsInputObjectSchema as stepsCreateWithoutProcess_template_stepsInputObjectSchema } from './stepsCreateWithoutProcess_template_stepsInput.schema';
import { stepsUncheckedCreateWithoutProcess_template_stepsInputObjectSchema as stepsUncheckedCreateWithoutProcess_template_stepsInputObjectSchema } from './stepsUncheckedCreateWithoutProcess_template_stepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => stepsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => stepsCreateWithoutProcess_template_stepsInputObjectSchema), z.lazy(() => stepsUncheckedCreateWithoutProcess_template_stepsInputObjectSchema)])
}).strict();
export const stepsCreateOrConnectWithoutProcess_template_stepsInputObjectSchema: z.ZodType<Prisma.stepsCreateOrConnectWithoutProcess_template_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsCreateOrConnectWithoutProcess_template_stepsInput>;
export const stepsCreateOrConnectWithoutProcess_template_stepsInputObjectZodSchema = makeSchema();
