import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { task_statusesCreateWithoutTasksInputObjectSchema as task_statusesCreateWithoutTasksInputObjectSchema } from './task_statusesCreateWithoutTasksInput.schema';
import { task_statusesUncheckedCreateWithoutTasksInputObjectSchema as task_statusesUncheckedCreateWithoutTasksInputObjectSchema } from './task_statusesUncheckedCreateWithoutTasksInput.schema';
import { task_statusesCreateOrConnectWithoutTasksInputObjectSchema as task_statusesCreateOrConnectWithoutTasksInputObjectSchema } from './task_statusesCreateOrConnectWithoutTasksInput.schema';
import { task_statusesUpsertWithoutTasksInputObjectSchema as task_statusesUpsertWithoutTasksInputObjectSchema } from './task_statusesUpsertWithoutTasksInput.schema';
import { task_statusesWhereInputObjectSchema as task_statusesWhereInputObjectSchema } from './task_statusesWhereInput.schema';
import { task_statusesWhereUniqueInputObjectSchema as task_statusesWhereUniqueInputObjectSchema } from './task_statusesWhereUniqueInput.schema';
import { task_statusesUpdateToOneWithWhereWithoutTasksInputObjectSchema as task_statusesUpdateToOneWithWhereWithoutTasksInputObjectSchema } from './task_statusesUpdateToOneWithWhereWithoutTasksInput.schema';
import { task_statusesUpdateWithoutTasksInputObjectSchema as task_statusesUpdateWithoutTasksInputObjectSchema } from './task_statusesUpdateWithoutTasksInput.schema';
import { task_statusesUncheckedUpdateWithoutTasksInputObjectSchema as task_statusesUncheckedUpdateWithoutTasksInputObjectSchema } from './task_statusesUncheckedUpdateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => task_statusesCreateWithoutTasksInputObjectSchema), z.lazy(() => task_statusesUncheckedCreateWithoutTasksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => task_statusesCreateOrConnectWithoutTasksInputObjectSchema).optional(),
  upsert: z.lazy(() => task_statusesUpsertWithoutTasksInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => task_statusesWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => task_statusesWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => task_statusesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => task_statusesUpdateToOneWithWhereWithoutTasksInputObjectSchema), z.lazy(() => task_statusesUpdateWithoutTasksInputObjectSchema), z.lazy(() => task_statusesUncheckedUpdateWithoutTasksInputObjectSchema)]).optional()
}).strict();
export const task_statusesUpdateOneWithoutTasksNestedInputObjectSchema: z.ZodType<Prisma.task_statusesUpdateOneWithoutTasksNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.task_statusesUpdateOneWithoutTasksNestedInput>;
export const task_statusesUpdateOneWithoutTasksNestedInputObjectZodSchema = makeSchema();
