import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsScalarWhereInputObjectSchema as eventsScalarWhereInputObjectSchema } from './eventsScalarWhereInput.schema';
import { eventsUpdateManyMutationInputObjectSchema as eventsUpdateManyMutationInputObjectSchema } from './eventsUpdateManyMutationInput.schema';
import { eventsUncheckedUpdateManyWithoutFilesInputObjectSchema as eventsUncheckedUpdateManyWithoutFilesInputObjectSchema } from './eventsUncheckedUpdateManyWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => eventsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => eventsUpdateManyMutationInputObjectSchema), z.lazy(() => eventsUncheckedUpdateManyWithoutFilesInputObjectSchema)])
}).strict();
export const eventsUpdateManyWithWhereWithoutFilesInputObjectSchema: z.ZodType<Prisma.eventsUpdateManyWithWhereWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsUpdateManyWithWhereWithoutFilesInput>;
export const eventsUpdateManyWithWhereWithoutFilesInputObjectZodSchema = makeSchema();
