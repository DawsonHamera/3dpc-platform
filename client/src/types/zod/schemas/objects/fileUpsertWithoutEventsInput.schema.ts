import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { fileUpdateWithoutEventsInputObjectSchema as fileUpdateWithoutEventsInputObjectSchema } from './fileUpdateWithoutEventsInput.schema';
import { fileUncheckedUpdateWithoutEventsInputObjectSchema as fileUncheckedUpdateWithoutEventsInputObjectSchema } from './fileUncheckedUpdateWithoutEventsInput.schema';
import { fileCreateWithoutEventsInputObjectSchema as fileCreateWithoutEventsInputObjectSchema } from './fileCreateWithoutEventsInput.schema';
import { fileUncheckedCreateWithoutEventsInputObjectSchema as fileUncheckedCreateWithoutEventsInputObjectSchema } from './fileUncheckedCreateWithoutEventsInput.schema';
import { fileWhereInputObjectSchema as fileWhereInputObjectSchema } from './fileWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => fileUpdateWithoutEventsInputObjectSchema), z.lazy(() => fileUncheckedUpdateWithoutEventsInputObjectSchema)]),
  create: z.union([z.lazy(() => fileCreateWithoutEventsInputObjectSchema), z.lazy(() => fileUncheckedCreateWithoutEventsInputObjectSchema)]),
  where: z.lazy(() => fileWhereInputObjectSchema).optional()
}).strict();
export const fileUpsertWithoutEventsInputObjectSchema: z.ZodType<Prisma.fileUpsertWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.fileUpsertWithoutEventsInput>;
export const fileUpsertWithoutEventsInputObjectZodSchema = makeSchema();
