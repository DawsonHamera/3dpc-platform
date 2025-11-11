import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsScalarWhereInputObjectSchema as error_reportsScalarWhereInputObjectSchema } from './error_reportsScalarWhereInput.schema';
import { error_reportsUpdateManyMutationInputObjectSchema as error_reportsUpdateManyMutationInputObjectSchema } from './error_reportsUpdateManyMutationInput.schema';
import { error_reportsUncheckedUpdateManyWithoutStepsInputObjectSchema as error_reportsUncheckedUpdateManyWithoutStepsInputObjectSchema } from './error_reportsUncheckedUpdateManyWithoutStepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => error_reportsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => error_reportsUpdateManyMutationInputObjectSchema), z.lazy(() => error_reportsUncheckedUpdateManyWithoutStepsInputObjectSchema)])
}).strict();
export const error_reportsUpdateManyWithWhereWithoutStepsInputObjectSchema: z.ZodType<Prisma.error_reportsUpdateManyWithWhereWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsUpdateManyWithWhereWithoutStepsInput>;
export const error_reportsUpdateManyWithWhereWithoutStepsInputObjectZodSchema = makeSchema();
