import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logsWhereUniqueInputObjectSchema as process_logsWhereUniqueInputObjectSchema } from './process_logsWhereUniqueInput.schema';
import { process_logsUpdateWithoutUsersInputObjectSchema as process_logsUpdateWithoutUsersInputObjectSchema } from './process_logsUpdateWithoutUsersInput.schema';
import { process_logsUncheckedUpdateWithoutUsersInputObjectSchema as process_logsUncheckedUpdateWithoutUsersInputObjectSchema } from './process_logsUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_logsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => process_logsUpdateWithoutUsersInputObjectSchema), z.lazy(() => process_logsUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
export const process_logsUpdateWithWhereUniqueWithoutUsersInputObjectSchema: z.ZodType<Prisma.process_logsUpdateWithWhereUniqueWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.process_logsUpdateWithWhereUniqueWithoutUsersInput>;
export const process_logsUpdateWithWhereUniqueWithoutUsersInputObjectZodSchema = makeSchema();
