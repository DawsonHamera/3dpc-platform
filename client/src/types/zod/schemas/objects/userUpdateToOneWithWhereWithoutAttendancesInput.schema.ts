import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userWhereInputObjectSchema as userWhereInputObjectSchema } from './userWhereInput.schema';
import { userUpdateWithoutAttendancesInputObjectSchema as userUpdateWithoutAttendancesInputObjectSchema } from './userUpdateWithoutAttendancesInput.schema';
import { userUncheckedUpdateWithoutAttendancesInputObjectSchema as userUncheckedUpdateWithoutAttendancesInputObjectSchema } from './userUncheckedUpdateWithoutAttendancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => userWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => userUpdateWithoutAttendancesInputObjectSchema), z.lazy(() => userUncheckedUpdateWithoutAttendancesInputObjectSchema)])
}).strict();
export const userUpdateToOneWithWhereWithoutAttendancesInputObjectSchema: z.ZodType<Prisma.userUpdateToOneWithWhereWithoutAttendancesInput> = makeSchema() as unknown as z.ZodType<Prisma.userUpdateToOneWithWhereWithoutAttendancesInput>;
export const userUpdateToOneWithWhereWithoutAttendancesInputObjectZodSchema = makeSchema();
