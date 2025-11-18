import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './eventWhereUniqueInput.schema';
import { eventUpdateWithoutCreated_byInputObjectSchema as eventUpdateWithoutCreated_byInputObjectSchema } from './eventUpdateWithoutCreated_byInput.schema';
import { eventUncheckedUpdateWithoutCreated_byInputObjectSchema as eventUncheckedUpdateWithoutCreated_byInputObjectSchema } from './eventUncheckedUpdateWithoutCreated_byInput.schema';
import { eventCreateWithoutCreated_byInputObjectSchema as eventCreateWithoutCreated_byInputObjectSchema } from './eventCreateWithoutCreated_byInput.schema';
import { eventUncheckedCreateWithoutCreated_byInputObjectSchema as eventUncheckedCreateWithoutCreated_byInputObjectSchema } from './eventUncheckedCreateWithoutCreated_byInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => eventUpdateWithoutCreated_byInputObjectSchema), z.lazy(() => eventUncheckedUpdateWithoutCreated_byInputObjectSchema)]),
  create: z.union([z.lazy(() => eventCreateWithoutCreated_byInputObjectSchema), z.lazy(() => eventUncheckedCreateWithoutCreated_byInputObjectSchema)])
}).strict();
export const eventUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.eventUpsertWithWhereUniqueWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.eventUpsertWithWhereUniqueWithoutCreated_byInput>;
export const eventUpsertWithWhereUniqueWithoutCreated_byInputObjectZodSchema = makeSchema();
