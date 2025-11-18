import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventScalarWhereInputObjectSchema as eventScalarWhereInputObjectSchema } from './eventScalarWhereInput.schema';
import { eventUpdateManyMutationInputObjectSchema as eventUpdateManyMutationInputObjectSchema } from './eventUpdateManyMutationInput.schema';
import { eventUncheckedUpdateManyWithoutCreated_byInputObjectSchema as eventUncheckedUpdateManyWithoutCreated_byInputObjectSchema } from './eventUncheckedUpdateManyWithoutCreated_byInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => eventUpdateManyMutationInputObjectSchema), z.lazy(() => eventUncheckedUpdateManyWithoutCreated_byInputObjectSchema)])
}).strict();
export const eventUpdateManyWithWhereWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.eventUpdateManyWithWhereWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.eventUpdateManyWithWhereWithoutCreated_byInput>;
export const eventUpdateManyWithWhereWithoutCreated_byInputObjectZodSchema = makeSchema();
