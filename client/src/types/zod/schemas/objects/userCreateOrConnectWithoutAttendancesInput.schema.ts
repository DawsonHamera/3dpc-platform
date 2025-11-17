import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';
import { userCreateWithoutAttendancesInputObjectSchema as userCreateWithoutAttendancesInputObjectSchema } from './userCreateWithoutAttendancesInput.schema';
import { userUncheckedCreateWithoutAttendancesInputObjectSchema as userUncheckedCreateWithoutAttendancesInputObjectSchema } from './userUncheckedCreateWithoutAttendancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => userWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => userCreateWithoutAttendancesInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutAttendancesInputObjectSchema)])
}).strict();
export const userCreateOrConnectWithoutAttendancesInputObjectSchema: z.ZodType<Prisma.userCreateOrConnectWithoutAttendancesInput> = makeSchema() as unknown as z.ZodType<Prisma.userCreateOrConnectWithoutAttendancesInput>;
export const userCreateOrConnectWithoutAttendancesInputObjectZodSchema = makeSchema();
