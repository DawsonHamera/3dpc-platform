import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { fileWhereUniqueInputObjectSchema as fileWhereUniqueInputObjectSchema } from './fileWhereUniqueInput.schema';
import { fileCreateWithoutEventsInputObjectSchema as fileCreateWithoutEventsInputObjectSchema } from './fileCreateWithoutEventsInput.schema';
import { fileUncheckedCreateWithoutEventsInputObjectSchema as fileUncheckedCreateWithoutEventsInputObjectSchema } from './fileUncheckedCreateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => fileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => fileCreateWithoutEventsInputObjectSchema), z.lazy(() => fileUncheckedCreateWithoutEventsInputObjectSchema)])
}).strict();
export const fileCreateOrConnectWithoutEventsInputObjectSchema: z.ZodType<Prisma.fileCreateOrConnectWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.fileCreateOrConnectWithoutEventsInput>;
export const fileCreateOrConnectWithoutEventsInputObjectZodSchema = makeSchema();
