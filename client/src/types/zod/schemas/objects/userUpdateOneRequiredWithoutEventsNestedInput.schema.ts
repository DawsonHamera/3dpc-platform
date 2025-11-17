import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userCreateWithoutEventsInputObjectSchema as userCreateWithoutEventsInputObjectSchema } from './userCreateWithoutEventsInput.schema';
import { userUncheckedCreateWithoutEventsInputObjectSchema as userUncheckedCreateWithoutEventsInputObjectSchema } from './userUncheckedCreateWithoutEventsInput.schema';
import { userCreateOrConnectWithoutEventsInputObjectSchema as userCreateOrConnectWithoutEventsInputObjectSchema } from './userCreateOrConnectWithoutEventsInput.schema';
import { userUpsertWithoutEventsInputObjectSchema as userUpsertWithoutEventsInputObjectSchema } from './userUpsertWithoutEventsInput.schema';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';
import { userUpdateToOneWithWhereWithoutEventsInputObjectSchema as userUpdateToOneWithWhereWithoutEventsInputObjectSchema } from './userUpdateToOneWithWhereWithoutEventsInput.schema';
import { userUpdateWithoutEventsInputObjectSchema as userUpdateWithoutEventsInputObjectSchema } from './userUpdateWithoutEventsInput.schema';
import { userUncheckedUpdateWithoutEventsInputObjectSchema as userUncheckedUpdateWithoutEventsInputObjectSchema } from './userUncheckedUpdateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => userCreateWithoutEventsInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => userCreateOrConnectWithoutEventsInputObjectSchema).optional(),
  upsert: z.lazy(() => userUpsertWithoutEventsInputObjectSchema).optional(),
  connect: z.lazy(() => userWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => userUpdateToOneWithWhereWithoutEventsInputObjectSchema), z.lazy(() => userUpdateWithoutEventsInputObjectSchema), z.lazy(() => userUncheckedUpdateWithoutEventsInputObjectSchema)]).optional()
}).strict();
export const userUpdateOneRequiredWithoutEventsNestedInputObjectSchema: z.ZodType<Prisma.userUpdateOneRequiredWithoutEventsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.userUpdateOneRequiredWithoutEventsNestedInput>;
export const userUpdateOneRequiredWithoutEventsNestedInputObjectZodSchema = makeSchema();
