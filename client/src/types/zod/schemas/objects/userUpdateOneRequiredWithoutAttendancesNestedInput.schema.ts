import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userCreateWithoutAttendancesInputObjectSchema as userCreateWithoutAttendancesInputObjectSchema } from './userCreateWithoutAttendancesInput.schema';
import { userUncheckedCreateWithoutAttendancesInputObjectSchema as userUncheckedCreateWithoutAttendancesInputObjectSchema } from './userUncheckedCreateWithoutAttendancesInput.schema';
import { userCreateOrConnectWithoutAttendancesInputObjectSchema as userCreateOrConnectWithoutAttendancesInputObjectSchema } from './userCreateOrConnectWithoutAttendancesInput.schema';
import { userUpsertWithoutAttendancesInputObjectSchema as userUpsertWithoutAttendancesInputObjectSchema } from './userUpsertWithoutAttendancesInput.schema';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';
import { userUpdateToOneWithWhereWithoutAttendancesInputObjectSchema as userUpdateToOneWithWhereWithoutAttendancesInputObjectSchema } from './userUpdateToOneWithWhereWithoutAttendancesInput.schema';
import { userUpdateWithoutAttendancesInputObjectSchema as userUpdateWithoutAttendancesInputObjectSchema } from './userUpdateWithoutAttendancesInput.schema';
import { userUncheckedUpdateWithoutAttendancesInputObjectSchema as userUncheckedUpdateWithoutAttendancesInputObjectSchema } from './userUncheckedUpdateWithoutAttendancesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => userCreateWithoutAttendancesInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutAttendancesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => userCreateOrConnectWithoutAttendancesInputObjectSchema).optional(),
  upsert: z.lazy(() => userUpsertWithoutAttendancesInputObjectSchema).optional(),
  connect: z.lazy(() => userWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => userUpdateToOneWithWhereWithoutAttendancesInputObjectSchema), z.lazy(() => userUpdateWithoutAttendancesInputObjectSchema), z.lazy(() => userUncheckedUpdateWithoutAttendancesInputObjectSchema)]).optional()
}).strict();
export const userUpdateOneRequiredWithoutAttendancesNestedInputObjectSchema: z.ZodType<Prisma.userUpdateOneRequiredWithoutAttendancesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.userUpdateOneRequiredWithoutAttendancesNestedInput>;
export const userUpdateOneRequiredWithoutAttendancesNestedInputObjectZodSchema = makeSchema();
