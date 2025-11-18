import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './eventWhereUniqueInput.schema';
import { eventCreateWithoutImage_fileInputObjectSchema as eventCreateWithoutImage_fileInputObjectSchema } from './eventCreateWithoutImage_fileInput.schema';
import { eventUncheckedCreateWithoutImage_fileInputObjectSchema as eventUncheckedCreateWithoutImage_fileInputObjectSchema } from './eventUncheckedCreateWithoutImage_fileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => eventCreateWithoutImage_fileInputObjectSchema), z.lazy(() => eventUncheckedCreateWithoutImage_fileInputObjectSchema)])
}).strict();
export const eventCreateOrConnectWithoutImage_fileInputObjectSchema: z.ZodType<Prisma.eventCreateOrConnectWithoutImage_fileInput> = makeSchema() as unknown as z.ZodType<Prisma.eventCreateOrConnectWithoutImage_fileInput>;
export const eventCreateOrConnectWithoutImage_fileInputObjectZodSchema = makeSchema();
