import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsCreateWithoutProcess_template_stepsInputObjectSchema as stepsCreateWithoutProcess_template_stepsInputObjectSchema } from './stepsCreateWithoutProcess_template_stepsInput.schema';
import { stepsUncheckedCreateWithoutProcess_template_stepsInputObjectSchema as stepsUncheckedCreateWithoutProcess_template_stepsInputObjectSchema } from './stepsUncheckedCreateWithoutProcess_template_stepsInput.schema';
import { stepsCreateOrConnectWithoutProcess_template_stepsInputObjectSchema as stepsCreateOrConnectWithoutProcess_template_stepsInputObjectSchema } from './stepsCreateOrConnectWithoutProcess_template_stepsInput.schema';
import { stepsWhereUniqueInputObjectSchema as stepsWhereUniqueInputObjectSchema } from './stepsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => stepsCreateWithoutProcess_template_stepsInputObjectSchema), z.lazy(() => stepsUncheckedCreateWithoutProcess_template_stepsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => stepsCreateOrConnectWithoutProcess_template_stepsInputObjectSchema).optional(),
  connect: z.lazy(() => stepsWhereUniqueInputObjectSchema).optional()
}).strict();
export const stepsCreateNestedOneWithoutProcess_template_stepsInputObjectSchema: z.ZodType<Prisma.stepsCreateNestedOneWithoutProcess_template_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsCreateNestedOneWithoutProcess_template_stepsInput>;
export const stepsCreateNestedOneWithoutProcess_template_stepsInputObjectZodSchema = makeSchema();
