import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsWhereUniqueInputObjectSchema as error_reportsWhereUniqueInputObjectSchema } from './error_reportsWhereUniqueInput.schema';
import { error_reportsUpdateWithoutStepsInputObjectSchema as error_reportsUpdateWithoutStepsInputObjectSchema } from './error_reportsUpdateWithoutStepsInput.schema';
import { error_reportsUncheckedUpdateWithoutStepsInputObjectSchema as error_reportsUncheckedUpdateWithoutStepsInputObjectSchema } from './error_reportsUncheckedUpdateWithoutStepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => error_reportsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => error_reportsUpdateWithoutStepsInputObjectSchema), z.lazy(() => error_reportsUncheckedUpdateWithoutStepsInputObjectSchema)])
}).strict();
export const error_reportsUpdateWithWhereUniqueWithoutStepsInputObjectSchema: z.ZodType<Prisma.error_reportsUpdateWithWhereUniqueWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsUpdateWithWhereUniqueWithoutStepsInput>;
export const error_reportsUpdateWithWhereUniqueWithoutStepsInputObjectZodSchema = makeSchema();
