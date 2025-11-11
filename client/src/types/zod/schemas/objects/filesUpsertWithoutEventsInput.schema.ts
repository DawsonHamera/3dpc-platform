import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesUpdateWithoutEventsInputObjectSchema as filesUpdateWithoutEventsInputObjectSchema } from './filesUpdateWithoutEventsInput.schema';
import { filesUncheckedUpdateWithoutEventsInputObjectSchema as filesUncheckedUpdateWithoutEventsInputObjectSchema } from './filesUncheckedUpdateWithoutEventsInput.schema';
import { filesCreateWithoutEventsInputObjectSchema as filesCreateWithoutEventsInputObjectSchema } from './filesCreateWithoutEventsInput.schema';
import { filesUncheckedCreateWithoutEventsInputObjectSchema as filesUncheckedCreateWithoutEventsInputObjectSchema } from './filesUncheckedCreateWithoutEventsInput.schema';
import { filesWhereInputObjectSchema as filesWhereInputObjectSchema } from './filesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => filesUpdateWithoutEventsInputObjectSchema), z.lazy(() => filesUncheckedUpdateWithoutEventsInputObjectSchema)]),
  create: z.union([z.lazy(() => filesCreateWithoutEventsInputObjectSchema), z.lazy(() => filesUncheckedCreateWithoutEventsInputObjectSchema)]),
  where: z.lazy(() => filesWhereInputObjectSchema).optional()
}).strict();
export const filesUpsertWithoutEventsInputObjectSchema: z.ZodType<Prisma.filesUpsertWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.filesUpsertWithoutEventsInput>;
export const filesUpsertWithoutEventsInputObjectZodSchema = makeSchema();
