import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutAttendancesInputObjectSchema as usersCreateWithoutAttendancesInputObjectSchema } from './usersCreateWithoutAttendancesInput.schema';
import { usersUncheckedCreateWithoutAttendancesInputObjectSchema as usersUncheckedCreateWithoutAttendancesInputObjectSchema } from './usersUncheckedCreateWithoutAttendancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => usersCreateWithoutAttendancesInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutAttendancesInputObjectSchema)])
}).strict();
export const usersCreateOrConnectWithoutAttendancesInputObjectSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutAttendancesInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateOrConnectWithoutAttendancesInput>;
export const usersCreateOrConnectWithoutAttendancesInputObjectZodSchema = makeSchema();
