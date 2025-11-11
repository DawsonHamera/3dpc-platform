import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksUpdateWithoutRequestsInputObjectSchema as tasksUpdateWithoutRequestsInputObjectSchema } from './tasksUpdateWithoutRequestsInput.schema';
import { tasksUncheckedUpdateWithoutRequestsInputObjectSchema as tasksUncheckedUpdateWithoutRequestsInputObjectSchema } from './tasksUncheckedUpdateWithoutRequestsInput.schema';
import { tasksCreateWithoutRequestsInputObjectSchema as tasksCreateWithoutRequestsInputObjectSchema } from './tasksCreateWithoutRequestsInput.schema';
import { tasksUncheckedCreateWithoutRequestsInputObjectSchema as tasksUncheckedCreateWithoutRequestsInputObjectSchema } from './tasksUncheckedCreateWithoutRequestsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tasksUpdateWithoutRequestsInputObjectSchema), z.lazy(() => tasksUncheckedUpdateWithoutRequestsInputObjectSchema)]),
  create: z.union([z.lazy(() => tasksCreateWithoutRequestsInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutRequestsInputObjectSchema)])
}).strict();
export const tasksUpsertWithWhereUniqueWithoutRequestsInputObjectSchema: z.ZodType<Prisma.tasksUpsertWithWhereUniqueWithoutRequestsInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpsertWithWhereUniqueWithoutRequestsInput>;
export const tasksUpsertWithWhereUniqueWithoutRequestsInputObjectZodSchema = makeSchema();
