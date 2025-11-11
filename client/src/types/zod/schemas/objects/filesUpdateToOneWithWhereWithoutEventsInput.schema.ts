import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesWhereInputObjectSchema as filesWhereInputObjectSchema } from './filesWhereInput.schema';
import { filesUpdateWithoutEventsInputObjectSchema as filesUpdateWithoutEventsInputObjectSchema } from './filesUpdateWithoutEventsInput.schema';
import { filesUncheckedUpdateWithoutEventsInputObjectSchema as filesUncheckedUpdateWithoutEventsInputObjectSchema } from './filesUncheckedUpdateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => filesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => filesUpdateWithoutEventsInputObjectSchema), z.lazy(() => filesUncheckedUpdateWithoutEventsInputObjectSchema)])
}).strict();
export const filesUpdateToOneWithWhereWithoutEventsInputObjectSchema: z.ZodType<Prisma.filesUpdateToOneWithWhereWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.filesUpdateToOneWithWhereWithoutEventsInput>;
export const filesUpdateToOneWithWhereWithoutEventsInputObjectZodSchema = makeSchema();
