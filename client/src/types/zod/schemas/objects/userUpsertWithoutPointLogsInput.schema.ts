import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userUpdateWithoutPointLogsInputObjectSchema as userUpdateWithoutPointLogsInputObjectSchema } from './userUpdateWithoutPointLogsInput.schema';
import { userUncheckedUpdateWithoutPointLogsInputObjectSchema as userUncheckedUpdateWithoutPointLogsInputObjectSchema } from './userUncheckedUpdateWithoutPointLogsInput.schema';
import { userCreateWithoutPointLogsInputObjectSchema as userCreateWithoutPointLogsInputObjectSchema } from './userCreateWithoutPointLogsInput.schema';
import { userUncheckedCreateWithoutPointLogsInputObjectSchema as userUncheckedCreateWithoutPointLogsInputObjectSchema } from './userUncheckedCreateWithoutPointLogsInput.schema';
import { userWhereInputObjectSchema as userWhereInputObjectSchema } from './userWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => userUpdateWithoutPointLogsInputObjectSchema), z.lazy(() => userUncheckedUpdateWithoutPointLogsInputObjectSchema)]),
  create: z.union([z.lazy(() => userCreateWithoutPointLogsInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutPointLogsInputObjectSchema)]),
  where: z.lazy(() => userWhereInputObjectSchema).optional()
}).strict();
export const userUpsertWithoutPointLogsInputObjectSchema: z.ZodType<Prisma.userUpsertWithoutPointLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.userUpsertWithoutPointLogsInput>;
export const userUpsertWithoutPointLogsInputObjectZodSchema = makeSchema();
