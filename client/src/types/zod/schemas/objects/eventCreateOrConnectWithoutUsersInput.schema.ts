import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './eventWhereUniqueInput.schema';
import { eventCreateWithoutUsersInputObjectSchema as eventCreateWithoutUsersInputObjectSchema } from './eventCreateWithoutUsersInput.schema';
import { eventUncheckedCreateWithoutUsersInputObjectSchema as eventUncheckedCreateWithoutUsersInputObjectSchema } from './eventUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => eventCreateWithoutUsersInputObjectSchema), z.lazy(() => eventUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const eventCreateOrConnectWithoutUsersInputObjectSchema: z.ZodType<Prisma.eventCreateOrConnectWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.eventCreateOrConnectWithoutUsersInput>;
export const eventCreateOrConnectWithoutUsersInputObjectZodSchema = makeSchema();
