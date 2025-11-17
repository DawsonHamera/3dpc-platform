import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userUpdateWithoutAttendancesInputObjectSchema as userUpdateWithoutAttendancesInputObjectSchema } from './userUpdateWithoutAttendancesInput.schema';
import { userUncheckedUpdateWithoutAttendancesInputObjectSchema as userUncheckedUpdateWithoutAttendancesInputObjectSchema } from './userUncheckedUpdateWithoutAttendancesInput.schema';
import { userCreateWithoutAttendancesInputObjectSchema as userCreateWithoutAttendancesInputObjectSchema } from './userCreateWithoutAttendancesInput.schema';
import { userUncheckedCreateWithoutAttendancesInputObjectSchema as userUncheckedCreateWithoutAttendancesInputObjectSchema } from './userUncheckedCreateWithoutAttendancesInput.schema';
import { userWhereInputObjectSchema as userWhereInputObjectSchema } from './userWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => userUpdateWithoutAttendancesInputObjectSchema), z.lazy(() => userUncheckedUpdateWithoutAttendancesInputObjectSchema)]),
  create: z.union([z.lazy(() => userCreateWithoutAttendancesInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutAttendancesInputObjectSchema)]),
  where: z.lazy(() => userWhereInputObjectSchema).optional()
}).strict();
export const userUpsertWithoutAttendancesInputObjectSchema: z.ZodType<Prisma.userUpsertWithoutAttendancesInput> = makeSchema() as unknown as z.ZodType<Prisma.userUpsertWithoutAttendancesInput>;
export const userUpsertWithoutAttendancesInputObjectZodSchema = makeSchema();
