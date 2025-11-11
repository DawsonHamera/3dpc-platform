import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsWhereUniqueInputObjectSchema as eventsWhereUniqueInputObjectSchema } from './eventsWhereUniqueInput.schema';
import { eventsCreateWithoutUsersInputObjectSchema as eventsCreateWithoutUsersInputObjectSchema } from './eventsCreateWithoutUsersInput.schema';
import { eventsUncheckedCreateWithoutUsersInputObjectSchema as eventsUncheckedCreateWithoutUsersInputObjectSchema } from './eventsUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => eventsCreateWithoutUsersInputObjectSchema), z.lazy(() => eventsUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const eventsCreateOrConnectWithoutUsersInputObjectSchema: z.ZodType<Prisma.eventsCreateOrConnectWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsCreateOrConnectWithoutUsersInput>;
export const eventsCreateOrConnectWithoutUsersInputObjectZodSchema = makeSchema();
