import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateWithoutAttendancesInputObjectSchema as usersCreateWithoutAttendancesInputObjectSchema } from './usersCreateWithoutAttendancesInput.schema';
import { usersUncheckedCreateWithoutAttendancesInputObjectSchema as usersUncheckedCreateWithoutAttendancesInputObjectSchema } from './usersUncheckedCreateWithoutAttendancesInput.schema';
import { usersCreateOrConnectWithoutAttendancesInputObjectSchema as usersCreateOrConnectWithoutAttendancesInputObjectSchema } from './usersCreateOrConnectWithoutAttendancesInput.schema';
import { usersUpsertWithoutAttendancesInputObjectSchema as usersUpsertWithoutAttendancesInputObjectSchema } from './usersUpsertWithoutAttendancesInput.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateToOneWithWhereWithoutAttendancesInputObjectSchema as usersUpdateToOneWithWhereWithoutAttendancesInputObjectSchema } from './usersUpdateToOneWithWhereWithoutAttendancesInput.schema';
import { usersUpdateWithoutAttendancesInputObjectSchema as usersUpdateWithoutAttendancesInputObjectSchema } from './usersUpdateWithoutAttendancesInput.schema';
import { usersUncheckedUpdateWithoutAttendancesInputObjectSchema as usersUncheckedUpdateWithoutAttendancesInputObjectSchema } from './usersUncheckedUpdateWithoutAttendancesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => usersCreateWithoutAttendancesInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutAttendancesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutAttendancesInputObjectSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutAttendancesInputObjectSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => usersUpdateToOneWithWhereWithoutAttendancesInputObjectSchema), z.lazy(() => usersUpdateWithoutAttendancesInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutAttendancesInputObjectSchema)]).optional()
}).strict();
export const usersUpdateOneRequiredWithoutAttendancesNestedInputObjectSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutAttendancesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateOneRequiredWithoutAttendancesNestedInput>;
export const usersUpdateOneRequiredWithoutAttendancesNestedInputObjectZodSchema = makeSchema();
