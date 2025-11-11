import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsWhereUniqueInputObjectSchema as eventsWhereUniqueInputObjectSchema } from './eventsWhereUniqueInput.schema';
import { eventsUpdateWithoutUsersInputObjectSchema as eventsUpdateWithoutUsersInputObjectSchema } from './eventsUpdateWithoutUsersInput.schema';
import { eventsUncheckedUpdateWithoutUsersInputObjectSchema as eventsUncheckedUpdateWithoutUsersInputObjectSchema } from './eventsUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => eventsUpdateWithoutUsersInputObjectSchema), z.lazy(() => eventsUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
export const eventsUpdateWithWhereUniqueWithoutUsersInputObjectSchema: z.ZodType<Prisma.eventsUpdateWithWhereUniqueWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsUpdateWithWhereUniqueWithoutUsersInput>;
export const eventsUpdateWithWhereUniqueWithoutUsersInputObjectZodSchema = makeSchema();
