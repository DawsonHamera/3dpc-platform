import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsWhereUniqueInputObjectSchema as error_reportsWhereUniqueInputObjectSchema } from './error_reportsWhereUniqueInput.schema';
import { error_reportsCreateWithoutTasksInputObjectSchema as error_reportsCreateWithoutTasksInputObjectSchema } from './error_reportsCreateWithoutTasksInput.schema';
import { error_reportsUncheckedCreateWithoutTasksInputObjectSchema as error_reportsUncheckedCreateWithoutTasksInputObjectSchema } from './error_reportsUncheckedCreateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => error_reportsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => error_reportsCreateWithoutTasksInputObjectSchema), z.lazy(() => error_reportsUncheckedCreateWithoutTasksInputObjectSchema)])
}).strict();
export const error_reportsCreateOrConnectWithoutTasksInputObjectSchema: z.ZodType<Prisma.error_reportsCreateOrConnectWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsCreateOrConnectWithoutTasksInput>;
export const error_reportsCreateOrConnectWithoutTasksInputObjectZodSchema = makeSchema();
