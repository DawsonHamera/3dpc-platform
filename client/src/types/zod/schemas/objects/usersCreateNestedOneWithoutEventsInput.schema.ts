import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateWithoutEventsInputObjectSchema as usersCreateWithoutEventsInputObjectSchema } from './usersCreateWithoutEventsInput.schema';
import { usersUncheckedCreateWithoutEventsInputObjectSchema as usersUncheckedCreateWithoutEventsInputObjectSchema } from './usersUncheckedCreateWithoutEventsInput.schema';
import { usersCreateOrConnectWithoutEventsInputObjectSchema as usersCreateOrConnectWithoutEventsInputObjectSchema } from './usersCreateOrConnectWithoutEventsInput.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => usersCreateWithoutEventsInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutEventsInputObjectSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional()
}).strict();
export const usersCreateNestedOneWithoutEventsInputObjectSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateNestedOneWithoutEventsInput>;
export const usersCreateNestedOneWithoutEventsInputObjectZodSchema = makeSchema();
