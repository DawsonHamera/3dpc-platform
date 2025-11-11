import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsWhereUniqueInputObjectSchema as stepsWhereUniqueInputObjectSchema } from './stepsWhereUniqueInput.schema';
import { stepsCreateWithoutProcess_instance_stepsInputObjectSchema as stepsCreateWithoutProcess_instance_stepsInputObjectSchema } from './stepsCreateWithoutProcess_instance_stepsInput.schema';
import { stepsUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema as stepsUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema } from './stepsUncheckedCreateWithoutProcess_instance_stepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => stepsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => stepsCreateWithoutProcess_instance_stepsInputObjectSchema), z.lazy(() => stepsUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema)])
}).strict();
export const stepsCreateOrConnectWithoutProcess_instance_stepsInputObjectSchema: z.ZodType<Prisma.stepsCreateOrConnectWithoutProcess_instance_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsCreateOrConnectWithoutProcess_instance_stepsInput>;
export const stepsCreateOrConnectWithoutProcess_instance_stepsInputObjectZodSchema = makeSchema();
