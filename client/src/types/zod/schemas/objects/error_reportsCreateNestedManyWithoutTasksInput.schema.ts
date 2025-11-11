import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsCreateWithoutTasksInputObjectSchema as error_reportsCreateWithoutTasksInputObjectSchema } from './error_reportsCreateWithoutTasksInput.schema';
import { error_reportsUncheckedCreateWithoutTasksInputObjectSchema as error_reportsUncheckedCreateWithoutTasksInputObjectSchema } from './error_reportsUncheckedCreateWithoutTasksInput.schema';
import { error_reportsCreateOrConnectWithoutTasksInputObjectSchema as error_reportsCreateOrConnectWithoutTasksInputObjectSchema } from './error_reportsCreateOrConnectWithoutTasksInput.schema';
import { error_reportsCreateManyTasksInputEnvelopeObjectSchema as error_reportsCreateManyTasksInputEnvelopeObjectSchema } from './error_reportsCreateManyTasksInputEnvelope.schema';
import { error_reportsWhereUniqueInputObjectSchema as error_reportsWhereUniqueInputObjectSchema } from './error_reportsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => error_reportsCreateWithoutTasksInputObjectSchema), z.lazy(() => error_reportsCreateWithoutTasksInputObjectSchema).array(), z.lazy(() => error_reportsUncheckedCreateWithoutTasksInputObjectSchema), z.lazy(() => error_reportsUncheckedCreateWithoutTasksInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => error_reportsCreateOrConnectWithoutTasksInputObjectSchema), z.lazy(() => error_reportsCreateOrConnectWithoutTasksInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => error_reportsCreateManyTasksInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => error_reportsWhereUniqueInputObjectSchema), z.lazy(() => error_reportsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const error_reportsCreateNestedManyWithoutTasksInputObjectSchema: z.ZodType<Prisma.error_reportsCreateNestedManyWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsCreateNestedManyWithoutTasksInput>;
export const error_reportsCreateNestedManyWithoutTasksInputObjectZodSchema = makeSchema();
