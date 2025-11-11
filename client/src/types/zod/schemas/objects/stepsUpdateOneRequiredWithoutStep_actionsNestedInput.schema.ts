import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsCreateWithoutStep_actionsInputObjectSchema as stepsCreateWithoutStep_actionsInputObjectSchema } from './stepsCreateWithoutStep_actionsInput.schema';
import { stepsUncheckedCreateWithoutStep_actionsInputObjectSchema as stepsUncheckedCreateWithoutStep_actionsInputObjectSchema } from './stepsUncheckedCreateWithoutStep_actionsInput.schema';
import { stepsCreateOrConnectWithoutStep_actionsInputObjectSchema as stepsCreateOrConnectWithoutStep_actionsInputObjectSchema } from './stepsCreateOrConnectWithoutStep_actionsInput.schema';
import { stepsUpsertWithoutStep_actionsInputObjectSchema as stepsUpsertWithoutStep_actionsInputObjectSchema } from './stepsUpsertWithoutStep_actionsInput.schema';
import { stepsWhereUniqueInputObjectSchema as stepsWhereUniqueInputObjectSchema } from './stepsWhereUniqueInput.schema';
import { stepsUpdateToOneWithWhereWithoutStep_actionsInputObjectSchema as stepsUpdateToOneWithWhereWithoutStep_actionsInputObjectSchema } from './stepsUpdateToOneWithWhereWithoutStep_actionsInput.schema';
import { stepsUpdateWithoutStep_actionsInputObjectSchema as stepsUpdateWithoutStep_actionsInputObjectSchema } from './stepsUpdateWithoutStep_actionsInput.schema';
import { stepsUncheckedUpdateWithoutStep_actionsInputObjectSchema as stepsUncheckedUpdateWithoutStep_actionsInputObjectSchema } from './stepsUncheckedUpdateWithoutStep_actionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => stepsCreateWithoutStep_actionsInputObjectSchema), z.lazy(() => stepsUncheckedCreateWithoutStep_actionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => stepsCreateOrConnectWithoutStep_actionsInputObjectSchema).optional(),
  upsert: z.lazy(() => stepsUpsertWithoutStep_actionsInputObjectSchema).optional(),
  connect: z.lazy(() => stepsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => stepsUpdateToOneWithWhereWithoutStep_actionsInputObjectSchema), z.lazy(() => stepsUpdateWithoutStep_actionsInputObjectSchema), z.lazy(() => stepsUncheckedUpdateWithoutStep_actionsInputObjectSchema)]).optional()
}).strict();
export const stepsUpdateOneRequiredWithoutStep_actionsNestedInputObjectSchema: z.ZodType<Prisma.stepsUpdateOneRequiredWithoutStep_actionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsUpdateOneRequiredWithoutStep_actionsNestedInput>;
export const stepsUpdateOneRequiredWithoutStep_actionsNestedInputObjectZodSchema = makeSchema();
