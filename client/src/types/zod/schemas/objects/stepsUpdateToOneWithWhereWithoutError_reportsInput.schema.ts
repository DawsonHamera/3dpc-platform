import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsWhereInputObjectSchema as stepsWhereInputObjectSchema } from './stepsWhereInput.schema';
import { stepsUpdateWithoutError_reportsInputObjectSchema as stepsUpdateWithoutError_reportsInputObjectSchema } from './stepsUpdateWithoutError_reportsInput.schema';
import { stepsUncheckedUpdateWithoutError_reportsInputObjectSchema as stepsUncheckedUpdateWithoutError_reportsInputObjectSchema } from './stepsUncheckedUpdateWithoutError_reportsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => stepsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => stepsUpdateWithoutError_reportsInputObjectSchema), z.lazy(() => stepsUncheckedUpdateWithoutError_reportsInputObjectSchema)])
}).strict();
export const stepsUpdateToOneWithWhereWithoutError_reportsInputObjectSchema: z.ZodType<Prisma.stepsUpdateToOneWithWhereWithoutError_reportsInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsUpdateToOneWithWhereWithoutError_reportsInput>;
export const stepsUpdateToOneWithWhereWithoutError_reportsInputObjectZodSchema = makeSchema();
