import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsWhereUniqueInputObjectSchema as eventsWhereUniqueInputObjectSchema } from './eventsWhereUniqueInput.schema';
import { eventsUpdateWithoutFilesInputObjectSchema as eventsUpdateWithoutFilesInputObjectSchema } from './eventsUpdateWithoutFilesInput.schema';
import { eventsUncheckedUpdateWithoutFilesInputObjectSchema as eventsUncheckedUpdateWithoutFilesInputObjectSchema } from './eventsUncheckedUpdateWithoutFilesInput.schema';
import { eventsCreateWithoutFilesInputObjectSchema as eventsCreateWithoutFilesInputObjectSchema } from './eventsCreateWithoutFilesInput.schema';
import { eventsUncheckedCreateWithoutFilesInputObjectSchema as eventsUncheckedCreateWithoutFilesInputObjectSchema } from './eventsUncheckedCreateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => eventsUpdateWithoutFilesInputObjectSchema), z.lazy(() => eventsUncheckedUpdateWithoutFilesInputObjectSchema)]),
  create: z.union([z.lazy(() => eventsCreateWithoutFilesInputObjectSchema), z.lazy(() => eventsUncheckedCreateWithoutFilesInputObjectSchema)])
}).strict();
export const eventsUpsertWithWhereUniqueWithoutFilesInputObjectSchema: z.ZodType<Prisma.eventsUpsertWithWhereUniqueWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsUpsertWithWhereUniqueWithoutFilesInput>;
export const eventsUpsertWithWhereUniqueWithoutFilesInputObjectZodSchema = makeSchema();
