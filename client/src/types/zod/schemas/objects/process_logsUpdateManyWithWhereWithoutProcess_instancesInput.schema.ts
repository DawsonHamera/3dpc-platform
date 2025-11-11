import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logsScalarWhereInputObjectSchema as process_logsScalarWhereInputObjectSchema } from './process_logsScalarWhereInput.schema';
import { process_logsUpdateManyMutationInputObjectSchema as process_logsUpdateManyMutationInputObjectSchema } from './process_logsUpdateManyMutationInput.schema';
import { process_logsUncheckedUpdateManyWithoutProcess_instancesInputObjectSchema as process_logsUncheckedUpdateManyWithoutProcess_instancesInputObjectSchema } from './process_logsUncheckedUpdateManyWithoutProcess_instancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_logsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => process_logsUpdateManyMutationInputObjectSchema), z.lazy(() => process_logsUncheckedUpdateManyWithoutProcess_instancesInputObjectSchema)])
}).strict();
export const process_logsUpdateManyWithWhereWithoutProcess_instancesInputObjectSchema: z.ZodType<Prisma.process_logsUpdateManyWithWhereWithoutProcess_instancesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_logsUpdateManyWithWhereWithoutProcess_instancesInput>;
export const process_logsUpdateManyWithWhereWithoutProcess_instancesInputObjectZodSchema = makeSchema();
