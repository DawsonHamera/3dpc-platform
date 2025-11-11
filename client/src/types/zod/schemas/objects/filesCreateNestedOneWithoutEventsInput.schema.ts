import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesCreateWithoutEventsInputObjectSchema as filesCreateWithoutEventsInputObjectSchema } from './filesCreateWithoutEventsInput.schema';
import { filesUncheckedCreateWithoutEventsInputObjectSchema as filesUncheckedCreateWithoutEventsInputObjectSchema } from './filesUncheckedCreateWithoutEventsInput.schema';
import { filesCreateOrConnectWithoutEventsInputObjectSchema as filesCreateOrConnectWithoutEventsInputObjectSchema } from './filesCreateOrConnectWithoutEventsInput.schema';
import { filesWhereUniqueInputObjectSchema as filesWhereUniqueInputObjectSchema } from './filesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => filesCreateWithoutEventsInputObjectSchema), z.lazy(() => filesUncheckedCreateWithoutEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => filesCreateOrConnectWithoutEventsInputObjectSchema).optional(),
  connect: z.lazy(() => filesWhereUniqueInputObjectSchema).optional()
}).strict();
export const filesCreateNestedOneWithoutEventsInputObjectSchema: z.ZodType<Prisma.filesCreateNestedOneWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.filesCreateNestedOneWithoutEventsInput>;
export const filesCreateNestedOneWithoutEventsInputObjectZodSchema = makeSchema();
