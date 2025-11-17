import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userCreateWithoutAttendancesInputObjectSchema as userCreateWithoutAttendancesInputObjectSchema } from './userCreateWithoutAttendancesInput.schema';
import { userUncheckedCreateWithoutAttendancesInputObjectSchema as userUncheckedCreateWithoutAttendancesInputObjectSchema } from './userUncheckedCreateWithoutAttendancesInput.schema';
import { userCreateOrConnectWithoutAttendancesInputObjectSchema as userCreateOrConnectWithoutAttendancesInputObjectSchema } from './userCreateOrConnectWithoutAttendancesInput.schema';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => userCreateWithoutAttendancesInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutAttendancesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => userCreateOrConnectWithoutAttendancesInputObjectSchema).optional(),
  connect: z.lazy(() => userWhereUniqueInputObjectSchema).optional()
}).strict();
export const userCreateNestedOneWithoutAttendancesInputObjectSchema: z.ZodType<Prisma.userCreateNestedOneWithoutAttendancesInput> = makeSchema() as unknown as z.ZodType<Prisma.userCreateNestedOneWithoutAttendancesInput>;
export const userCreateNestedOneWithoutAttendancesInputObjectZodSchema = makeSchema();
