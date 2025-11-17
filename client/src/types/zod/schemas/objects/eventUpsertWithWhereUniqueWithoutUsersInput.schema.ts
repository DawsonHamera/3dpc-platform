import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './eventWhereUniqueInput.schema';
import { eventUpdateWithoutUsersInputObjectSchema as eventUpdateWithoutUsersInputObjectSchema } from './eventUpdateWithoutUsersInput.schema';
import { eventUncheckedUpdateWithoutUsersInputObjectSchema as eventUncheckedUpdateWithoutUsersInputObjectSchema } from './eventUncheckedUpdateWithoutUsersInput.schema';
import { eventCreateWithoutUsersInputObjectSchema as eventCreateWithoutUsersInputObjectSchema } from './eventCreateWithoutUsersInput.schema';
import { eventUncheckedCreateWithoutUsersInputObjectSchema as eventUncheckedCreateWithoutUsersInputObjectSchema } from './eventUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => eventUpdateWithoutUsersInputObjectSchema), z.lazy(() => eventUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => eventCreateWithoutUsersInputObjectSchema), z.lazy(() => eventUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const eventUpsertWithWhereUniqueWithoutUsersInputObjectSchema: z.ZodType<Prisma.eventUpsertWithWhereUniqueWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.eventUpsertWithWhereUniqueWithoutUsersInput>;
export const eventUpsertWithWhereUniqueWithoutUsersInputObjectZodSchema = makeSchema();
