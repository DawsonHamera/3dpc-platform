import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventCreateWithoutCreated_byInputObjectSchema as eventCreateWithoutCreated_byInputObjectSchema } from './eventCreateWithoutCreated_byInput.schema';
import { eventUncheckedCreateWithoutCreated_byInputObjectSchema as eventUncheckedCreateWithoutCreated_byInputObjectSchema } from './eventUncheckedCreateWithoutCreated_byInput.schema';
import { eventCreateOrConnectWithoutCreated_byInputObjectSchema as eventCreateOrConnectWithoutCreated_byInputObjectSchema } from './eventCreateOrConnectWithoutCreated_byInput.schema';
import { eventCreateManyCreated_byInputEnvelopeObjectSchema as eventCreateManyCreated_byInputEnvelopeObjectSchema } from './eventCreateManyCreated_byInputEnvelope.schema';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './eventWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => eventCreateWithoutCreated_byInputObjectSchema), z.lazy(() => eventCreateWithoutCreated_byInputObjectSchema).array(), z.lazy(() => eventUncheckedCreateWithoutCreated_byInputObjectSchema), z.lazy(() => eventUncheckedCreateWithoutCreated_byInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => eventCreateOrConnectWithoutCreated_byInputObjectSchema), z.lazy(() => eventCreateOrConnectWithoutCreated_byInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => eventCreateManyCreated_byInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => eventWhereUniqueInputObjectSchema), z.lazy(() => eventWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const eventCreateNestedManyWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.eventCreateNestedManyWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.eventCreateNestedManyWithoutCreated_byInput>;
export const eventCreateNestedManyWithoutCreated_byInputObjectZodSchema = makeSchema();
