import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsUpdateWithoutAttendancesInputObjectSchema as eventsUpdateWithoutAttendancesInputObjectSchema } from './eventsUpdateWithoutAttendancesInput.schema';
import { eventsUncheckedUpdateWithoutAttendancesInputObjectSchema as eventsUncheckedUpdateWithoutAttendancesInputObjectSchema } from './eventsUncheckedUpdateWithoutAttendancesInput.schema';
import { eventsCreateWithoutAttendancesInputObjectSchema as eventsCreateWithoutAttendancesInputObjectSchema } from './eventsCreateWithoutAttendancesInput.schema';
import { eventsUncheckedCreateWithoutAttendancesInputObjectSchema as eventsUncheckedCreateWithoutAttendancesInputObjectSchema } from './eventsUncheckedCreateWithoutAttendancesInput.schema';
import { eventsWhereInputObjectSchema as eventsWhereInputObjectSchema } from './eventsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => eventsUpdateWithoutAttendancesInputObjectSchema), z.lazy(() => eventsUncheckedUpdateWithoutAttendancesInputObjectSchema)]),
  create: z.union([z.lazy(() => eventsCreateWithoutAttendancesInputObjectSchema), z.lazy(() => eventsUncheckedCreateWithoutAttendancesInputObjectSchema)]),
  where: z.lazy(() => eventsWhereInputObjectSchema).optional()
}).strict();
export const eventsUpsertWithoutAttendancesInputObjectSchema: z.ZodType<Prisma.eventsUpsertWithoutAttendancesInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsUpsertWithoutAttendancesInput>;
export const eventsUpsertWithoutAttendancesInputObjectZodSchema = makeSchema();
