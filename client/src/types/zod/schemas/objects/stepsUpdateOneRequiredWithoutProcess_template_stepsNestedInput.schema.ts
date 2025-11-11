import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsCreateWithoutProcess_template_stepsInputObjectSchema as stepsCreateWithoutProcess_template_stepsInputObjectSchema } from './stepsCreateWithoutProcess_template_stepsInput.schema';
import { stepsUncheckedCreateWithoutProcess_template_stepsInputObjectSchema as stepsUncheckedCreateWithoutProcess_template_stepsInputObjectSchema } from './stepsUncheckedCreateWithoutProcess_template_stepsInput.schema';
import { stepsCreateOrConnectWithoutProcess_template_stepsInputObjectSchema as stepsCreateOrConnectWithoutProcess_template_stepsInputObjectSchema } from './stepsCreateOrConnectWithoutProcess_template_stepsInput.schema';
import { stepsUpsertWithoutProcess_template_stepsInputObjectSchema as stepsUpsertWithoutProcess_template_stepsInputObjectSchema } from './stepsUpsertWithoutProcess_template_stepsInput.schema';
import { stepsWhereUniqueInputObjectSchema as stepsWhereUniqueInputObjectSchema } from './stepsWhereUniqueInput.schema';
import { stepsUpdateToOneWithWhereWithoutProcess_template_stepsInputObjectSchema as stepsUpdateToOneWithWhereWithoutProcess_template_stepsInputObjectSchema } from './stepsUpdateToOneWithWhereWithoutProcess_template_stepsInput.schema';
import { stepsUpdateWithoutProcess_template_stepsInputObjectSchema as stepsUpdateWithoutProcess_template_stepsInputObjectSchema } from './stepsUpdateWithoutProcess_template_stepsInput.schema';
import { stepsUncheckedUpdateWithoutProcess_template_stepsInputObjectSchema as stepsUncheckedUpdateWithoutProcess_template_stepsInputObjectSchema } from './stepsUncheckedUpdateWithoutProcess_template_stepsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => stepsCreateWithoutProcess_template_stepsInputObjectSchema), z.lazy(() => stepsUncheckedCreateWithoutProcess_template_stepsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => stepsCreateOrConnectWithoutProcess_template_stepsInputObjectSchema).optional(),
  upsert: z.lazy(() => stepsUpsertWithoutProcess_template_stepsInputObjectSchema).optional(),
  connect: z.lazy(() => stepsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => stepsUpdateToOneWithWhereWithoutProcess_template_stepsInputObjectSchema), z.lazy(() => stepsUpdateWithoutProcess_template_stepsInputObjectSchema), z.lazy(() => stepsUncheckedUpdateWithoutProcess_template_stepsInputObjectSchema)]).optional()
}).strict();
export const stepsUpdateOneRequiredWithoutProcess_template_stepsNestedInputObjectSchema: z.ZodType<Prisma.stepsUpdateOneRequiredWithoutProcess_template_stepsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsUpdateOneRequiredWithoutProcess_template_stepsNestedInput>;
export const stepsUpdateOneRequiredWithoutProcess_template_stepsNestedInputObjectZodSchema = makeSchema();
