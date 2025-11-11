import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsCreateWithoutStep_contentInputObjectSchema as stepsCreateWithoutStep_contentInputObjectSchema } from './stepsCreateWithoutStep_contentInput.schema';
import { stepsUncheckedCreateWithoutStep_contentInputObjectSchema as stepsUncheckedCreateWithoutStep_contentInputObjectSchema } from './stepsUncheckedCreateWithoutStep_contentInput.schema';
import { stepsCreateOrConnectWithoutStep_contentInputObjectSchema as stepsCreateOrConnectWithoutStep_contentInputObjectSchema } from './stepsCreateOrConnectWithoutStep_contentInput.schema';
import { stepsUpsertWithoutStep_contentInputObjectSchema as stepsUpsertWithoutStep_contentInputObjectSchema } from './stepsUpsertWithoutStep_contentInput.schema';
import { stepsWhereUniqueInputObjectSchema as stepsWhereUniqueInputObjectSchema } from './stepsWhereUniqueInput.schema';
import { stepsUpdateToOneWithWhereWithoutStep_contentInputObjectSchema as stepsUpdateToOneWithWhereWithoutStep_contentInputObjectSchema } from './stepsUpdateToOneWithWhereWithoutStep_contentInput.schema';
import { stepsUpdateWithoutStep_contentInputObjectSchema as stepsUpdateWithoutStep_contentInputObjectSchema } from './stepsUpdateWithoutStep_contentInput.schema';
import { stepsUncheckedUpdateWithoutStep_contentInputObjectSchema as stepsUncheckedUpdateWithoutStep_contentInputObjectSchema } from './stepsUncheckedUpdateWithoutStep_contentInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => stepsCreateWithoutStep_contentInputObjectSchema), z.lazy(() => stepsUncheckedCreateWithoutStep_contentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => stepsCreateOrConnectWithoutStep_contentInputObjectSchema).optional(),
  upsert: z.lazy(() => stepsUpsertWithoutStep_contentInputObjectSchema).optional(),
  connect: z.lazy(() => stepsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => stepsUpdateToOneWithWhereWithoutStep_contentInputObjectSchema), z.lazy(() => stepsUpdateWithoutStep_contentInputObjectSchema), z.lazy(() => stepsUncheckedUpdateWithoutStep_contentInputObjectSchema)]).optional()
}).strict();
export const stepsUpdateOneRequiredWithoutStep_contentNestedInputObjectSchema: z.ZodType<Prisma.stepsUpdateOneRequiredWithoutStep_contentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsUpdateOneRequiredWithoutStep_contentNestedInput>;
export const stepsUpdateOneRequiredWithoutStep_contentNestedInputObjectZodSchema = makeSchema();
