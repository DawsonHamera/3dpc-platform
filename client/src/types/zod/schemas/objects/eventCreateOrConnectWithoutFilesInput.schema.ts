import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './eventWhereUniqueInput.schema';
import { eventCreateWithoutFilesInputObjectSchema as eventCreateWithoutFilesInputObjectSchema } from './eventCreateWithoutFilesInput.schema';
import { eventUncheckedCreateWithoutFilesInputObjectSchema as eventUncheckedCreateWithoutFilesInputObjectSchema } from './eventUncheckedCreateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => eventCreateWithoutFilesInputObjectSchema), z.lazy(() => eventUncheckedCreateWithoutFilesInputObjectSchema)])
}).strict();
export const eventCreateOrConnectWithoutFilesInputObjectSchema: z.ZodType<Prisma.eventCreateOrConnectWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.eventCreateOrConnectWithoutFilesInput>;
export const eventCreateOrConnectWithoutFilesInputObjectZodSchema = makeSchema();
