import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { requestsUpdateWithoutTasksInputObjectSchema as requestsUpdateWithoutTasksInputObjectSchema } from './requestsUpdateWithoutTasksInput.schema';
import { requestsUncheckedUpdateWithoutTasksInputObjectSchema as requestsUncheckedUpdateWithoutTasksInputObjectSchema } from './requestsUncheckedUpdateWithoutTasksInput.schema';
import { requestsCreateWithoutTasksInputObjectSchema as requestsCreateWithoutTasksInputObjectSchema } from './requestsCreateWithoutTasksInput.schema';
import { requestsUncheckedCreateWithoutTasksInputObjectSchema as requestsUncheckedCreateWithoutTasksInputObjectSchema } from './requestsUncheckedCreateWithoutTasksInput.schema';
import { requestsWhereInputObjectSchema as requestsWhereInputObjectSchema } from './requestsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => requestsUpdateWithoutTasksInputObjectSchema), z.lazy(() => requestsUncheckedUpdateWithoutTasksInputObjectSchema)]),
  create: z.union([z.lazy(() => requestsCreateWithoutTasksInputObjectSchema), z.lazy(() => requestsUncheckedCreateWithoutTasksInputObjectSchema)]),
  where: z.lazy(() => requestsWhereInputObjectSchema).optional()
}).strict();
export const requestsUpsertWithoutTasksInputObjectSchema: z.ZodType<Prisma.requestsUpsertWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsUpsertWithoutTasksInput>;
export const requestsUpsertWithoutTasksInputObjectZodSchema = makeSchema();
