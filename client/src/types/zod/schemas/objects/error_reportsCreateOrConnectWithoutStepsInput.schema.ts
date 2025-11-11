import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsWhereUniqueInputObjectSchema as error_reportsWhereUniqueInputObjectSchema } from './error_reportsWhereUniqueInput.schema';
import { error_reportsCreateWithoutStepsInputObjectSchema as error_reportsCreateWithoutStepsInputObjectSchema } from './error_reportsCreateWithoutStepsInput.schema';
import { error_reportsUncheckedCreateWithoutStepsInputObjectSchema as error_reportsUncheckedCreateWithoutStepsInputObjectSchema } from './error_reportsUncheckedCreateWithoutStepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => error_reportsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => error_reportsCreateWithoutStepsInputObjectSchema), z.lazy(() => error_reportsUncheckedCreateWithoutStepsInputObjectSchema)])
}).strict();
export const error_reportsCreateOrConnectWithoutStepsInputObjectSchema: z.ZodType<Prisma.error_reportsCreateOrConnectWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsCreateOrConnectWithoutStepsInput>;
export const error_reportsCreateOrConnectWithoutStepsInputObjectZodSchema = makeSchema();
