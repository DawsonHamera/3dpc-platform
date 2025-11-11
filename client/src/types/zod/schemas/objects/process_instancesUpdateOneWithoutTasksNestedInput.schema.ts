import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesCreateWithoutTasksInputObjectSchema as process_instancesCreateWithoutTasksInputObjectSchema } from './process_instancesCreateWithoutTasksInput.schema';
import { process_instancesUncheckedCreateWithoutTasksInputObjectSchema as process_instancesUncheckedCreateWithoutTasksInputObjectSchema } from './process_instancesUncheckedCreateWithoutTasksInput.schema';
import { process_instancesCreateOrConnectWithoutTasksInputObjectSchema as process_instancesCreateOrConnectWithoutTasksInputObjectSchema } from './process_instancesCreateOrConnectWithoutTasksInput.schema';
import { process_instancesUpsertWithoutTasksInputObjectSchema as process_instancesUpsertWithoutTasksInputObjectSchema } from './process_instancesUpsertWithoutTasksInput.schema';
import { process_instancesWhereInputObjectSchema as process_instancesWhereInputObjectSchema } from './process_instancesWhereInput.schema';
import { process_instancesWhereUniqueInputObjectSchema as process_instancesWhereUniqueInputObjectSchema } from './process_instancesWhereUniqueInput.schema';
import { process_instancesUpdateToOneWithWhereWithoutTasksInputObjectSchema as process_instancesUpdateToOneWithWhereWithoutTasksInputObjectSchema } from './process_instancesUpdateToOneWithWhereWithoutTasksInput.schema';
import { process_instancesUpdateWithoutTasksInputObjectSchema as process_instancesUpdateWithoutTasksInputObjectSchema } from './process_instancesUpdateWithoutTasksInput.schema';
import { process_instancesUncheckedUpdateWithoutTasksInputObjectSchema as process_instancesUncheckedUpdateWithoutTasksInputObjectSchema } from './process_instancesUncheckedUpdateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_instancesCreateWithoutTasksInputObjectSchema), z.lazy(() => process_instancesUncheckedCreateWithoutTasksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => process_instancesCreateOrConnectWithoutTasksInputObjectSchema).optional(),
  upsert: z.lazy(() => process_instancesUpsertWithoutTasksInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => process_instancesWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => process_instancesWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => process_instancesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => process_instancesUpdateToOneWithWhereWithoutTasksInputObjectSchema), z.lazy(() => process_instancesUpdateWithoutTasksInputObjectSchema), z.lazy(() => process_instancesUncheckedUpdateWithoutTasksInputObjectSchema)]).optional()
}).strict();
export const process_instancesUpdateOneWithoutTasksNestedInputObjectSchema: z.ZodType<Prisma.process_instancesUpdateOneWithoutTasksNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesUpdateOneWithoutTasksNestedInput>;
export const process_instancesUpdateOneWithoutTasksNestedInputObjectZodSchema = makeSchema();
