import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesCreateWithoutTasksInputObjectSchema as process_instancesCreateWithoutTasksInputObjectSchema } from './process_instancesCreateWithoutTasksInput.schema';
import { process_instancesUncheckedCreateWithoutTasksInputObjectSchema as process_instancesUncheckedCreateWithoutTasksInputObjectSchema } from './process_instancesUncheckedCreateWithoutTasksInput.schema';
import { process_instancesCreateOrConnectWithoutTasksInputObjectSchema as process_instancesCreateOrConnectWithoutTasksInputObjectSchema } from './process_instancesCreateOrConnectWithoutTasksInput.schema';
import { process_instancesWhereUniqueInputObjectSchema as process_instancesWhereUniqueInputObjectSchema } from './process_instancesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_instancesCreateWithoutTasksInputObjectSchema), z.lazy(() => process_instancesUncheckedCreateWithoutTasksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => process_instancesCreateOrConnectWithoutTasksInputObjectSchema).optional(),
  connect: z.lazy(() => process_instancesWhereUniqueInputObjectSchema).optional()
}).strict();
export const process_instancesCreateNestedOneWithoutTasksInputObjectSchema: z.ZodType<Prisma.process_instancesCreateNestedOneWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesCreateNestedOneWithoutTasksInput>;
export const process_instancesCreateNestedOneWithoutTasksInputObjectZodSchema = makeSchema();
