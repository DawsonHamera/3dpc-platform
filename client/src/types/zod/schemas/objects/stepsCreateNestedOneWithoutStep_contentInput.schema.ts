import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsCreateWithoutStep_contentInputObjectSchema as stepsCreateWithoutStep_contentInputObjectSchema } from './stepsCreateWithoutStep_contentInput.schema';
import { stepsUncheckedCreateWithoutStep_contentInputObjectSchema as stepsUncheckedCreateWithoutStep_contentInputObjectSchema } from './stepsUncheckedCreateWithoutStep_contentInput.schema';
import { stepsCreateOrConnectWithoutStep_contentInputObjectSchema as stepsCreateOrConnectWithoutStep_contentInputObjectSchema } from './stepsCreateOrConnectWithoutStep_contentInput.schema';
import { stepsWhereUniqueInputObjectSchema as stepsWhereUniqueInputObjectSchema } from './stepsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => stepsCreateWithoutStep_contentInputObjectSchema), z.lazy(() => stepsUncheckedCreateWithoutStep_contentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => stepsCreateOrConnectWithoutStep_contentInputObjectSchema).optional(),
  connect: z.lazy(() => stepsWhereUniqueInputObjectSchema).optional()
}).strict();
export const stepsCreateNestedOneWithoutStep_contentInputObjectSchema: z.ZodType<Prisma.stepsCreateNestedOneWithoutStep_contentInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsCreateNestedOneWithoutStep_contentInput>;
export const stepsCreateNestedOneWithoutStep_contentInputObjectZodSchema = makeSchema();
