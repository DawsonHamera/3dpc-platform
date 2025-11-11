import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsCreateWithoutAttendancesInputObjectSchema as eventsCreateWithoutAttendancesInputObjectSchema } from './eventsCreateWithoutAttendancesInput.schema';
import { eventsUncheckedCreateWithoutAttendancesInputObjectSchema as eventsUncheckedCreateWithoutAttendancesInputObjectSchema } from './eventsUncheckedCreateWithoutAttendancesInput.schema';
import { eventsCreateOrConnectWithoutAttendancesInputObjectSchema as eventsCreateOrConnectWithoutAttendancesInputObjectSchema } from './eventsCreateOrConnectWithoutAttendancesInput.schema';
import { eventsUpsertWithoutAttendancesInputObjectSchema as eventsUpsertWithoutAttendancesInputObjectSchema } from './eventsUpsertWithoutAttendancesInput.schema';
import { eventsWhereUniqueInputObjectSchema as eventsWhereUniqueInputObjectSchema } from './eventsWhereUniqueInput.schema';
import { eventsUpdateToOneWithWhereWithoutAttendancesInputObjectSchema as eventsUpdateToOneWithWhereWithoutAttendancesInputObjectSchema } from './eventsUpdateToOneWithWhereWithoutAttendancesInput.schema';
import { eventsUpdateWithoutAttendancesInputObjectSchema as eventsUpdateWithoutAttendancesInputObjectSchema } from './eventsUpdateWithoutAttendancesInput.schema';
import { eventsUncheckedUpdateWithoutAttendancesInputObjectSchema as eventsUncheckedUpdateWithoutAttendancesInputObjectSchema } from './eventsUncheckedUpdateWithoutAttendancesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => eventsCreateWithoutAttendancesInputObjectSchema), z.lazy(() => eventsUncheckedCreateWithoutAttendancesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => eventsCreateOrConnectWithoutAttendancesInputObjectSchema).optional(),
  upsert: z.lazy(() => eventsUpsertWithoutAttendancesInputObjectSchema).optional(),
  connect: z.lazy(() => eventsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => eventsUpdateToOneWithWhereWithoutAttendancesInputObjectSchema), z.lazy(() => eventsUpdateWithoutAttendancesInputObjectSchema), z.lazy(() => eventsUncheckedUpdateWithoutAttendancesInputObjectSchema)]).optional()
}).strict();
export const eventsUpdateOneRequiredWithoutAttendancesNestedInputObjectSchema: z.ZodType<Prisma.eventsUpdateOneRequiredWithoutAttendancesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsUpdateOneRequiredWithoutAttendancesNestedInput>;
export const eventsUpdateOneRequiredWithoutAttendancesNestedInputObjectZodSchema = makeSchema();
