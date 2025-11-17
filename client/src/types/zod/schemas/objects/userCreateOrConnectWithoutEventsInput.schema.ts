import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';
import { userCreateWithoutEventsInputObjectSchema as userCreateWithoutEventsInputObjectSchema } from './userCreateWithoutEventsInput.schema';
import { userUncheckedCreateWithoutEventsInputObjectSchema as userUncheckedCreateWithoutEventsInputObjectSchema } from './userUncheckedCreateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => userWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => userCreateWithoutEventsInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutEventsInputObjectSchema)])
}).strict();
export const userCreateOrConnectWithoutEventsInputObjectSchema: z.ZodType<Prisma.userCreateOrConnectWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.userCreateOrConnectWithoutEventsInput>;
export const userCreateOrConnectWithoutEventsInputObjectZodSchema = makeSchema();
