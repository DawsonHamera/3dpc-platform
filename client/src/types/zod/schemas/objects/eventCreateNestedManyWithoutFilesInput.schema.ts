import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventCreateWithoutFilesInputObjectSchema as eventCreateWithoutFilesInputObjectSchema } from './eventCreateWithoutFilesInput.schema';
import { eventUncheckedCreateWithoutFilesInputObjectSchema as eventUncheckedCreateWithoutFilesInputObjectSchema } from './eventUncheckedCreateWithoutFilesInput.schema';
import { eventCreateOrConnectWithoutFilesInputObjectSchema as eventCreateOrConnectWithoutFilesInputObjectSchema } from './eventCreateOrConnectWithoutFilesInput.schema';
import { eventCreateManyFilesInputEnvelopeObjectSchema as eventCreateManyFilesInputEnvelopeObjectSchema } from './eventCreateManyFilesInputEnvelope.schema';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './eventWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => eventCreateWithoutFilesInputObjectSchema), z.lazy(() => eventCreateWithoutFilesInputObjectSchema).array(), z.lazy(() => eventUncheckedCreateWithoutFilesInputObjectSchema), z.lazy(() => eventUncheckedCreateWithoutFilesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => eventCreateOrConnectWithoutFilesInputObjectSchema), z.lazy(() => eventCreateOrConnectWithoutFilesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => eventCreateManyFilesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => eventWhereUniqueInputObjectSchema), z.lazy(() => eventWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const eventCreateNestedManyWithoutFilesInputObjectSchema: z.ZodType<Prisma.eventCreateNestedManyWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.eventCreateNestedManyWithoutFilesInput>;
export const eventCreateNestedManyWithoutFilesInputObjectZodSchema = makeSchema();
