import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersUpdateWithoutActivity_logsInputObjectSchema as usersUpdateWithoutActivity_logsInputObjectSchema } from './usersUpdateWithoutActivity_logsInput.schema';
import { usersUncheckedUpdateWithoutActivity_logsInputObjectSchema as usersUncheckedUpdateWithoutActivity_logsInputObjectSchema } from './usersUncheckedUpdateWithoutActivity_logsInput.schema';
import { usersCreateWithoutActivity_logsInputObjectSchema as usersCreateWithoutActivity_logsInputObjectSchema } from './usersCreateWithoutActivity_logsInput.schema';
import { usersUncheckedCreateWithoutActivity_logsInputObjectSchema as usersUncheckedCreateWithoutActivity_logsInputObjectSchema } from './usersUncheckedCreateWithoutActivity_logsInput.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => usersUpdateWithoutActivity_logsInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutActivity_logsInputObjectSchema)]),
  create: z.union([z.lazy(() => usersCreateWithoutActivity_logsInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutActivity_logsInputObjectSchema)]),
  where: z.lazy(() => usersWhereInputObjectSchema).optional()
}).strict();
export const usersUpsertWithoutActivity_logsInputObjectSchema: z.ZodType<Prisma.usersUpsertWithoutActivity_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpsertWithoutActivity_logsInput>;
export const usersUpsertWithoutActivity_logsInputObjectZodSchema = makeSchema();
