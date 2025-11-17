import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './eventWhereUniqueInput.schema';
import { eventCreateWithoutAttendancesInputObjectSchema as eventCreateWithoutAttendancesInputObjectSchema } from './eventCreateWithoutAttendancesInput.schema';
import { eventUncheckedCreateWithoutAttendancesInputObjectSchema as eventUncheckedCreateWithoutAttendancesInputObjectSchema } from './eventUncheckedCreateWithoutAttendancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => eventCreateWithoutAttendancesInputObjectSchema), z.lazy(() => eventUncheckedCreateWithoutAttendancesInputObjectSchema)])
}).strict();
export const eventCreateOrConnectWithoutAttendancesInputObjectSchema: z.ZodType<Prisma.eventCreateOrConnectWithoutAttendancesInput> = makeSchema() as unknown as z.ZodType<Prisma.eventCreateOrConnectWithoutAttendancesInput>;
export const eventCreateOrConnectWithoutAttendancesInputObjectZodSchema = makeSchema();
