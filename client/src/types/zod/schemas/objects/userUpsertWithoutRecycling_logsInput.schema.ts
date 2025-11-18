import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userUpdateWithoutRecycling_logsInputObjectSchema as userUpdateWithoutRecycling_logsInputObjectSchema } from './userUpdateWithoutRecycling_logsInput.schema';
import { userUncheckedUpdateWithoutRecycling_logsInputObjectSchema as userUncheckedUpdateWithoutRecycling_logsInputObjectSchema } from './userUncheckedUpdateWithoutRecycling_logsInput.schema';
import { userCreateWithoutRecycling_logsInputObjectSchema as userCreateWithoutRecycling_logsInputObjectSchema } from './userCreateWithoutRecycling_logsInput.schema';
import { userUncheckedCreateWithoutRecycling_logsInputObjectSchema as userUncheckedCreateWithoutRecycling_logsInputObjectSchema } from './userUncheckedCreateWithoutRecycling_logsInput.schema';
import { userWhereInputObjectSchema as userWhereInputObjectSchema } from './userWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => userUpdateWithoutRecycling_logsInputObjectSchema), z.lazy(() => userUncheckedUpdateWithoutRecycling_logsInputObjectSchema)]),
  create: z.union([z.lazy(() => userCreateWithoutRecycling_logsInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutRecycling_logsInputObjectSchema)]),
  where: z.lazy(() => userWhereInputObjectSchema).optional()
}).strict();
export const userUpsertWithoutRecycling_logsInputObjectSchema: z.ZodType<Prisma.userUpsertWithoutRecycling_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.userUpsertWithoutRecycling_logsInput>;
export const userUpsertWithoutRecycling_logsInputObjectZodSchema = makeSchema();
