import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { requestsCreateWithoutTasksInputObjectSchema as requestsCreateWithoutTasksInputObjectSchema } from './requestsCreateWithoutTasksInput.schema';
import { requestsUncheckedCreateWithoutTasksInputObjectSchema as requestsUncheckedCreateWithoutTasksInputObjectSchema } from './requestsUncheckedCreateWithoutTasksInput.schema';
import { requestsCreateOrConnectWithoutTasksInputObjectSchema as requestsCreateOrConnectWithoutTasksInputObjectSchema } from './requestsCreateOrConnectWithoutTasksInput.schema';
import { requestsWhereUniqueInputObjectSchema as requestsWhereUniqueInputObjectSchema } from './requestsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => requestsCreateWithoutTasksInputObjectSchema), z.lazy(() => requestsUncheckedCreateWithoutTasksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => requestsCreateOrConnectWithoutTasksInputObjectSchema).optional(),
  connect: z.lazy(() => requestsWhereUniqueInputObjectSchema).optional()
}).strict();
export const requestsCreateNestedOneWithoutTasksInputObjectSchema: z.ZodType<Prisma.requestsCreateNestedOneWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsCreateNestedOneWithoutTasksInput>;
export const requestsCreateNestedOneWithoutTasksInputObjectZodSchema = makeSchema();
