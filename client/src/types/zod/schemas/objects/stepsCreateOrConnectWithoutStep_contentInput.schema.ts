import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsWhereUniqueInputObjectSchema as stepsWhereUniqueInputObjectSchema } from './stepsWhereUniqueInput.schema';
import { stepsCreateWithoutStep_contentInputObjectSchema as stepsCreateWithoutStep_contentInputObjectSchema } from './stepsCreateWithoutStep_contentInput.schema';
import { stepsUncheckedCreateWithoutStep_contentInputObjectSchema as stepsUncheckedCreateWithoutStep_contentInputObjectSchema } from './stepsUncheckedCreateWithoutStep_contentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => stepsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => stepsCreateWithoutStep_contentInputObjectSchema), z.lazy(() => stepsUncheckedCreateWithoutStep_contentInputObjectSchema)])
}).strict();
export const stepsCreateOrConnectWithoutStep_contentInputObjectSchema: z.ZodType<Prisma.stepsCreateOrConnectWithoutStep_contentInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsCreateOrConnectWithoutStep_contentInput>;
export const stepsCreateOrConnectWithoutStep_contentInputObjectZodSchema = makeSchema();
