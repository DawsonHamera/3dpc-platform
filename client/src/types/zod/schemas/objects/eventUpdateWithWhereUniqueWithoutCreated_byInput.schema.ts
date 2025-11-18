import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './eventWhereUniqueInput.schema';
import { eventUpdateWithoutCreated_byInputObjectSchema as eventUpdateWithoutCreated_byInputObjectSchema } from './eventUpdateWithoutCreated_byInput.schema';
import { eventUncheckedUpdateWithoutCreated_byInputObjectSchema as eventUncheckedUpdateWithoutCreated_byInputObjectSchema } from './eventUncheckedUpdateWithoutCreated_byInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => eventUpdateWithoutCreated_byInputObjectSchema), z.lazy(() => eventUncheckedUpdateWithoutCreated_byInputObjectSchema)])
}).strict();
export const eventUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.eventUpdateWithWhereUniqueWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.eventUpdateWithWhereUniqueWithoutCreated_byInput>;
export const eventUpdateWithWhereUniqueWithoutCreated_byInputObjectZodSchema = makeSchema();
