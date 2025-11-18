import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventCreateWithoutImage_fileInputObjectSchema as eventCreateWithoutImage_fileInputObjectSchema } from './eventCreateWithoutImage_fileInput.schema';
import { eventUncheckedCreateWithoutImage_fileInputObjectSchema as eventUncheckedCreateWithoutImage_fileInputObjectSchema } from './eventUncheckedCreateWithoutImage_fileInput.schema';
import { eventCreateOrConnectWithoutImage_fileInputObjectSchema as eventCreateOrConnectWithoutImage_fileInputObjectSchema } from './eventCreateOrConnectWithoutImage_fileInput.schema';
import { eventCreateManyImage_fileInputEnvelopeObjectSchema as eventCreateManyImage_fileInputEnvelopeObjectSchema } from './eventCreateManyImage_fileInputEnvelope.schema';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './eventWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => eventCreateWithoutImage_fileInputObjectSchema), z.lazy(() => eventCreateWithoutImage_fileInputObjectSchema).array(), z.lazy(() => eventUncheckedCreateWithoutImage_fileInputObjectSchema), z.lazy(() => eventUncheckedCreateWithoutImage_fileInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => eventCreateOrConnectWithoutImage_fileInputObjectSchema), z.lazy(() => eventCreateOrConnectWithoutImage_fileInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => eventCreateManyImage_fileInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => eventWhereUniqueInputObjectSchema), z.lazy(() => eventWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const eventCreateNestedManyWithoutImage_fileInputObjectSchema: z.ZodType<Prisma.eventCreateNestedManyWithoutImage_fileInput> = makeSchema() as unknown as z.ZodType<Prisma.eventCreateNestedManyWithoutImage_fileInput>;
export const eventCreateNestedManyWithoutImage_fileInputObjectZodSchema = makeSchema();
