import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersUpdateWithoutProcess_logsInputObjectSchema as usersUpdateWithoutProcess_logsInputObjectSchema } from './usersUpdateWithoutProcess_logsInput.schema';
import { usersUncheckedUpdateWithoutProcess_logsInputObjectSchema as usersUncheckedUpdateWithoutProcess_logsInputObjectSchema } from './usersUncheckedUpdateWithoutProcess_logsInput.schema';
import { usersCreateWithoutProcess_logsInputObjectSchema as usersCreateWithoutProcess_logsInputObjectSchema } from './usersCreateWithoutProcess_logsInput.schema';
import { usersUncheckedCreateWithoutProcess_logsInputObjectSchema as usersUncheckedCreateWithoutProcess_logsInputObjectSchema } from './usersUncheckedCreateWithoutProcess_logsInput.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => usersUpdateWithoutProcess_logsInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutProcess_logsInputObjectSchema)]),
  create: z.union([z.lazy(() => usersCreateWithoutProcess_logsInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutProcess_logsInputObjectSchema)]),
  where: z.lazy(() => usersWhereInputObjectSchema).optional()
}).strict();
export const usersUpsertWithoutProcess_logsInputObjectSchema: z.ZodType<Prisma.usersUpsertWithoutProcess_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpsertWithoutProcess_logsInput>;
export const usersUpsertWithoutProcess_logsInputObjectZodSchema = makeSchema();
