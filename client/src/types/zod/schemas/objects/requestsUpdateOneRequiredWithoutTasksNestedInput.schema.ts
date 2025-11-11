import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { requestsCreateWithoutTasksInputObjectSchema as requestsCreateWithoutTasksInputObjectSchema } from './requestsCreateWithoutTasksInput.schema';
import { requestsUncheckedCreateWithoutTasksInputObjectSchema as requestsUncheckedCreateWithoutTasksInputObjectSchema } from './requestsUncheckedCreateWithoutTasksInput.schema';
import { requestsCreateOrConnectWithoutTasksInputObjectSchema as requestsCreateOrConnectWithoutTasksInputObjectSchema } from './requestsCreateOrConnectWithoutTasksInput.schema';
import { requestsUpsertWithoutTasksInputObjectSchema as requestsUpsertWithoutTasksInputObjectSchema } from './requestsUpsertWithoutTasksInput.schema';
import { requestsWhereUniqueInputObjectSchema as requestsWhereUniqueInputObjectSchema } from './requestsWhereUniqueInput.schema';
import { requestsUpdateToOneWithWhereWithoutTasksInputObjectSchema as requestsUpdateToOneWithWhereWithoutTasksInputObjectSchema } from './requestsUpdateToOneWithWhereWithoutTasksInput.schema';
import { requestsUpdateWithoutTasksInputObjectSchema as requestsUpdateWithoutTasksInputObjectSchema } from './requestsUpdateWithoutTasksInput.schema';
import { requestsUncheckedUpdateWithoutTasksInputObjectSchema as requestsUncheckedUpdateWithoutTasksInputObjectSchema } from './requestsUncheckedUpdateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => requestsCreateWithoutTasksInputObjectSchema), z.lazy(() => requestsUncheckedCreateWithoutTasksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => requestsCreateOrConnectWithoutTasksInputObjectSchema).optional(),
  upsert: z.lazy(() => requestsUpsertWithoutTasksInputObjectSchema).optional(),
  connect: z.lazy(() => requestsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => requestsUpdateToOneWithWhereWithoutTasksInputObjectSchema), z.lazy(() => requestsUpdateWithoutTasksInputObjectSchema), z.lazy(() => requestsUncheckedUpdateWithoutTasksInputObjectSchema)]).optional()
}).strict();
export const requestsUpdateOneRequiredWithoutTasksNestedInputObjectSchema: z.ZodType<Prisma.requestsUpdateOneRequiredWithoutTasksNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsUpdateOneRequiredWithoutTasksNestedInput>;
export const requestsUpdateOneRequiredWithoutTasksNestedInputObjectZodSchema = makeSchema();
