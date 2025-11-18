import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventScalarWhereInputObjectSchema as eventScalarWhereInputObjectSchema } from './eventScalarWhereInput.schema';
import { eventUpdateManyMutationInputObjectSchema as eventUpdateManyMutationInputObjectSchema } from './eventUpdateManyMutationInput.schema';
import { eventUncheckedUpdateManyWithoutImage_fileInputObjectSchema as eventUncheckedUpdateManyWithoutImage_fileInputObjectSchema } from './eventUncheckedUpdateManyWithoutImage_fileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => eventUpdateManyMutationInputObjectSchema), z.lazy(() => eventUncheckedUpdateManyWithoutImage_fileInputObjectSchema)])
}).strict();
export const eventUpdateManyWithWhereWithoutImage_fileInputObjectSchema: z.ZodType<Prisma.eventUpdateManyWithWhereWithoutImage_fileInput> = makeSchema() as unknown as z.ZodType<Prisma.eventUpdateManyWithWhereWithoutImage_fileInput>;
export const eventUpdateManyWithWhereWithoutImage_fileInputObjectZodSchema = makeSchema();
