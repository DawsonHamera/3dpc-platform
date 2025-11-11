import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksCreateWithoutRequestsInputObjectSchema as tasksCreateWithoutRequestsInputObjectSchema } from './tasksCreateWithoutRequestsInput.schema';
import { tasksUncheckedCreateWithoutRequestsInputObjectSchema as tasksUncheckedCreateWithoutRequestsInputObjectSchema } from './tasksUncheckedCreateWithoutRequestsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tasksCreateWithoutRequestsInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutRequestsInputObjectSchema)])
}).strict();
export const tasksCreateOrConnectWithoutRequestsInputObjectSchema: z.ZodType<Prisma.tasksCreateOrConnectWithoutRequestsInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksCreateOrConnectWithoutRequestsInput>;
export const tasksCreateOrConnectWithoutRequestsInputObjectZodSchema = makeSchema();
