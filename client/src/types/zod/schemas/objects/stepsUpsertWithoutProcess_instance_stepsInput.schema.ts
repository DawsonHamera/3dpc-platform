import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsUpdateWithoutProcess_instance_stepsInputObjectSchema as stepsUpdateWithoutProcess_instance_stepsInputObjectSchema } from './stepsUpdateWithoutProcess_instance_stepsInput.schema';
import { stepsUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema as stepsUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema } from './stepsUncheckedUpdateWithoutProcess_instance_stepsInput.schema';
import { stepsCreateWithoutProcess_instance_stepsInputObjectSchema as stepsCreateWithoutProcess_instance_stepsInputObjectSchema } from './stepsCreateWithoutProcess_instance_stepsInput.schema';
import { stepsUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema as stepsUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema } from './stepsUncheckedCreateWithoutProcess_instance_stepsInput.schema';
import { stepsWhereInputObjectSchema as stepsWhereInputObjectSchema } from './stepsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => stepsUpdateWithoutProcess_instance_stepsInputObjectSchema), z.lazy(() => stepsUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema)]),
  create: z.union([z.lazy(() => stepsCreateWithoutProcess_instance_stepsInputObjectSchema), z.lazy(() => stepsUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema)]),
  where: z.lazy(() => stepsWhereInputObjectSchema).optional()
}).strict();
export const stepsUpsertWithoutProcess_instance_stepsInputObjectSchema: z.ZodType<Prisma.stepsUpsertWithoutProcess_instance_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsUpsertWithoutProcess_instance_stepsInput>;
export const stepsUpsertWithoutProcess_instance_stepsInputObjectZodSchema = makeSchema();
