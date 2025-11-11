import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesWhereInputObjectSchema as process_instancesWhereInputObjectSchema } from './process_instancesWhereInput.schema';
import { process_instancesUpdateWithoutProcess_logsInputObjectSchema as process_instancesUpdateWithoutProcess_logsInputObjectSchema } from './process_instancesUpdateWithoutProcess_logsInput.schema';
import { process_instancesUncheckedUpdateWithoutProcess_logsInputObjectSchema as process_instancesUncheckedUpdateWithoutProcess_logsInputObjectSchema } from './process_instancesUncheckedUpdateWithoutProcess_logsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_instancesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => process_instancesUpdateWithoutProcess_logsInputObjectSchema), z.lazy(() => process_instancesUncheckedUpdateWithoutProcess_logsInputObjectSchema)])
}).strict();
export const process_instancesUpdateToOneWithWhereWithoutProcess_logsInputObjectSchema: z.ZodType<Prisma.process_instancesUpdateToOneWithWhereWithoutProcess_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesUpdateToOneWithWhereWithoutProcess_logsInput>;
export const process_instancesUpdateToOneWithWhereWithoutProcess_logsInputObjectZodSchema = makeSchema();
