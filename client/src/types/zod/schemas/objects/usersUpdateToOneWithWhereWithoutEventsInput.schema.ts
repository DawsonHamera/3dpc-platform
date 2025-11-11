import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema';
import { usersUpdateWithoutEventsInputObjectSchema as usersUpdateWithoutEventsInputObjectSchema } from './usersUpdateWithoutEventsInput.schema';
import { usersUncheckedUpdateWithoutEventsInputObjectSchema as usersUncheckedUpdateWithoutEventsInputObjectSchema } from './usersUncheckedUpdateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => usersUpdateWithoutEventsInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutEventsInputObjectSchema)])
}).strict();
export const usersUpdateToOneWithWhereWithoutEventsInputObjectSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutEventsInput>;
export const usersUpdateToOneWithWhereWithoutEventsInputObjectZodSchema = makeSchema();
