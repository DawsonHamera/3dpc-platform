import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventCreateWithoutUsersInputObjectSchema as eventCreateWithoutUsersInputObjectSchema } from './eventCreateWithoutUsersInput.schema';
import { eventUncheckedCreateWithoutUsersInputObjectSchema as eventUncheckedCreateWithoutUsersInputObjectSchema } from './eventUncheckedCreateWithoutUsersInput.schema';
import { eventCreateOrConnectWithoutUsersInputObjectSchema as eventCreateOrConnectWithoutUsersInputObjectSchema } from './eventCreateOrConnectWithoutUsersInput.schema';
import { eventCreateManyUsersInputEnvelopeObjectSchema as eventCreateManyUsersInputEnvelopeObjectSchema } from './eventCreateManyUsersInputEnvelope.schema';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './eventWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => eventCreateWithoutUsersInputObjectSchema), z.lazy(() => eventCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => eventUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => eventUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => eventCreateOrConnectWithoutUsersInputObjectSchema), z.lazy(() => eventCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => eventCreateManyUsersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => eventWhereUniqueInputObjectSchema), z.lazy(() => eventWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const eventUncheckedCreateNestedManyWithoutUsersInputObjectSchema: z.ZodType<Prisma.eventUncheckedCreateNestedManyWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.eventUncheckedCreateNestedManyWithoutUsersInput>;
export const eventUncheckedCreateNestedManyWithoutUsersInputObjectZodSchema = makeSchema();
