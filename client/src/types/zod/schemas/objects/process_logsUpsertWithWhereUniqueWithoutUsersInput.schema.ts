import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logsWhereUniqueInputObjectSchema as process_logsWhereUniqueInputObjectSchema } from './process_logsWhereUniqueInput.schema';
import { process_logsUpdateWithoutUsersInputObjectSchema as process_logsUpdateWithoutUsersInputObjectSchema } from './process_logsUpdateWithoutUsersInput.schema';
import { process_logsUncheckedUpdateWithoutUsersInputObjectSchema as process_logsUncheckedUpdateWithoutUsersInputObjectSchema } from './process_logsUncheckedUpdateWithoutUsersInput.schema';
import { process_logsCreateWithoutUsersInputObjectSchema as process_logsCreateWithoutUsersInputObjectSchema } from './process_logsCreateWithoutUsersInput.schema';
import { process_logsUncheckedCreateWithoutUsersInputObjectSchema as process_logsUncheckedCreateWithoutUsersInputObjectSchema } from './process_logsUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_logsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => process_logsUpdateWithoutUsersInputObjectSchema), z.lazy(() => process_logsUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => process_logsCreateWithoutUsersInputObjectSchema), z.lazy(() => process_logsUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const process_logsUpsertWithWhereUniqueWithoutUsersInputObjectSchema: z.ZodType<Prisma.process_logsUpsertWithWhereUniqueWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.process_logsUpsertWithWhereUniqueWithoutUsersInput>;
export const process_logsUpsertWithWhereUniqueWithoutUsersInputObjectZodSchema = makeSchema();
