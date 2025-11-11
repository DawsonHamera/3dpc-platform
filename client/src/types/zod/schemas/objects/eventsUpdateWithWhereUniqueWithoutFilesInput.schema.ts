import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsWhereUniqueInputObjectSchema as eventsWhereUniqueInputObjectSchema } from './eventsWhereUniqueInput.schema';
import { eventsUpdateWithoutFilesInputObjectSchema as eventsUpdateWithoutFilesInputObjectSchema } from './eventsUpdateWithoutFilesInput.schema';
import { eventsUncheckedUpdateWithoutFilesInputObjectSchema as eventsUncheckedUpdateWithoutFilesInputObjectSchema } from './eventsUncheckedUpdateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => eventsUpdateWithoutFilesInputObjectSchema), z.lazy(() => eventsUncheckedUpdateWithoutFilesInputObjectSchema)])
}).strict();
export const eventsUpdateWithWhereUniqueWithoutFilesInputObjectSchema: z.ZodType<Prisma.eventsUpdateWithWhereUniqueWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsUpdateWithWhereUniqueWithoutFilesInput>;
export const eventsUpdateWithWhereUniqueWithoutFilesInputObjectZodSchema = makeSchema();
