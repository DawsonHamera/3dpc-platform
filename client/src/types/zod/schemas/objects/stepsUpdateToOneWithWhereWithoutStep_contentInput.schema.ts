import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsWhereInputObjectSchema as stepsWhereInputObjectSchema } from './stepsWhereInput.schema';
import { stepsUpdateWithoutStep_contentInputObjectSchema as stepsUpdateWithoutStep_contentInputObjectSchema } from './stepsUpdateWithoutStep_contentInput.schema';
import { stepsUncheckedUpdateWithoutStep_contentInputObjectSchema as stepsUncheckedUpdateWithoutStep_contentInputObjectSchema } from './stepsUncheckedUpdateWithoutStep_contentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => stepsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => stepsUpdateWithoutStep_contentInputObjectSchema), z.lazy(() => stepsUncheckedUpdateWithoutStep_contentInputObjectSchema)])
}).strict();
export const stepsUpdateToOneWithWhereWithoutStep_contentInputObjectSchema: z.ZodType<Prisma.stepsUpdateToOneWithWhereWithoutStep_contentInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsUpdateToOneWithWhereWithoutStep_contentInput>;
export const stepsUpdateToOneWithWhereWithoutStep_contentInputObjectZodSchema = makeSchema();
