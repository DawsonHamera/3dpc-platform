import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userUpdateWithoutActivity_logsInputObjectSchema as userUpdateWithoutActivity_logsInputObjectSchema } from './userUpdateWithoutActivity_logsInput.schema';
import { userUncheckedUpdateWithoutActivity_logsInputObjectSchema as userUncheckedUpdateWithoutActivity_logsInputObjectSchema } from './userUncheckedUpdateWithoutActivity_logsInput.schema';
import { userCreateWithoutActivity_logsInputObjectSchema as userCreateWithoutActivity_logsInputObjectSchema } from './userCreateWithoutActivity_logsInput.schema';
import { userUncheckedCreateWithoutActivity_logsInputObjectSchema as userUncheckedCreateWithoutActivity_logsInputObjectSchema } from './userUncheckedCreateWithoutActivity_logsInput.schema';
import { userWhereInputObjectSchema as userWhereInputObjectSchema } from './userWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => userUpdateWithoutActivity_logsInputObjectSchema), z.lazy(() => userUncheckedUpdateWithoutActivity_logsInputObjectSchema)]),
  create: z.union([z.lazy(() => userCreateWithoutActivity_logsInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutActivity_logsInputObjectSchema)]),
  where: z.lazy(() => userWhereInputObjectSchema).optional()
}).strict();
export const userUpsertWithoutActivity_logsInputObjectSchema: z.ZodType<Prisma.userUpsertWithoutActivity_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.userUpsertWithoutActivity_logsInput>;
export const userUpsertWithoutActivity_logsInputObjectZodSchema = makeSchema();
