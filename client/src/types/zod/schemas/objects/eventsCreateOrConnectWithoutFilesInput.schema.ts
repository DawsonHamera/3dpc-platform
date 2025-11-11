import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsWhereUniqueInputObjectSchema as eventsWhereUniqueInputObjectSchema } from './eventsWhereUniqueInput.schema';
import { eventsCreateWithoutFilesInputObjectSchema as eventsCreateWithoutFilesInputObjectSchema } from './eventsCreateWithoutFilesInput.schema';
import { eventsUncheckedCreateWithoutFilesInputObjectSchema as eventsUncheckedCreateWithoutFilesInputObjectSchema } from './eventsUncheckedCreateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => eventsCreateWithoutFilesInputObjectSchema), z.lazy(() => eventsUncheckedCreateWithoutFilesInputObjectSchema)])
}).strict();
export const eventsCreateOrConnectWithoutFilesInputObjectSchema: z.ZodType<Prisma.eventsCreateOrConnectWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsCreateOrConnectWithoutFilesInput>;
export const eventsCreateOrConnectWithoutFilesInputObjectZodSchema = makeSchema();
