import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventScalarWhereInputObjectSchema as eventScalarWhereInputObjectSchema } from './eventScalarWhereInput.schema';
import { eventUpdateManyMutationInputObjectSchema as eventUpdateManyMutationInputObjectSchema } from './eventUpdateManyMutationInput.schema';
import { eventUncheckedUpdateManyWithoutUsersInputObjectSchema as eventUncheckedUpdateManyWithoutUsersInputObjectSchema } from './eventUncheckedUpdateManyWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => eventUpdateManyMutationInputObjectSchema), z.lazy(() => eventUncheckedUpdateManyWithoutUsersInputObjectSchema)])
}).strict();
export const eventUpdateManyWithWhereWithoutUsersInputObjectSchema: z.ZodType<Prisma.eventUpdateManyWithWhereWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.eventUpdateManyWithWhereWithoutUsersInput>;
export const eventUpdateManyWithWhereWithoutUsersInputObjectZodSchema = makeSchema();
