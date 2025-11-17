import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './eventWhereUniqueInput.schema';
import { eventUpdateWithoutUsersInputObjectSchema as eventUpdateWithoutUsersInputObjectSchema } from './eventUpdateWithoutUsersInput.schema';
import { eventUncheckedUpdateWithoutUsersInputObjectSchema as eventUncheckedUpdateWithoutUsersInputObjectSchema } from './eventUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => eventUpdateWithoutUsersInputObjectSchema), z.lazy(() => eventUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
export const eventUpdateWithWhereUniqueWithoutUsersInputObjectSchema: z.ZodType<Prisma.eventUpdateWithWhereUniqueWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.eventUpdateWithWhereUniqueWithoutUsersInput>;
export const eventUpdateWithWhereUniqueWithoutUsersInputObjectZodSchema = makeSchema();
