import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsCreateWithoutStep_actionsInputObjectSchema as stepsCreateWithoutStep_actionsInputObjectSchema } from './stepsCreateWithoutStep_actionsInput.schema';
import { stepsUncheckedCreateWithoutStep_actionsInputObjectSchema as stepsUncheckedCreateWithoutStep_actionsInputObjectSchema } from './stepsUncheckedCreateWithoutStep_actionsInput.schema';
import { stepsCreateOrConnectWithoutStep_actionsInputObjectSchema as stepsCreateOrConnectWithoutStep_actionsInputObjectSchema } from './stepsCreateOrConnectWithoutStep_actionsInput.schema';
import { stepsWhereUniqueInputObjectSchema as stepsWhereUniqueInputObjectSchema } from './stepsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => stepsCreateWithoutStep_actionsInputObjectSchema), z.lazy(() => stepsUncheckedCreateWithoutStep_actionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => stepsCreateOrConnectWithoutStep_actionsInputObjectSchema).optional(),
  connect: z.lazy(() => stepsWhereUniqueInputObjectSchema).optional()
}).strict();
export const stepsCreateNestedOneWithoutStep_actionsInputObjectSchema: z.ZodType<Prisma.stepsCreateNestedOneWithoutStep_actionsInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsCreateNestedOneWithoutStep_actionsInput>;
export const stepsCreateNestedOneWithoutStep_actionsInputObjectZodSchema = makeSchema();
