import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { requestsScalarWhereInputObjectSchema as requestsScalarWhereInputObjectSchema } from './requestsScalarWhereInput.schema';
import { requestsUpdateManyMutationInputObjectSchema as requestsUpdateManyMutationInputObjectSchema } from './requestsUpdateManyMutationInput.schema';
import { requestsUncheckedUpdateManyWithoutRequest_statusesInputObjectSchema as requestsUncheckedUpdateManyWithoutRequest_statusesInputObjectSchema } from './requestsUncheckedUpdateManyWithoutRequest_statusesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => requestsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => requestsUpdateManyMutationInputObjectSchema), z.lazy(() => requestsUncheckedUpdateManyWithoutRequest_statusesInputObjectSchema)])
}).strict();
export const requestsUpdateManyWithWhereWithoutRequest_statusesInputObjectSchema: z.ZodType<Prisma.requestsUpdateManyWithWhereWithoutRequest_statusesInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsUpdateManyWithWhereWithoutRequest_statusesInput>;
export const requestsUpdateManyWithWhereWithoutRequest_statusesInputObjectZodSchema = makeSchema();
