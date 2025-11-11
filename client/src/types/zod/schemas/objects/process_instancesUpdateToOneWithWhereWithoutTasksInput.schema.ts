import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesWhereInputObjectSchema as process_instancesWhereInputObjectSchema } from './process_instancesWhereInput.schema';
import { process_instancesUpdateWithoutTasksInputObjectSchema as process_instancesUpdateWithoutTasksInputObjectSchema } from './process_instancesUpdateWithoutTasksInput.schema';
import { process_instancesUncheckedUpdateWithoutTasksInputObjectSchema as process_instancesUncheckedUpdateWithoutTasksInputObjectSchema } from './process_instancesUncheckedUpdateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_instancesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => process_instancesUpdateWithoutTasksInputObjectSchema), z.lazy(() => process_instancesUncheckedUpdateWithoutTasksInputObjectSchema)])
}).strict();
export const process_instancesUpdateToOneWithWhereWithoutTasksInputObjectSchema: z.ZodType<Prisma.process_instancesUpdateToOneWithWhereWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesUpdateToOneWithWhereWithoutTasksInput>;
export const process_instancesUpdateToOneWithWhereWithoutTasksInputObjectZodSchema = makeSchema();
