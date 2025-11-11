import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksCreateWithoutRequestsInputObjectSchema as tasksCreateWithoutRequestsInputObjectSchema } from './tasksCreateWithoutRequestsInput.schema';
import { tasksUncheckedCreateWithoutRequestsInputObjectSchema as tasksUncheckedCreateWithoutRequestsInputObjectSchema } from './tasksUncheckedCreateWithoutRequestsInput.schema';
import { tasksCreateOrConnectWithoutRequestsInputObjectSchema as tasksCreateOrConnectWithoutRequestsInputObjectSchema } from './tasksCreateOrConnectWithoutRequestsInput.schema';
import { tasksCreateManyRequestsInputEnvelopeObjectSchema as tasksCreateManyRequestsInputEnvelopeObjectSchema } from './tasksCreateManyRequestsInputEnvelope.schema';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tasksCreateWithoutRequestsInputObjectSchema), z.lazy(() => tasksCreateWithoutRequestsInputObjectSchema).array(), z.lazy(() => tasksUncheckedCreateWithoutRequestsInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutRequestsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tasksCreateOrConnectWithoutRequestsInputObjectSchema), z.lazy(() => tasksCreateOrConnectWithoutRequestsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tasksCreateManyRequestsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tasksCreateNestedManyWithoutRequestsInputObjectSchema: z.ZodType<Prisma.tasksCreateNestedManyWithoutRequestsInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksCreateNestedManyWithoutRequestsInput>;
export const tasksCreateNestedManyWithoutRequestsInputObjectZodSchema = makeSchema();
