import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutEventsInputObjectSchema as usersCreateWithoutEventsInputObjectSchema } from './usersCreateWithoutEventsInput.schema';
import { usersUncheckedCreateWithoutEventsInputObjectSchema as usersUncheckedCreateWithoutEventsInputObjectSchema } from './usersUncheckedCreateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => usersCreateWithoutEventsInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutEventsInputObjectSchema)])
}).strict();
export const usersCreateOrConnectWithoutEventsInputObjectSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateOrConnectWithoutEventsInput>;
export const usersCreateOrConnectWithoutEventsInputObjectZodSchema = makeSchema();
