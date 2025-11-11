import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsWhereUniqueInputObjectSchema as error_reportsWhereUniqueInputObjectSchema } from './error_reportsWhereUniqueInput.schema';
import { error_reportsUpdateWithoutTasksInputObjectSchema as error_reportsUpdateWithoutTasksInputObjectSchema } from './error_reportsUpdateWithoutTasksInput.schema';
import { error_reportsUncheckedUpdateWithoutTasksInputObjectSchema as error_reportsUncheckedUpdateWithoutTasksInputObjectSchema } from './error_reportsUncheckedUpdateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => error_reportsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => error_reportsUpdateWithoutTasksInputObjectSchema), z.lazy(() => error_reportsUncheckedUpdateWithoutTasksInputObjectSchema)])
}).strict();
export const error_reportsUpdateWithWhereUniqueWithoutTasksInputObjectSchema: z.ZodType<Prisma.error_reportsUpdateWithWhereUniqueWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsUpdateWithWhereUniqueWithoutTasksInput>;
export const error_reportsUpdateWithWhereUniqueWithoutTasksInputObjectZodSchema = makeSchema();
