import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesWhereUniqueInputObjectSchema as process_instancesWhereUniqueInputObjectSchema } from './process_instancesWhereUniqueInput.schema';
import { process_instancesCreateWithoutTasksInputObjectSchema as process_instancesCreateWithoutTasksInputObjectSchema } from './process_instancesCreateWithoutTasksInput.schema';
import { process_instancesUncheckedCreateWithoutTasksInputObjectSchema as process_instancesUncheckedCreateWithoutTasksInputObjectSchema } from './process_instancesUncheckedCreateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_instancesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => process_instancesCreateWithoutTasksInputObjectSchema), z.lazy(() => process_instancesUncheckedCreateWithoutTasksInputObjectSchema)])
}).strict();
export const process_instancesCreateOrConnectWithoutTasksInputObjectSchema: z.ZodType<Prisma.process_instancesCreateOrConnectWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesCreateOrConnectWithoutTasksInput>;
export const process_instancesCreateOrConnectWithoutTasksInputObjectZodSchema = makeSchema();
