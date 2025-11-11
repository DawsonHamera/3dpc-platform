import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsWhereInputObjectSchema as stepsWhereInputObjectSchema } from './stepsWhereInput.schema';
import { stepsUpdateWithoutProcess_instance_stepsInputObjectSchema as stepsUpdateWithoutProcess_instance_stepsInputObjectSchema } from './stepsUpdateWithoutProcess_instance_stepsInput.schema';
import { stepsUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema as stepsUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema } from './stepsUncheckedUpdateWithoutProcess_instance_stepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => stepsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => stepsUpdateWithoutProcess_instance_stepsInputObjectSchema), z.lazy(() => stepsUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema)])
}).strict();
export const stepsUpdateToOneWithWhereWithoutProcess_instance_stepsInputObjectSchema: z.ZodType<Prisma.stepsUpdateToOneWithWhereWithoutProcess_instance_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsUpdateToOneWithWhereWithoutProcess_instance_stepsInput>;
export const stepsUpdateToOneWithWhereWithoutProcess_instance_stepsInputObjectZodSchema = makeSchema();
