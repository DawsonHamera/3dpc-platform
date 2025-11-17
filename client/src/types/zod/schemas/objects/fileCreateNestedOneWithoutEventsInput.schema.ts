import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { fileCreateWithoutEventsInputObjectSchema as fileCreateWithoutEventsInputObjectSchema } from './fileCreateWithoutEventsInput.schema';
import { fileUncheckedCreateWithoutEventsInputObjectSchema as fileUncheckedCreateWithoutEventsInputObjectSchema } from './fileUncheckedCreateWithoutEventsInput.schema';
import { fileCreateOrConnectWithoutEventsInputObjectSchema as fileCreateOrConnectWithoutEventsInputObjectSchema } from './fileCreateOrConnectWithoutEventsInput.schema';
import { fileWhereUniqueInputObjectSchema as fileWhereUniqueInputObjectSchema } from './fileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => fileCreateWithoutEventsInputObjectSchema), z.lazy(() => fileUncheckedCreateWithoutEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => fileCreateOrConnectWithoutEventsInputObjectSchema).optional(),
  connect: z.lazy(() => fileWhereUniqueInputObjectSchema).optional()
}).strict();
export const fileCreateNestedOneWithoutEventsInputObjectSchema: z.ZodType<Prisma.fileCreateNestedOneWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.fileCreateNestedOneWithoutEventsInput>;
export const fileCreateNestedOneWithoutEventsInputObjectZodSchema = makeSchema();
