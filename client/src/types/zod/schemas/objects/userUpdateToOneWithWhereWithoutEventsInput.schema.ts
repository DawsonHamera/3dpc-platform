import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userWhereInputObjectSchema as userWhereInputObjectSchema } from './userWhereInput.schema';
import { userUpdateWithoutEventsInputObjectSchema as userUpdateWithoutEventsInputObjectSchema } from './userUpdateWithoutEventsInput.schema';
import { userUncheckedUpdateWithoutEventsInputObjectSchema as userUncheckedUpdateWithoutEventsInputObjectSchema } from './userUncheckedUpdateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => userWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => userUpdateWithoutEventsInputObjectSchema), z.lazy(() => userUncheckedUpdateWithoutEventsInputObjectSchema)])
}).strict();
export const userUpdateToOneWithWhereWithoutEventsInputObjectSchema: z.ZodType<Prisma.userUpdateToOneWithWhereWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.userUpdateToOneWithWhereWithoutEventsInput>;
export const userUpdateToOneWithWhereWithoutEventsInputObjectZodSchema = makeSchema();
