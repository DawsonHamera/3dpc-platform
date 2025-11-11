import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsUpdateWithoutProcess_template_stepsInputObjectSchema as stepsUpdateWithoutProcess_template_stepsInputObjectSchema } from './stepsUpdateWithoutProcess_template_stepsInput.schema';
import { stepsUncheckedUpdateWithoutProcess_template_stepsInputObjectSchema as stepsUncheckedUpdateWithoutProcess_template_stepsInputObjectSchema } from './stepsUncheckedUpdateWithoutProcess_template_stepsInput.schema';
import { stepsCreateWithoutProcess_template_stepsInputObjectSchema as stepsCreateWithoutProcess_template_stepsInputObjectSchema } from './stepsCreateWithoutProcess_template_stepsInput.schema';
import { stepsUncheckedCreateWithoutProcess_template_stepsInputObjectSchema as stepsUncheckedCreateWithoutProcess_template_stepsInputObjectSchema } from './stepsUncheckedCreateWithoutProcess_template_stepsInput.schema';
import { stepsWhereInputObjectSchema as stepsWhereInputObjectSchema } from './stepsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => stepsUpdateWithoutProcess_template_stepsInputObjectSchema), z.lazy(() => stepsUncheckedUpdateWithoutProcess_template_stepsInputObjectSchema)]),
  create: z.union([z.lazy(() => stepsCreateWithoutProcess_template_stepsInputObjectSchema), z.lazy(() => stepsUncheckedCreateWithoutProcess_template_stepsInputObjectSchema)]),
  where: z.lazy(() => stepsWhereInputObjectSchema).optional()
}).strict();
export const stepsUpsertWithoutProcess_template_stepsInputObjectSchema: z.ZodType<Prisma.stepsUpsertWithoutProcess_template_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsUpsertWithoutProcess_template_stepsInput>;
export const stepsUpsertWithoutProcess_template_stepsInputObjectZodSchema = makeSchema();
