import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsCreateWithoutProcess_instance_stepsInputObjectSchema as stepsCreateWithoutProcess_instance_stepsInputObjectSchema } from './stepsCreateWithoutProcess_instance_stepsInput.schema';
import { stepsUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema as stepsUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema } from './stepsUncheckedCreateWithoutProcess_instance_stepsInput.schema';
import { stepsCreateOrConnectWithoutProcess_instance_stepsInputObjectSchema as stepsCreateOrConnectWithoutProcess_instance_stepsInputObjectSchema } from './stepsCreateOrConnectWithoutProcess_instance_stepsInput.schema';
import { stepsWhereUniqueInputObjectSchema as stepsWhereUniqueInputObjectSchema } from './stepsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => stepsCreateWithoutProcess_instance_stepsInputObjectSchema), z.lazy(() => stepsUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => stepsCreateOrConnectWithoutProcess_instance_stepsInputObjectSchema).optional(),
  connect: z.lazy(() => stepsWhereUniqueInputObjectSchema).optional()
}).strict();
export const stepsCreateNestedOneWithoutProcess_instance_stepsInputObjectSchema: z.ZodType<Prisma.stepsCreateNestedOneWithoutProcess_instance_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsCreateNestedOneWithoutProcess_instance_stepsInput>;
export const stepsCreateNestedOneWithoutProcess_instance_stepsInputObjectZodSchema = makeSchema();
