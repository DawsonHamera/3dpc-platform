import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userUpdateWithoutEventsInputObjectSchema as userUpdateWithoutEventsInputObjectSchema } from './userUpdateWithoutEventsInput.schema';
import { userUncheckedUpdateWithoutEventsInputObjectSchema as userUncheckedUpdateWithoutEventsInputObjectSchema } from './userUncheckedUpdateWithoutEventsInput.schema';
import { userCreateWithoutEventsInputObjectSchema as userCreateWithoutEventsInputObjectSchema } from './userCreateWithoutEventsInput.schema';
import { userUncheckedCreateWithoutEventsInputObjectSchema as userUncheckedCreateWithoutEventsInputObjectSchema } from './userUncheckedCreateWithoutEventsInput.schema';
import { userWhereInputObjectSchema as userWhereInputObjectSchema } from './userWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => userUpdateWithoutEventsInputObjectSchema), z.lazy(() => userUncheckedUpdateWithoutEventsInputObjectSchema)]),
  create: z.union([z.lazy(() => userCreateWithoutEventsInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutEventsInputObjectSchema)]),
  where: z.lazy(() => userWhereInputObjectSchema).optional()
}).strict();
export const userUpsertWithoutEventsInputObjectSchema: z.ZodType<Prisma.userUpsertWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.userUpsertWithoutEventsInput>;
export const userUpsertWithoutEventsInputObjectZodSchema = makeSchema();
