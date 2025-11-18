import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './eventWhereUniqueInput.schema';
import { eventCreateWithoutCreated_byInputObjectSchema as eventCreateWithoutCreated_byInputObjectSchema } from './eventCreateWithoutCreated_byInput.schema';
import { eventUncheckedCreateWithoutCreated_byInputObjectSchema as eventUncheckedCreateWithoutCreated_byInputObjectSchema } from './eventUncheckedCreateWithoutCreated_byInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => eventCreateWithoutCreated_byInputObjectSchema), z.lazy(() => eventUncheckedCreateWithoutCreated_byInputObjectSchema)])
}).strict();
export const eventCreateOrConnectWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.eventCreateOrConnectWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.eventCreateOrConnectWithoutCreated_byInput>;
export const eventCreateOrConnectWithoutCreated_byInputObjectZodSchema = makeSchema();
