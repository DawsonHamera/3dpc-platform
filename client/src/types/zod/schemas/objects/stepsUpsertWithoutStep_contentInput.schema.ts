import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsUpdateWithoutStep_contentInputObjectSchema as stepsUpdateWithoutStep_contentInputObjectSchema } from './stepsUpdateWithoutStep_contentInput.schema';
import { stepsUncheckedUpdateWithoutStep_contentInputObjectSchema as stepsUncheckedUpdateWithoutStep_contentInputObjectSchema } from './stepsUncheckedUpdateWithoutStep_contentInput.schema';
import { stepsCreateWithoutStep_contentInputObjectSchema as stepsCreateWithoutStep_contentInputObjectSchema } from './stepsCreateWithoutStep_contentInput.schema';
import { stepsUncheckedCreateWithoutStep_contentInputObjectSchema as stepsUncheckedCreateWithoutStep_contentInputObjectSchema } from './stepsUncheckedCreateWithoutStep_contentInput.schema';
import { stepsWhereInputObjectSchema as stepsWhereInputObjectSchema } from './stepsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => stepsUpdateWithoutStep_contentInputObjectSchema), z.lazy(() => stepsUncheckedUpdateWithoutStep_contentInputObjectSchema)]),
  create: z.union([z.lazy(() => stepsCreateWithoutStep_contentInputObjectSchema), z.lazy(() => stepsUncheckedCreateWithoutStep_contentInputObjectSchema)]),
  where: z.lazy(() => stepsWhereInputObjectSchema).optional()
}).strict();
export const stepsUpsertWithoutStep_contentInputObjectSchema: z.ZodType<Prisma.stepsUpsertWithoutStep_contentInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsUpsertWithoutStep_contentInput>;
export const stepsUpsertWithoutStep_contentInputObjectZodSchema = makeSchema();
