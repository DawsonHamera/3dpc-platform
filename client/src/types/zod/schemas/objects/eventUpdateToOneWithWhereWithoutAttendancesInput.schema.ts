import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventWhereInputObjectSchema as eventWhereInputObjectSchema } from './eventWhereInput.schema';
import { eventUpdateWithoutAttendancesInputObjectSchema as eventUpdateWithoutAttendancesInputObjectSchema } from './eventUpdateWithoutAttendancesInput.schema';
import { eventUncheckedUpdateWithoutAttendancesInputObjectSchema as eventUncheckedUpdateWithoutAttendancesInputObjectSchema } from './eventUncheckedUpdateWithoutAttendancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => eventUpdateWithoutAttendancesInputObjectSchema), z.lazy(() => eventUncheckedUpdateWithoutAttendancesInputObjectSchema)])
}).strict();
export const eventUpdateToOneWithWhereWithoutAttendancesInputObjectSchema: z.ZodType<Prisma.eventUpdateToOneWithWhereWithoutAttendancesInput> = makeSchema() as unknown as z.ZodType<Prisma.eventUpdateToOneWithWhereWithoutAttendancesInput>;
export const eventUpdateToOneWithWhereWithoutAttendancesInputObjectZodSchema = makeSchema();
