import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsScalarWhereInputObjectSchema as error_reportsScalarWhereInputObjectSchema } from './error_reportsScalarWhereInput.schema';
import { error_reportsUpdateManyMutationInputObjectSchema as error_reportsUpdateManyMutationInputObjectSchema } from './error_reportsUpdateManyMutationInput.schema';
import { error_reportsUncheckedUpdateManyWithoutTasksInputObjectSchema as error_reportsUncheckedUpdateManyWithoutTasksInputObjectSchema } from './error_reportsUncheckedUpdateManyWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => error_reportsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => error_reportsUpdateManyMutationInputObjectSchema), z.lazy(() => error_reportsUncheckedUpdateManyWithoutTasksInputObjectSchema)])
}).strict();
export const error_reportsUpdateManyWithWhereWithoutTasksInputObjectSchema: z.ZodType<Prisma.error_reportsUpdateManyWithWhereWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsUpdateManyWithWhereWithoutTasksInput>;
export const error_reportsUpdateManyWithWhereWithoutTasksInputObjectZodSchema = makeSchema();
