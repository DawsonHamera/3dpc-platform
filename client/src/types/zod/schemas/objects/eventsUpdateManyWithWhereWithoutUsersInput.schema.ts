import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsScalarWhereInputObjectSchema as eventsScalarWhereInputObjectSchema } from './eventsScalarWhereInput.schema';
import { eventsUpdateManyMutationInputObjectSchema as eventsUpdateManyMutationInputObjectSchema } from './eventsUpdateManyMutationInput.schema';
import { eventsUncheckedUpdateManyWithoutUsersInputObjectSchema as eventsUncheckedUpdateManyWithoutUsersInputObjectSchema } from './eventsUncheckedUpdateManyWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => eventsUpdateManyMutationInputObjectSchema), z.lazy(() => eventsUncheckedUpdateManyWithoutUsersInputObjectSchema)])
}).strict();
export const eventsUpdateManyWithWhereWithoutUsersInputObjectSchema: z.ZodType<Prisma.eventsUpdateManyWithWhereWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsUpdateManyWithWhereWithoutUsersInput>;
export const eventsUpdateManyWithWhereWithoutUsersInputObjectZodSchema = makeSchema();
