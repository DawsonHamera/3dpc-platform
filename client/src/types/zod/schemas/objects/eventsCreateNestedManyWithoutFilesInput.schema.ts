import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsCreateWithoutFilesInputObjectSchema as eventsCreateWithoutFilesInputObjectSchema } from './eventsCreateWithoutFilesInput.schema';
import { eventsUncheckedCreateWithoutFilesInputObjectSchema as eventsUncheckedCreateWithoutFilesInputObjectSchema } from './eventsUncheckedCreateWithoutFilesInput.schema';
import { eventsCreateOrConnectWithoutFilesInputObjectSchema as eventsCreateOrConnectWithoutFilesInputObjectSchema } from './eventsCreateOrConnectWithoutFilesInput.schema';
import { eventsCreateManyFilesInputEnvelopeObjectSchema as eventsCreateManyFilesInputEnvelopeObjectSchema } from './eventsCreateManyFilesInputEnvelope.schema';
import { eventsWhereUniqueInputObjectSchema as eventsWhereUniqueInputObjectSchema } from './eventsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => eventsCreateWithoutFilesInputObjectSchema), z.lazy(() => eventsCreateWithoutFilesInputObjectSchema).array(), z.lazy(() => eventsUncheckedCreateWithoutFilesInputObjectSchema), z.lazy(() => eventsUncheckedCreateWithoutFilesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => eventsCreateOrConnectWithoutFilesInputObjectSchema), z.lazy(() => eventsCreateOrConnectWithoutFilesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => eventsCreateManyFilesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => eventsWhereUniqueInputObjectSchema), z.lazy(() => eventsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const eventsCreateNestedManyWithoutFilesInputObjectSchema: z.ZodType<Prisma.eventsCreateNestedManyWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsCreateNestedManyWithoutFilesInput>;
export const eventsCreateNestedManyWithoutFilesInputObjectZodSchema = makeSchema();
