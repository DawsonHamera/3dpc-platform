import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsWhereUniqueInputObjectSchema as eventsWhereUniqueInputObjectSchema } from './eventsWhereUniqueInput.schema';
import { eventsCreateWithoutAttendancesInputObjectSchema as eventsCreateWithoutAttendancesInputObjectSchema } from './eventsCreateWithoutAttendancesInput.schema';
import { eventsUncheckedCreateWithoutAttendancesInputObjectSchema as eventsUncheckedCreateWithoutAttendancesInputObjectSchema } from './eventsUncheckedCreateWithoutAttendancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => eventsCreateWithoutAttendancesInputObjectSchema), z.lazy(() => eventsUncheckedCreateWithoutAttendancesInputObjectSchema)])
}).strict();
export const eventsCreateOrConnectWithoutAttendancesInputObjectSchema: z.ZodType<Prisma.eventsCreateOrConnectWithoutAttendancesInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsCreateOrConnectWithoutAttendancesInput>;
export const eventsCreateOrConnectWithoutAttendancesInputObjectZodSchema = makeSchema();
