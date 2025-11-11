import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesUpdateWithoutTasksInputObjectSchema as process_instancesUpdateWithoutTasksInputObjectSchema } from './process_instancesUpdateWithoutTasksInput.schema';
import { process_instancesUncheckedUpdateWithoutTasksInputObjectSchema as process_instancesUncheckedUpdateWithoutTasksInputObjectSchema } from './process_instancesUncheckedUpdateWithoutTasksInput.schema';
import { process_instancesCreateWithoutTasksInputObjectSchema as process_instancesCreateWithoutTasksInputObjectSchema } from './process_instancesCreateWithoutTasksInput.schema';
import { process_instancesUncheckedCreateWithoutTasksInputObjectSchema as process_instancesUncheckedCreateWithoutTasksInputObjectSchema } from './process_instancesUncheckedCreateWithoutTasksInput.schema';
import { process_instancesWhereInputObjectSchema as process_instancesWhereInputObjectSchema } from './process_instancesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => process_instancesUpdateWithoutTasksInputObjectSchema), z.lazy(() => process_instancesUncheckedUpdateWithoutTasksInputObjectSchema)]),
  create: z.union([z.lazy(() => process_instancesCreateWithoutTasksInputObjectSchema), z.lazy(() => process_instancesUncheckedCreateWithoutTasksInputObjectSchema)]),
  where: z.lazy(() => process_instancesWhereInputObjectSchema).optional()
}).strict();
export const process_instancesUpsertWithoutTasksInputObjectSchema: z.ZodType<Prisma.process_instancesUpsertWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesUpsertWithoutTasksInput>;
export const process_instancesUpsertWithoutTasksInputObjectZodSchema = makeSchema();
