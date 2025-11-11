import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logsWhereUniqueInputObjectSchema as process_logsWhereUniqueInputObjectSchema } from './process_logsWhereUniqueInput.schema';
import { process_logsCreateWithoutUsersInputObjectSchema as process_logsCreateWithoutUsersInputObjectSchema } from './process_logsCreateWithoutUsersInput.schema';
import { process_logsUncheckedCreateWithoutUsersInputObjectSchema as process_logsUncheckedCreateWithoutUsersInputObjectSchema } from './process_logsUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_logsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => process_logsCreateWithoutUsersInputObjectSchema), z.lazy(() => process_logsUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const process_logsCreateOrConnectWithoutUsersInputObjectSchema: z.ZodType<Prisma.process_logsCreateOrConnectWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.process_logsCreateOrConnectWithoutUsersInput>;
export const process_logsCreateOrConnectWithoutUsersInputObjectZodSchema = makeSchema();
