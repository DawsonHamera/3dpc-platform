import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { request_statusesCreateWithoutRequestsInputObjectSchema as request_statusesCreateWithoutRequestsInputObjectSchema } from './request_statusesCreateWithoutRequestsInput.schema';
import { request_statusesUncheckedCreateWithoutRequestsInputObjectSchema as request_statusesUncheckedCreateWithoutRequestsInputObjectSchema } from './request_statusesUncheckedCreateWithoutRequestsInput.schema';
import { request_statusesCreateOrConnectWithoutRequestsInputObjectSchema as request_statusesCreateOrConnectWithoutRequestsInputObjectSchema } from './request_statusesCreateOrConnectWithoutRequestsInput.schema';
import { request_statusesWhereUniqueInputObjectSchema as request_statusesWhereUniqueInputObjectSchema } from './request_statusesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => request_statusesCreateWithoutRequestsInputObjectSchema), z.lazy(() => request_statusesUncheckedCreateWithoutRequestsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => request_statusesCreateOrConnectWithoutRequestsInputObjectSchema).optional(),
  connect: z.lazy(() => request_statusesWhereUniqueInputObjectSchema).optional()
}).strict();
export const request_statusesCreateNestedOneWithoutRequestsInputObjectSchema: z.ZodType<Prisma.request_statusesCreateNestedOneWithoutRequestsInput> = makeSchema() as unknown as z.ZodType<Prisma.request_statusesCreateNestedOneWithoutRequestsInput>;
export const request_statusesCreateNestedOneWithoutRequestsInputObjectZodSchema = makeSchema();
