import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logsScalarWhereInputObjectSchema as process_logsScalarWhereInputObjectSchema } from './process_logsScalarWhereInput.schema';
import { process_logsUpdateManyMutationInputObjectSchema as process_logsUpdateManyMutationInputObjectSchema } from './process_logsUpdateManyMutationInput.schema';
import { process_logsUncheckedUpdateManyWithoutUsersInputObjectSchema as process_logsUncheckedUpdateManyWithoutUsersInputObjectSchema } from './process_logsUncheckedUpdateManyWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_logsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => process_logsUpdateManyMutationInputObjectSchema), z.lazy(() => process_logsUncheckedUpdateManyWithoutUsersInputObjectSchema)])
}).strict();
export const process_logsUpdateManyWithWhereWithoutUsersInputObjectSchema: z.ZodType<Prisma.process_logsUpdateManyWithWhereWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.process_logsUpdateManyWithWhereWithoutUsersInput>;
export const process_logsUpdateManyWithWhereWithoutUsersInputObjectZodSchema = makeSchema();
