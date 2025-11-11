import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesWhereUniqueInputObjectSchema as filesWhereUniqueInputObjectSchema } from './filesWhereUniqueInput.schema';
import { filesCreateWithoutEventsInputObjectSchema as filesCreateWithoutEventsInputObjectSchema } from './filesCreateWithoutEventsInput.schema';
import { filesUncheckedCreateWithoutEventsInputObjectSchema as filesUncheckedCreateWithoutEventsInputObjectSchema } from './filesUncheckedCreateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => filesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => filesCreateWithoutEventsInputObjectSchema), z.lazy(() => filesUncheckedCreateWithoutEventsInputObjectSchema)])
}).strict();
export const filesCreateOrConnectWithoutEventsInputObjectSchema: z.ZodType<Prisma.filesCreateOrConnectWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.filesCreateOrConnectWithoutEventsInput>;
export const filesCreateOrConnectWithoutEventsInputObjectZodSchema = makeSchema();
