import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { requestsWhereInputObjectSchema as requestsWhereInputObjectSchema } from './requestsWhereInput.schema';
import { requestsUpdateWithoutTasksInputObjectSchema as requestsUpdateWithoutTasksInputObjectSchema } from './requestsUpdateWithoutTasksInput.schema';
import { requestsUncheckedUpdateWithoutTasksInputObjectSchema as requestsUncheckedUpdateWithoutTasksInputObjectSchema } from './requestsUncheckedUpdateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => requestsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => requestsUpdateWithoutTasksInputObjectSchema), z.lazy(() => requestsUncheckedUpdateWithoutTasksInputObjectSchema)])
}).strict();
export const requestsUpdateToOneWithWhereWithoutTasksInputObjectSchema: z.ZodType<Prisma.requestsUpdateToOneWithWhereWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsUpdateToOneWithWhereWithoutTasksInput>;
export const requestsUpdateToOneWithWhereWithoutTasksInputObjectZodSchema = makeSchema();
