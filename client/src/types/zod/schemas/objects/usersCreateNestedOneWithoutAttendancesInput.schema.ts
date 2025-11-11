import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateWithoutAttendancesInputObjectSchema as usersCreateWithoutAttendancesInputObjectSchema } from './usersCreateWithoutAttendancesInput.schema';
import { usersUncheckedCreateWithoutAttendancesInputObjectSchema as usersUncheckedCreateWithoutAttendancesInputObjectSchema } from './usersUncheckedCreateWithoutAttendancesInput.schema';
import { usersCreateOrConnectWithoutAttendancesInputObjectSchema as usersCreateOrConnectWithoutAttendancesInputObjectSchema } from './usersCreateOrConnectWithoutAttendancesInput.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => usersCreateWithoutAttendancesInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutAttendancesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutAttendancesInputObjectSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional()
}).strict();
export const usersCreateNestedOneWithoutAttendancesInputObjectSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutAttendancesInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateNestedOneWithoutAttendancesInput>;
export const usersCreateNestedOneWithoutAttendancesInputObjectZodSchema = makeSchema();
