import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsWhereInputObjectSchema as stepsWhereInputObjectSchema } from './stepsWhereInput.schema';
import { stepsUpdateWithoutProcess_template_stepsInputObjectSchema as stepsUpdateWithoutProcess_template_stepsInputObjectSchema } from './stepsUpdateWithoutProcess_template_stepsInput.schema';
import { stepsUncheckedUpdateWithoutProcess_template_stepsInputObjectSchema as stepsUncheckedUpdateWithoutProcess_template_stepsInputObjectSchema } from './stepsUncheckedUpdateWithoutProcess_template_stepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => stepsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => stepsUpdateWithoutProcess_template_stepsInputObjectSchema), z.lazy(() => stepsUncheckedUpdateWithoutProcess_template_stepsInputObjectSchema)])
}).strict();
export const stepsUpdateToOneWithWhereWithoutProcess_template_stepsInputObjectSchema: z.ZodType<Prisma.stepsUpdateToOneWithWhereWithoutProcess_template_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsUpdateToOneWithWhereWithoutProcess_template_stepsInput>;
export const stepsUpdateToOneWithWhereWithoutProcess_template_stepsInputObjectZodSchema = makeSchema();
