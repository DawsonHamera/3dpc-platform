import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsWhereUniqueInputObjectSchema as error_reportsWhereUniqueInputObjectSchema } from './error_reportsWhereUniqueInput.schema';
import { error_reportsUpdateWithoutStepsInputObjectSchema as error_reportsUpdateWithoutStepsInputObjectSchema } from './error_reportsUpdateWithoutStepsInput.schema';
import { error_reportsUncheckedUpdateWithoutStepsInputObjectSchema as error_reportsUncheckedUpdateWithoutStepsInputObjectSchema } from './error_reportsUncheckedUpdateWithoutStepsInput.schema';
import { error_reportsCreateWithoutStepsInputObjectSchema as error_reportsCreateWithoutStepsInputObjectSchema } from './error_reportsCreateWithoutStepsInput.schema';
import { error_reportsUncheckedCreateWithoutStepsInputObjectSchema as error_reportsUncheckedCreateWithoutStepsInputObjectSchema } from './error_reportsUncheckedCreateWithoutStepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => error_reportsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => error_reportsUpdateWithoutStepsInputObjectSchema), z.lazy(() => error_reportsUncheckedUpdateWithoutStepsInputObjectSchema)]),
  create: z.union([z.lazy(() => error_reportsCreateWithoutStepsInputObjectSchema), z.lazy(() => error_reportsUncheckedCreateWithoutStepsInputObjectSchema)])
}).strict();
export const error_reportsUpsertWithWhereUniqueWithoutStepsInputObjectSchema: z.ZodType<Prisma.error_reportsUpsertWithWhereUniqueWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsUpsertWithWhereUniqueWithoutStepsInput>;
export const error_reportsUpsertWithWhereUniqueWithoutStepsInputObjectZodSchema = makeSchema();
