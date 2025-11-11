import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsCreateWithoutUsersInputObjectSchema as eventsCreateWithoutUsersInputObjectSchema } from './eventsCreateWithoutUsersInput.schema';
import { eventsUncheckedCreateWithoutUsersInputObjectSchema as eventsUncheckedCreateWithoutUsersInputObjectSchema } from './eventsUncheckedCreateWithoutUsersInput.schema';
import { eventsCreateOrConnectWithoutUsersInputObjectSchema as eventsCreateOrConnectWithoutUsersInputObjectSchema } from './eventsCreateOrConnectWithoutUsersInput.schema';
import { eventsCreateManyUsersInputEnvelopeObjectSchema as eventsCreateManyUsersInputEnvelopeObjectSchema } from './eventsCreateManyUsersInputEnvelope.schema';
import { eventsWhereUniqueInputObjectSchema as eventsWhereUniqueInputObjectSchema } from './eventsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => eventsCreateWithoutUsersInputObjectSchema), z.lazy(() => eventsCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => eventsUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => eventsUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => eventsCreateOrConnectWithoutUsersInputObjectSchema), z.lazy(() => eventsCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => eventsCreateManyUsersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => eventsWhereUniqueInputObjectSchema), z.lazy(() => eventsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const eventsCreateNestedManyWithoutUsersInputObjectSchema: z.ZodType<Prisma.eventsCreateNestedManyWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsCreateNestedManyWithoutUsersInput>;
export const eventsCreateNestedManyWithoutUsersInputObjectZodSchema = makeSchema();
