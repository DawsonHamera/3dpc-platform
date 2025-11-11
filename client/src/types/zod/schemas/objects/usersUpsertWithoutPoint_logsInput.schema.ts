import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersUpdateWithoutPoint_logsInputObjectSchema as usersUpdateWithoutPoint_logsInputObjectSchema } from './usersUpdateWithoutPoint_logsInput.schema';
import { usersUncheckedUpdateWithoutPoint_logsInputObjectSchema as usersUncheckedUpdateWithoutPoint_logsInputObjectSchema } from './usersUncheckedUpdateWithoutPoint_logsInput.schema';
import { usersCreateWithoutPoint_logsInputObjectSchema as usersCreateWithoutPoint_logsInputObjectSchema } from './usersCreateWithoutPoint_logsInput.schema';
import { usersUncheckedCreateWithoutPoint_logsInputObjectSchema as usersUncheckedCreateWithoutPoint_logsInputObjectSchema } from './usersUncheckedCreateWithoutPoint_logsInput.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => usersUpdateWithoutPoint_logsInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutPoint_logsInputObjectSchema)]),
  create: z.union([z.lazy(() => usersCreateWithoutPoint_logsInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutPoint_logsInputObjectSchema)]),
  where: z.lazy(() => usersWhereInputObjectSchema).optional()
}).strict();
export const usersUpsertWithoutPoint_logsInputObjectSchema: z.ZodType<Prisma.usersUpsertWithoutPoint_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpsertWithoutPoint_logsInput>;
export const usersUpsertWithoutPoint_logsInputObjectZodSchema = makeSchema();
