import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './eventWhereUniqueInput.schema';
import { eventUpdateWithoutImage_fileInputObjectSchema as eventUpdateWithoutImage_fileInputObjectSchema } from './eventUpdateWithoutImage_fileInput.schema';
import { eventUncheckedUpdateWithoutImage_fileInputObjectSchema as eventUncheckedUpdateWithoutImage_fileInputObjectSchema } from './eventUncheckedUpdateWithoutImage_fileInput.schema';
import { eventCreateWithoutImage_fileInputObjectSchema as eventCreateWithoutImage_fileInputObjectSchema } from './eventCreateWithoutImage_fileInput.schema';
import { eventUncheckedCreateWithoutImage_fileInputObjectSchema as eventUncheckedCreateWithoutImage_fileInputObjectSchema } from './eventUncheckedCreateWithoutImage_fileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => eventUpdateWithoutImage_fileInputObjectSchema), z.lazy(() => eventUncheckedUpdateWithoutImage_fileInputObjectSchema)]),
  create: z.union([z.lazy(() => eventCreateWithoutImage_fileInputObjectSchema), z.lazy(() => eventUncheckedCreateWithoutImage_fileInputObjectSchema)])
}).strict();
export const eventUpsertWithWhereUniqueWithoutImage_fileInputObjectSchema: z.ZodType<Prisma.eventUpsertWithWhereUniqueWithoutImage_fileInput> = makeSchema() as unknown as z.ZodType<Prisma.eventUpsertWithWhereUniqueWithoutImage_fileInput>;
export const eventUpsertWithWhereUniqueWithoutImage_fileInputObjectZodSchema = makeSchema();
