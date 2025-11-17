import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './eventWhereUniqueInput.schema';
import { eventUpdateWithoutFilesInputObjectSchema as eventUpdateWithoutFilesInputObjectSchema } from './eventUpdateWithoutFilesInput.schema';
import { eventUncheckedUpdateWithoutFilesInputObjectSchema as eventUncheckedUpdateWithoutFilesInputObjectSchema } from './eventUncheckedUpdateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => eventUpdateWithoutFilesInputObjectSchema), z.lazy(() => eventUncheckedUpdateWithoutFilesInputObjectSchema)])
}).strict();
export const eventUpdateWithWhereUniqueWithoutFilesInputObjectSchema: z.ZodType<Prisma.eventUpdateWithWhereUniqueWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.eventUpdateWithWhereUniqueWithoutFilesInput>;
export const eventUpdateWithWhereUniqueWithoutFilesInputObjectZodSchema = makeSchema();
