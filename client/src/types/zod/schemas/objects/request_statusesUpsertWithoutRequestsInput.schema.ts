import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { request_statusesUpdateWithoutRequestsInputObjectSchema as request_statusesUpdateWithoutRequestsInputObjectSchema } from './request_statusesUpdateWithoutRequestsInput.schema';
import { request_statusesUncheckedUpdateWithoutRequestsInputObjectSchema as request_statusesUncheckedUpdateWithoutRequestsInputObjectSchema } from './request_statusesUncheckedUpdateWithoutRequestsInput.schema';
import { request_statusesCreateWithoutRequestsInputObjectSchema as request_statusesCreateWithoutRequestsInputObjectSchema } from './request_statusesCreateWithoutRequestsInput.schema';
import { request_statusesUncheckedCreateWithoutRequestsInputObjectSchema as request_statusesUncheckedCreateWithoutRequestsInputObjectSchema } from './request_statusesUncheckedCreateWithoutRequestsInput.schema';
import { request_statusesWhereInputObjectSchema as request_statusesWhereInputObjectSchema } from './request_statusesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => request_statusesUpdateWithoutRequestsInputObjectSchema), z.lazy(() => request_statusesUncheckedUpdateWithoutRequestsInputObjectSchema)]),
  create: z.union([z.lazy(() => request_statusesCreateWithoutRequestsInputObjectSchema), z.lazy(() => request_statusesUncheckedCreateWithoutRequestsInputObjectSchema)]),
  where: z.lazy(() => request_statusesWhereInputObjectSchema).optional()
}).strict();
export const request_statusesUpsertWithoutRequestsInputObjectSchema: z.ZodType<Prisma.request_statusesUpsertWithoutRequestsInput> = makeSchema() as unknown as z.ZodType<Prisma.request_statusesUpsertWithoutRequestsInput>;
export const request_statusesUpsertWithoutRequestsInputObjectZodSchema = makeSchema();
