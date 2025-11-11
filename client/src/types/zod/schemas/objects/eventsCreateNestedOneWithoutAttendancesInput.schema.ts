import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsCreateWithoutAttendancesInputObjectSchema as eventsCreateWithoutAttendancesInputObjectSchema } from './eventsCreateWithoutAttendancesInput.schema';
import { eventsUncheckedCreateWithoutAttendancesInputObjectSchema as eventsUncheckedCreateWithoutAttendancesInputObjectSchema } from './eventsUncheckedCreateWithoutAttendancesInput.schema';
import { eventsCreateOrConnectWithoutAttendancesInputObjectSchema as eventsCreateOrConnectWithoutAttendancesInputObjectSchema } from './eventsCreateOrConnectWithoutAttendancesInput.schema';
import { eventsWhereUniqueInputObjectSchema as eventsWhereUniqueInputObjectSchema } from './eventsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => eventsCreateWithoutAttendancesInputObjectSchema), z.lazy(() => eventsUncheckedCreateWithoutAttendancesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => eventsCreateOrConnectWithoutAttendancesInputObjectSchema).optional(),
  connect: z.lazy(() => eventsWhereUniqueInputObjectSchema).optional()
}).strict();
export const eventsCreateNestedOneWithoutAttendancesInputObjectSchema: z.ZodType<Prisma.eventsCreateNestedOneWithoutAttendancesInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsCreateNestedOneWithoutAttendancesInput>;
export const eventsCreateNestedOneWithoutAttendancesInputObjectZodSchema = makeSchema();
