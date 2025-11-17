import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventScalarWhereInputObjectSchema as eventScalarWhereInputObjectSchema } from './eventScalarWhereInput.schema';
import { eventUpdateManyMutationInputObjectSchema as eventUpdateManyMutationInputObjectSchema } from './eventUpdateManyMutationInput.schema';
import { eventUncheckedUpdateManyWithoutFilesInputObjectSchema as eventUncheckedUpdateManyWithoutFilesInputObjectSchema } from './eventUncheckedUpdateManyWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => eventUpdateManyMutationInputObjectSchema), z.lazy(() => eventUncheckedUpdateManyWithoutFilesInputObjectSchema)])
}).strict();
export const eventUpdateManyWithWhereWithoutFilesInputObjectSchema: z.ZodType<Prisma.eventUpdateManyWithWhereWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.eventUpdateManyWithWhereWithoutFilesInput>;
export const eventUpdateManyWithWhereWithoutFilesInputObjectZodSchema = makeSchema();
