import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesCreateWithoutEventsInputObjectSchema as filesCreateWithoutEventsInputObjectSchema } from './filesCreateWithoutEventsInput.schema';
import { filesUncheckedCreateWithoutEventsInputObjectSchema as filesUncheckedCreateWithoutEventsInputObjectSchema } from './filesUncheckedCreateWithoutEventsInput.schema';
import { filesCreateOrConnectWithoutEventsInputObjectSchema as filesCreateOrConnectWithoutEventsInputObjectSchema } from './filesCreateOrConnectWithoutEventsInput.schema';
import { filesUpsertWithoutEventsInputObjectSchema as filesUpsertWithoutEventsInputObjectSchema } from './filesUpsertWithoutEventsInput.schema';
import { filesWhereInputObjectSchema as filesWhereInputObjectSchema } from './filesWhereInput.schema';
import { filesWhereUniqueInputObjectSchema as filesWhereUniqueInputObjectSchema } from './filesWhereUniqueInput.schema';
import { filesUpdateToOneWithWhereWithoutEventsInputObjectSchema as filesUpdateToOneWithWhereWithoutEventsInputObjectSchema } from './filesUpdateToOneWithWhereWithoutEventsInput.schema';
import { filesUpdateWithoutEventsInputObjectSchema as filesUpdateWithoutEventsInputObjectSchema } from './filesUpdateWithoutEventsInput.schema';
import { filesUncheckedUpdateWithoutEventsInputObjectSchema as filesUncheckedUpdateWithoutEventsInputObjectSchema } from './filesUncheckedUpdateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => filesCreateWithoutEventsInputObjectSchema), z.lazy(() => filesUncheckedCreateWithoutEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => filesCreateOrConnectWithoutEventsInputObjectSchema).optional(),
  upsert: z.lazy(() => filesUpsertWithoutEventsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => filesWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => filesWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => filesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => filesUpdateToOneWithWhereWithoutEventsInputObjectSchema), z.lazy(() => filesUpdateWithoutEventsInputObjectSchema), z.lazy(() => filesUncheckedUpdateWithoutEventsInputObjectSchema)]).optional()
}).strict();
export const filesUpdateOneWithoutEventsNestedInputObjectSchema: z.ZodType<Prisma.filesUpdateOneWithoutEventsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.filesUpdateOneWithoutEventsNestedInput>;
export const filesUpdateOneWithoutEventsNestedInputObjectZodSchema = makeSchema();
