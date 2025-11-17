import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { fileCreateWithoutEventsInputObjectSchema as fileCreateWithoutEventsInputObjectSchema } from './fileCreateWithoutEventsInput.schema';
import { fileUncheckedCreateWithoutEventsInputObjectSchema as fileUncheckedCreateWithoutEventsInputObjectSchema } from './fileUncheckedCreateWithoutEventsInput.schema';
import { fileCreateOrConnectWithoutEventsInputObjectSchema as fileCreateOrConnectWithoutEventsInputObjectSchema } from './fileCreateOrConnectWithoutEventsInput.schema';
import { fileUpsertWithoutEventsInputObjectSchema as fileUpsertWithoutEventsInputObjectSchema } from './fileUpsertWithoutEventsInput.schema';
import { fileWhereInputObjectSchema as fileWhereInputObjectSchema } from './fileWhereInput.schema';
import { fileWhereUniqueInputObjectSchema as fileWhereUniqueInputObjectSchema } from './fileWhereUniqueInput.schema';
import { fileUpdateToOneWithWhereWithoutEventsInputObjectSchema as fileUpdateToOneWithWhereWithoutEventsInputObjectSchema } from './fileUpdateToOneWithWhereWithoutEventsInput.schema';
import { fileUpdateWithoutEventsInputObjectSchema as fileUpdateWithoutEventsInputObjectSchema } from './fileUpdateWithoutEventsInput.schema';
import { fileUncheckedUpdateWithoutEventsInputObjectSchema as fileUncheckedUpdateWithoutEventsInputObjectSchema } from './fileUncheckedUpdateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => fileCreateWithoutEventsInputObjectSchema), z.lazy(() => fileUncheckedCreateWithoutEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => fileCreateOrConnectWithoutEventsInputObjectSchema).optional(),
  upsert: z.lazy(() => fileUpsertWithoutEventsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => fileWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => fileWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => fileWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => fileUpdateToOneWithWhereWithoutEventsInputObjectSchema), z.lazy(() => fileUpdateWithoutEventsInputObjectSchema), z.lazy(() => fileUncheckedUpdateWithoutEventsInputObjectSchema)]).optional()
}).strict();
export const fileUpdateOneWithoutEventsNestedInputObjectSchema: z.ZodType<Prisma.fileUpdateOneWithoutEventsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.fileUpdateOneWithoutEventsNestedInput>;
export const fileUpdateOneWithoutEventsNestedInputObjectZodSchema = makeSchema();
