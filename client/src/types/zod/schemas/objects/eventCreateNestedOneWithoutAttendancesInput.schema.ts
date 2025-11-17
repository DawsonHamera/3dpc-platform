import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventCreateWithoutAttendancesInputObjectSchema as eventCreateWithoutAttendancesInputObjectSchema } from './eventCreateWithoutAttendancesInput.schema';
import { eventUncheckedCreateWithoutAttendancesInputObjectSchema as eventUncheckedCreateWithoutAttendancesInputObjectSchema } from './eventUncheckedCreateWithoutAttendancesInput.schema';
import { eventCreateOrConnectWithoutAttendancesInputObjectSchema as eventCreateOrConnectWithoutAttendancesInputObjectSchema } from './eventCreateOrConnectWithoutAttendancesInput.schema';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './eventWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => eventCreateWithoutAttendancesInputObjectSchema), z.lazy(() => eventUncheckedCreateWithoutAttendancesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => eventCreateOrConnectWithoutAttendancesInputObjectSchema).optional(),
  connect: z.lazy(() => eventWhereUniqueInputObjectSchema).optional()
}).strict();
export const eventCreateNestedOneWithoutAttendancesInputObjectSchema: z.ZodType<Prisma.eventCreateNestedOneWithoutAttendancesInput> = makeSchema() as unknown as z.ZodType<Prisma.eventCreateNestedOneWithoutAttendancesInput>;
export const eventCreateNestedOneWithoutAttendancesInputObjectZodSchema = makeSchema();
