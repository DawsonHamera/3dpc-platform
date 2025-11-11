import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsWhereUniqueInputObjectSchema as eventsWhereUniqueInputObjectSchema } from './eventsWhereUniqueInput.schema';
import { eventsUpdateWithoutUsersInputObjectSchema as eventsUpdateWithoutUsersInputObjectSchema } from './eventsUpdateWithoutUsersInput.schema';
import { eventsUncheckedUpdateWithoutUsersInputObjectSchema as eventsUncheckedUpdateWithoutUsersInputObjectSchema } from './eventsUncheckedUpdateWithoutUsersInput.schema';
import { eventsCreateWithoutUsersInputObjectSchema as eventsCreateWithoutUsersInputObjectSchema } from './eventsCreateWithoutUsersInput.schema';
import { eventsUncheckedCreateWithoutUsersInputObjectSchema as eventsUncheckedCreateWithoutUsersInputObjectSchema } from './eventsUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => eventsUpdateWithoutUsersInputObjectSchema), z.lazy(() => eventsUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => eventsCreateWithoutUsersInputObjectSchema), z.lazy(() => eventsUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const eventsUpsertWithWhereUniqueWithoutUsersInputObjectSchema: z.ZodType<Prisma.eventsUpsertWithWhereUniqueWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsUpsertWithWhereUniqueWithoutUsersInput>;
export const eventsUpsertWithWhereUniqueWithoutUsersInputObjectZodSchema = makeSchema();
