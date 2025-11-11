import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsWhereInputObjectSchema as eventsWhereInputObjectSchema } from './eventsWhereInput.schema';
import { eventsUpdateWithoutAttendancesInputObjectSchema as eventsUpdateWithoutAttendancesInputObjectSchema } from './eventsUpdateWithoutAttendancesInput.schema';
import { eventsUncheckedUpdateWithoutAttendancesInputObjectSchema as eventsUncheckedUpdateWithoutAttendancesInputObjectSchema } from './eventsUncheckedUpdateWithoutAttendancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => eventsUpdateWithoutAttendancesInputObjectSchema), z.lazy(() => eventsUncheckedUpdateWithoutAttendancesInputObjectSchema)])
}).strict();
export const eventsUpdateToOneWithWhereWithoutAttendancesInputObjectSchema: z.ZodType<Prisma.eventsUpdateToOneWithWhereWithoutAttendancesInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsUpdateToOneWithWhereWithoutAttendancesInput>;
export const eventsUpdateToOneWithWhereWithoutAttendancesInputObjectZodSchema = makeSchema();
