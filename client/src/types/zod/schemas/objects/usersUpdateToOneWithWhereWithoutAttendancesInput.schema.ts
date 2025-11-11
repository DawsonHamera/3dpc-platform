import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema';
import { usersUpdateWithoutAttendancesInputObjectSchema as usersUpdateWithoutAttendancesInputObjectSchema } from './usersUpdateWithoutAttendancesInput.schema';
import { usersUncheckedUpdateWithoutAttendancesInputObjectSchema as usersUncheckedUpdateWithoutAttendancesInputObjectSchema } from './usersUncheckedUpdateWithoutAttendancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => usersUpdateWithoutAttendancesInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutAttendancesInputObjectSchema)])
}).strict();
export const usersUpdateToOneWithWhereWithoutAttendancesInputObjectSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutAttendancesInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutAttendancesInput>;
export const usersUpdateToOneWithWhereWithoutAttendancesInputObjectZodSchema = makeSchema();
