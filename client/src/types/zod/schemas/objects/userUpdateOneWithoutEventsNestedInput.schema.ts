import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userCreateWithoutEventsInputObjectSchema as userCreateWithoutEventsInputObjectSchema } from './userCreateWithoutEventsInput.schema';
import { userUncheckedCreateWithoutEventsInputObjectSchema as userUncheckedCreateWithoutEventsInputObjectSchema } from './userUncheckedCreateWithoutEventsInput.schema';
import { userCreateOrConnectWithoutEventsInputObjectSchema as userCreateOrConnectWithoutEventsInputObjectSchema } from './userCreateOrConnectWithoutEventsInput.schema';
import { userUpsertWithoutEventsInputObjectSchema as userUpsertWithoutEventsInputObjectSchema } from './userUpsertWithoutEventsInput.schema';
import { userWhereInputObjectSchema as userWhereInputObjectSchema } from './userWhereInput.schema';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';
import { userUpdateToOneWithWhereWithoutEventsInputObjectSchema as userUpdateToOneWithWhereWithoutEventsInputObjectSchema } from './userUpdateToOneWithWhereWithoutEventsInput.schema';
import { userUpdateWithoutEventsInputObjectSchema as userUpdateWithoutEventsInputObjectSchema } from './userUpdateWithoutEventsInput.schema';
import { userUncheckedUpdateWithoutEventsInputObjectSchema as userUncheckedUpdateWithoutEventsInputObjectSchema } from './userUncheckedUpdateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => userCreateWithoutEventsInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => userCreateOrConnectWithoutEventsInputObjectSchema).optional(),
  upsert: z.lazy(() => userUpsertWithoutEventsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => userWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => userWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => userWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => userUpdateToOneWithWhereWithoutEventsInputObjectSchema), z.lazy(() => userUpdateWithoutEventsInputObjectSchema), z.lazy(() => userUncheckedUpdateWithoutEventsInputObjectSchema)]).optional()
}).strict();
export const userUpdateOneWithoutEventsNestedInputObjectSchema: z.ZodType<Prisma.userUpdateOneWithoutEventsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.userUpdateOneWithoutEventsNestedInput>;
export const userUpdateOneWithoutEventsNestedInputObjectZodSchema = makeSchema();
