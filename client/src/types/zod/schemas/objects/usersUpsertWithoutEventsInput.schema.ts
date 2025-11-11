import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersUpdateWithoutEventsInputObjectSchema as usersUpdateWithoutEventsInputObjectSchema } from './usersUpdateWithoutEventsInput.schema';
import { usersUncheckedUpdateWithoutEventsInputObjectSchema as usersUncheckedUpdateWithoutEventsInputObjectSchema } from './usersUncheckedUpdateWithoutEventsInput.schema';
import { usersCreateWithoutEventsInputObjectSchema as usersCreateWithoutEventsInputObjectSchema } from './usersCreateWithoutEventsInput.schema';
import { usersUncheckedCreateWithoutEventsInputObjectSchema as usersUncheckedCreateWithoutEventsInputObjectSchema } from './usersUncheckedCreateWithoutEventsInput.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => usersUpdateWithoutEventsInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutEventsInputObjectSchema)]),
  create: z.union([z.lazy(() => usersCreateWithoutEventsInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutEventsInputObjectSchema)]),
  where: z.lazy(() => usersWhereInputObjectSchema).optional()
}).strict();
export const usersUpsertWithoutEventsInputObjectSchema: z.ZodType<Prisma.usersUpsertWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpsertWithoutEventsInput>;
export const usersUpsertWithoutEventsInputObjectZodSchema = makeSchema();
