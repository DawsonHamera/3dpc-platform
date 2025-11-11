import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsWhereUniqueInputObjectSchema as stepsWhereUniqueInputObjectSchema } from './stepsWhereUniqueInput.schema';
import { stepsCreateWithoutStep_actionsInputObjectSchema as stepsCreateWithoutStep_actionsInputObjectSchema } from './stepsCreateWithoutStep_actionsInput.schema';
import { stepsUncheckedCreateWithoutStep_actionsInputObjectSchema as stepsUncheckedCreateWithoutStep_actionsInputObjectSchema } from './stepsUncheckedCreateWithoutStep_actionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => stepsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => stepsCreateWithoutStep_actionsInputObjectSchema), z.lazy(() => stepsUncheckedCreateWithoutStep_actionsInputObjectSchema)])
}).strict();
export const stepsCreateOrConnectWithoutStep_actionsInputObjectSchema: z.ZodType<Prisma.stepsCreateOrConnectWithoutStep_actionsInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsCreateOrConnectWithoutStep_actionsInput>;
export const stepsCreateOrConnectWithoutStep_actionsInputObjectZodSchema = makeSchema();
