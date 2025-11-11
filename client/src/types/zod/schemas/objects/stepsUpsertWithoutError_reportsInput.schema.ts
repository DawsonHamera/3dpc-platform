import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsUpdateWithoutError_reportsInputObjectSchema as stepsUpdateWithoutError_reportsInputObjectSchema } from './stepsUpdateWithoutError_reportsInput.schema';
import { stepsUncheckedUpdateWithoutError_reportsInputObjectSchema as stepsUncheckedUpdateWithoutError_reportsInputObjectSchema } from './stepsUncheckedUpdateWithoutError_reportsInput.schema';
import { stepsCreateWithoutError_reportsInputObjectSchema as stepsCreateWithoutError_reportsInputObjectSchema } from './stepsCreateWithoutError_reportsInput.schema';
import { stepsUncheckedCreateWithoutError_reportsInputObjectSchema as stepsUncheckedCreateWithoutError_reportsInputObjectSchema } from './stepsUncheckedCreateWithoutError_reportsInput.schema';
import { stepsWhereInputObjectSchema as stepsWhereInputObjectSchema } from './stepsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => stepsUpdateWithoutError_reportsInputObjectSchema), z.lazy(() => stepsUncheckedUpdateWithoutError_reportsInputObjectSchema)]),
  create: z.union([z.lazy(() => stepsCreateWithoutError_reportsInputObjectSchema), z.lazy(() => stepsUncheckedCreateWithoutError_reportsInputObjectSchema)]),
  where: z.lazy(() => stepsWhereInputObjectSchema).optional()
}).strict();
export const stepsUpsertWithoutError_reportsInputObjectSchema: z.ZodType<Prisma.stepsUpsertWithoutError_reportsInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsUpsertWithoutError_reportsInput>;
export const stepsUpsertWithoutError_reportsInputObjectZodSchema = makeSchema();
