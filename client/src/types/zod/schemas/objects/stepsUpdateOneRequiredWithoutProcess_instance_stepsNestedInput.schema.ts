import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsCreateWithoutProcess_instance_stepsInputObjectSchema as stepsCreateWithoutProcess_instance_stepsInputObjectSchema } from './stepsCreateWithoutProcess_instance_stepsInput.schema';
import { stepsUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema as stepsUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema } from './stepsUncheckedCreateWithoutProcess_instance_stepsInput.schema';
import { stepsCreateOrConnectWithoutProcess_instance_stepsInputObjectSchema as stepsCreateOrConnectWithoutProcess_instance_stepsInputObjectSchema } from './stepsCreateOrConnectWithoutProcess_instance_stepsInput.schema';
import { stepsUpsertWithoutProcess_instance_stepsInputObjectSchema as stepsUpsertWithoutProcess_instance_stepsInputObjectSchema } from './stepsUpsertWithoutProcess_instance_stepsInput.schema';
import { stepsWhereUniqueInputObjectSchema as stepsWhereUniqueInputObjectSchema } from './stepsWhereUniqueInput.schema';
import { stepsUpdateToOneWithWhereWithoutProcess_instance_stepsInputObjectSchema as stepsUpdateToOneWithWhereWithoutProcess_instance_stepsInputObjectSchema } from './stepsUpdateToOneWithWhereWithoutProcess_instance_stepsInput.schema';
import { stepsUpdateWithoutProcess_instance_stepsInputObjectSchema as stepsUpdateWithoutProcess_instance_stepsInputObjectSchema } from './stepsUpdateWithoutProcess_instance_stepsInput.schema';
import { stepsUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema as stepsUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema } from './stepsUncheckedUpdateWithoutProcess_instance_stepsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => stepsCreateWithoutProcess_instance_stepsInputObjectSchema), z.lazy(() => stepsUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => stepsCreateOrConnectWithoutProcess_instance_stepsInputObjectSchema).optional(),
  upsert: z.lazy(() => stepsUpsertWithoutProcess_instance_stepsInputObjectSchema).optional(),
  connect: z.lazy(() => stepsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => stepsUpdateToOneWithWhereWithoutProcess_instance_stepsInputObjectSchema), z.lazy(() => stepsUpdateWithoutProcess_instance_stepsInputObjectSchema), z.lazy(() => stepsUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema)]).optional()
}).strict();
export const stepsUpdateOneRequiredWithoutProcess_instance_stepsNestedInputObjectSchema: z.ZodType<Prisma.stepsUpdateOneRequiredWithoutProcess_instance_stepsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsUpdateOneRequiredWithoutProcess_instance_stepsNestedInput>;
export const stepsUpdateOneRequiredWithoutProcess_instance_stepsNestedInputObjectZodSchema = makeSchema();
