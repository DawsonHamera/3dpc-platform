import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsWhereInputObjectSchema as stepsWhereInputObjectSchema } from './stepsWhereInput.schema';
import { stepsUpdateWithoutStep_actionsInputObjectSchema as stepsUpdateWithoutStep_actionsInputObjectSchema } from './stepsUpdateWithoutStep_actionsInput.schema';
import { stepsUncheckedUpdateWithoutStep_actionsInputObjectSchema as stepsUncheckedUpdateWithoutStep_actionsInputObjectSchema } from './stepsUncheckedUpdateWithoutStep_actionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => stepsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => stepsUpdateWithoutStep_actionsInputObjectSchema), z.lazy(() => stepsUncheckedUpdateWithoutStep_actionsInputObjectSchema)])
}).strict();
export const stepsUpdateToOneWithWhereWithoutStep_actionsInputObjectSchema: z.ZodType<Prisma.stepsUpdateToOneWithWhereWithoutStep_actionsInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsUpdateToOneWithWhereWithoutStep_actionsInput>;
export const stepsUpdateToOneWithWhereWithoutStep_actionsInputObjectZodSchema = makeSchema();
