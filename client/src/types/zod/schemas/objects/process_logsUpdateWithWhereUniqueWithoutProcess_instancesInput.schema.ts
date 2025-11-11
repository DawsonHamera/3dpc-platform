import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logsWhereUniqueInputObjectSchema as process_logsWhereUniqueInputObjectSchema } from './process_logsWhereUniqueInput.schema';
import { process_logsUpdateWithoutProcess_instancesInputObjectSchema as process_logsUpdateWithoutProcess_instancesInputObjectSchema } from './process_logsUpdateWithoutProcess_instancesInput.schema';
import { process_logsUncheckedUpdateWithoutProcess_instancesInputObjectSchema as process_logsUncheckedUpdateWithoutProcess_instancesInputObjectSchema } from './process_logsUncheckedUpdateWithoutProcess_instancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_logsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => process_logsUpdateWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_logsUncheckedUpdateWithoutProcess_instancesInputObjectSchema)])
}).strict();
export const process_logsUpdateWithWhereUniqueWithoutProcess_instancesInputObjectSchema: z.ZodType<Prisma.process_logsUpdateWithWhereUniqueWithoutProcess_instancesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_logsUpdateWithWhereUniqueWithoutProcess_instancesInput>;
export const process_logsUpdateWithWhereUniqueWithoutProcess_instancesInputObjectZodSchema = makeSchema();
