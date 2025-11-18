import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './eventWhereUniqueInput.schema';
import { eventUpdateWithoutImage_fileInputObjectSchema as eventUpdateWithoutImage_fileInputObjectSchema } from './eventUpdateWithoutImage_fileInput.schema';
import { eventUncheckedUpdateWithoutImage_fileInputObjectSchema as eventUncheckedUpdateWithoutImage_fileInputObjectSchema } from './eventUncheckedUpdateWithoutImage_fileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => eventUpdateWithoutImage_fileInputObjectSchema), z.lazy(() => eventUncheckedUpdateWithoutImage_fileInputObjectSchema)])
}).strict();
export const eventUpdateWithWhereUniqueWithoutImage_fileInputObjectSchema: z.ZodType<Prisma.eventUpdateWithWhereUniqueWithoutImage_fileInput> = makeSchema() as unknown as z.ZodType<Prisma.eventUpdateWithWhereUniqueWithoutImage_fileInput>;
export const eventUpdateWithWhereUniqueWithoutImage_fileInputObjectZodSchema = makeSchema();
