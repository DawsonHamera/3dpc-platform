import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventUpdateWithoutAttendancesInputObjectSchema as eventUpdateWithoutAttendancesInputObjectSchema } from './eventUpdateWithoutAttendancesInput.schema';
import { eventUncheckedUpdateWithoutAttendancesInputObjectSchema as eventUncheckedUpdateWithoutAttendancesInputObjectSchema } from './eventUncheckedUpdateWithoutAttendancesInput.schema';
import { eventCreateWithoutAttendancesInputObjectSchema as eventCreateWithoutAttendancesInputObjectSchema } from './eventCreateWithoutAttendancesInput.schema';
import { eventUncheckedCreateWithoutAttendancesInputObjectSchema as eventUncheckedCreateWithoutAttendancesInputObjectSchema } from './eventUncheckedCreateWithoutAttendancesInput.schema';
import { eventWhereInputObjectSchema as eventWhereInputObjectSchema } from './eventWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => eventUpdateWithoutAttendancesInputObjectSchema), z.lazy(() => eventUncheckedUpdateWithoutAttendancesInputObjectSchema)]),
  create: z.union([z.lazy(() => eventCreateWithoutAttendancesInputObjectSchema), z.lazy(() => eventUncheckedCreateWithoutAttendancesInputObjectSchema)]),
  where: z.lazy(() => eventWhereInputObjectSchema).optional()
}).strict();
export const eventUpsertWithoutAttendancesInputObjectSchema: z.ZodType<Prisma.eventUpsertWithoutAttendancesInput> = makeSchema() as unknown as z.ZodType<Prisma.eventUpsertWithoutAttendancesInput>;
export const eventUpsertWithoutAttendancesInputObjectZodSchema = makeSchema();
