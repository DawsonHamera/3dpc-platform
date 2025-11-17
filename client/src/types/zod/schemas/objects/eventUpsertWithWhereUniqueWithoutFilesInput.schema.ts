import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './eventWhereUniqueInput.schema';
import { eventUpdateWithoutFilesInputObjectSchema as eventUpdateWithoutFilesInputObjectSchema } from './eventUpdateWithoutFilesInput.schema';
import { eventUncheckedUpdateWithoutFilesInputObjectSchema as eventUncheckedUpdateWithoutFilesInputObjectSchema } from './eventUncheckedUpdateWithoutFilesInput.schema';
import { eventCreateWithoutFilesInputObjectSchema as eventCreateWithoutFilesInputObjectSchema } from './eventCreateWithoutFilesInput.schema';
import { eventUncheckedCreateWithoutFilesInputObjectSchema as eventUncheckedCreateWithoutFilesInputObjectSchema } from './eventUncheckedCreateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => eventUpdateWithoutFilesInputObjectSchema), z.lazy(() => eventUncheckedUpdateWithoutFilesInputObjectSchema)]),
  create: z.union([z.lazy(() => eventCreateWithoutFilesInputObjectSchema), z.lazy(() => eventUncheckedCreateWithoutFilesInputObjectSchema)])
}).strict();
export const eventUpsertWithWhereUniqueWithoutFilesInputObjectSchema: z.ZodType<Prisma.eventUpsertWithWhereUniqueWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.eventUpsertWithWhereUniqueWithoutFilesInput>;
export const eventUpsertWithWhereUniqueWithoutFilesInputObjectZodSchema = makeSchema();
