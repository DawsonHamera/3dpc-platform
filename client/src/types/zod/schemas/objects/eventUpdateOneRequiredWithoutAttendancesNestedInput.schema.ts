import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventCreateWithoutAttendancesInputObjectSchema as eventCreateWithoutAttendancesInputObjectSchema } from './eventCreateWithoutAttendancesInput.schema';
import { eventUncheckedCreateWithoutAttendancesInputObjectSchema as eventUncheckedCreateWithoutAttendancesInputObjectSchema } from './eventUncheckedCreateWithoutAttendancesInput.schema';
import { eventCreateOrConnectWithoutAttendancesInputObjectSchema as eventCreateOrConnectWithoutAttendancesInputObjectSchema } from './eventCreateOrConnectWithoutAttendancesInput.schema';
import { eventUpsertWithoutAttendancesInputObjectSchema as eventUpsertWithoutAttendancesInputObjectSchema } from './eventUpsertWithoutAttendancesInput.schema';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './eventWhereUniqueInput.schema';
import { eventUpdateToOneWithWhereWithoutAttendancesInputObjectSchema as eventUpdateToOneWithWhereWithoutAttendancesInputObjectSchema } from './eventUpdateToOneWithWhereWithoutAttendancesInput.schema';
import { eventUpdateWithoutAttendancesInputObjectSchema as eventUpdateWithoutAttendancesInputObjectSchema } from './eventUpdateWithoutAttendancesInput.schema';
import { eventUncheckedUpdateWithoutAttendancesInputObjectSchema as eventUncheckedUpdateWithoutAttendancesInputObjectSchema } from './eventUncheckedUpdateWithoutAttendancesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => eventCreateWithoutAttendancesInputObjectSchema), z.lazy(() => eventUncheckedCreateWithoutAttendancesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => eventCreateOrConnectWithoutAttendancesInputObjectSchema).optional(),
  upsert: z.lazy(() => eventUpsertWithoutAttendancesInputObjectSchema).optional(),
  connect: z.lazy(() => eventWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => eventUpdateToOneWithWhereWithoutAttendancesInputObjectSchema), z.lazy(() => eventUpdateWithoutAttendancesInputObjectSchema), z.lazy(() => eventUncheckedUpdateWithoutAttendancesInputObjectSchema)]).optional()
}).strict();
export const eventUpdateOneRequiredWithoutAttendancesNestedInputObjectSchema: z.ZodType<Prisma.eventUpdateOneRequiredWithoutAttendancesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.eventUpdateOneRequiredWithoutAttendancesNestedInput>;
export const eventUpdateOneRequiredWithoutAttendancesNestedInputObjectZodSchema = makeSchema();
