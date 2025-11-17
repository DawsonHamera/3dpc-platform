import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userCreateWithoutEventsInputObjectSchema as userCreateWithoutEventsInputObjectSchema } from './userCreateWithoutEventsInput.schema';
import { userUncheckedCreateWithoutEventsInputObjectSchema as userUncheckedCreateWithoutEventsInputObjectSchema } from './userUncheckedCreateWithoutEventsInput.schema';
import { userCreateOrConnectWithoutEventsInputObjectSchema as userCreateOrConnectWithoutEventsInputObjectSchema } from './userCreateOrConnectWithoutEventsInput.schema';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => userCreateWithoutEventsInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => userCreateOrConnectWithoutEventsInputObjectSchema).optional(),
  connect: z.lazy(() => userWhereUniqueInputObjectSchema).optional()
}).strict();
export const userCreateNestedOneWithoutEventsInputObjectSchema: z.ZodType<Prisma.userCreateNestedOneWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.userCreateNestedOneWithoutEventsInput>;
export const userCreateNestedOneWithoutEventsInputObjectZodSchema = makeSchema();
