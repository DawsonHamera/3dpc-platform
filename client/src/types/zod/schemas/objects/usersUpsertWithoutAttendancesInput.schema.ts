import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersUpdateWithoutAttendancesInputObjectSchema as usersUpdateWithoutAttendancesInputObjectSchema } from './usersUpdateWithoutAttendancesInput.schema';
import { usersUncheckedUpdateWithoutAttendancesInputObjectSchema as usersUncheckedUpdateWithoutAttendancesInputObjectSchema } from './usersUncheckedUpdateWithoutAttendancesInput.schema';
import { usersCreateWithoutAttendancesInputObjectSchema as usersCreateWithoutAttendancesInputObjectSchema } from './usersCreateWithoutAttendancesInput.schema';
import { usersUncheckedCreateWithoutAttendancesInputObjectSchema as usersUncheckedCreateWithoutAttendancesInputObjectSchema } from './usersUncheckedCreateWithoutAttendancesInput.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => usersUpdateWithoutAttendancesInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutAttendancesInputObjectSchema)]),
  create: z.union([z.lazy(() => usersCreateWithoutAttendancesInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutAttendancesInputObjectSchema)]),
  where: z.lazy(() => usersWhereInputObjectSchema).optional()
}).strict();
export const usersUpsertWithoutAttendancesInputObjectSchema: z.ZodType<Prisma.usersUpsertWithoutAttendancesInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpsertWithoutAttendancesInput>;
export const usersUpsertWithoutAttendancesInputObjectZodSchema = makeSchema();
