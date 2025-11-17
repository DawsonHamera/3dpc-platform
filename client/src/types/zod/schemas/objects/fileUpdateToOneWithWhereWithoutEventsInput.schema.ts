import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { fileWhereInputObjectSchema as fileWhereInputObjectSchema } from './fileWhereInput.schema';
import { fileUpdateWithoutEventsInputObjectSchema as fileUpdateWithoutEventsInputObjectSchema } from './fileUpdateWithoutEventsInput.schema';
import { fileUncheckedUpdateWithoutEventsInputObjectSchema as fileUncheckedUpdateWithoutEventsInputObjectSchema } from './fileUncheckedUpdateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => fileWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => fileUpdateWithoutEventsInputObjectSchema), z.lazy(() => fileUncheckedUpdateWithoutEventsInputObjectSchema)])
}).strict();
export const fileUpdateToOneWithWhereWithoutEventsInputObjectSchema: z.ZodType<Prisma.fileUpdateToOneWithWhereWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.fileUpdateToOneWithWhereWithoutEventsInput>;
export const fileUpdateToOneWithWhereWithoutEventsInputObjectZodSchema = makeSchema();
