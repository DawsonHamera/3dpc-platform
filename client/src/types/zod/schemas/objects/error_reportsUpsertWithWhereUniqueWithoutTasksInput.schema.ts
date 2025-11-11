import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsWhereUniqueInputObjectSchema as error_reportsWhereUniqueInputObjectSchema } from './error_reportsWhereUniqueInput.schema';
import { error_reportsUpdateWithoutTasksInputObjectSchema as error_reportsUpdateWithoutTasksInputObjectSchema } from './error_reportsUpdateWithoutTasksInput.schema';
import { error_reportsUncheckedUpdateWithoutTasksInputObjectSchema as error_reportsUncheckedUpdateWithoutTasksInputObjectSchema } from './error_reportsUncheckedUpdateWithoutTasksInput.schema';
import { error_reportsCreateWithoutTasksInputObjectSchema as error_reportsCreateWithoutTasksInputObjectSchema } from './error_reportsCreateWithoutTasksInput.schema';
import { error_reportsUncheckedCreateWithoutTasksInputObjectSchema as error_reportsUncheckedCreateWithoutTasksInputObjectSchema } from './error_reportsUncheckedCreateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => error_reportsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => error_reportsUpdateWithoutTasksInputObjectSchema), z.lazy(() => error_reportsUncheckedUpdateWithoutTasksInputObjectSchema)]),
  create: z.union([z.lazy(() => error_reportsCreateWithoutTasksInputObjectSchema), z.lazy(() => error_reportsUncheckedCreateWithoutTasksInputObjectSchema)])
}).strict();
export const error_reportsUpsertWithWhereUniqueWithoutTasksInputObjectSchema: z.ZodType<Prisma.error_reportsUpsertWithWhereUniqueWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsUpsertWithWhereUniqueWithoutTasksInput>;
export const error_reportsUpsertWithWhereUniqueWithoutTasksInputObjectZodSchema = makeSchema();
