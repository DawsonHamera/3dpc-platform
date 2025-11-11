import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { requestsWhereUniqueInputObjectSchema as requestsWhereUniqueInputObjectSchema } from './requestsWhereUniqueInput.schema';
import { requestsCreateWithoutTasksInputObjectSchema as requestsCreateWithoutTasksInputObjectSchema } from './requestsCreateWithoutTasksInput.schema';
import { requestsUncheckedCreateWithoutTasksInputObjectSchema as requestsUncheckedCreateWithoutTasksInputObjectSchema } from './requestsUncheckedCreateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => requestsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => requestsCreateWithoutTasksInputObjectSchema), z.lazy(() => requestsUncheckedCreateWithoutTasksInputObjectSchema)])
}).strict();
export const requestsCreateOrConnectWithoutTasksInputObjectSchema: z.ZodType<Prisma.requestsCreateOrConnectWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsCreateOrConnectWithoutTasksInput>;
export const requestsCreateOrConnectWithoutTasksInputObjectZodSchema = makeSchema();
