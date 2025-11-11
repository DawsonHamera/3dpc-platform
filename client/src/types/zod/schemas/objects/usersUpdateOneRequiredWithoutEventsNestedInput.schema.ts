import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateWithoutEventsInputObjectSchema as usersCreateWithoutEventsInputObjectSchema } from './usersCreateWithoutEventsInput.schema';
import { usersUncheckedCreateWithoutEventsInputObjectSchema as usersUncheckedCreateWithoutEventsInputObjectSchema } from './usersUncheckedCreateWithoutEventsInput.schema';
import { usersCreateOrConnectWithoutEventsInputObjectSchema as usersCreateOrConnectWithoutEventsInputObjectSchema } from './usersCreateOrConnectWithoutEventsInput.schema';
import { usersUpsertWithoutEventsInputObjectSchema as usersUpsertWithoutEventsInputObjectSchema } from './usersUpsertWithoutEventsInput.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateToOneWithWhereWithoutEventsInputObjectSchema as usersUpdateToOneWithWhereWithoutEventsInputObjectSchema } from './usersUpdateToOneWithWhereWithoutEventsInput.schema';
import { usersUpdateWithoutEventsInputObjectSchema as usersUpdateWithoutEventsInputObjectSchema } from './usersUpdateWithoutEventsInput.schema';
import { usersUncheckedUpdateWithoutEventsInputObjectSchema as usersUncheckedUpdateWithoutEventsInputObjectSchema } from './usersUncheckedUpdateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => usersCreateWithoutEventsInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutEventsInputObjectSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutEventsInputObjectSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => usersUpdateToOneWithWhereWithoutEventsInputObjectSchema), z.lazy(() => usersUpdateWithoutEventsInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutEventsInputObjectSchema)]).optional()
}).strict();
export const usersUpdateOneRequiredWithoutEventsNestedInputObjectSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutEventsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateOneRequiredWithoutEventsNestedInput>;
export const usersUpdateOneRequiredWithoutEventsNestedInputObjectZodSchema = makeSchema();
