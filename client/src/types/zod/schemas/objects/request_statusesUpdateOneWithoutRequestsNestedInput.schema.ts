import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { request_statusesCreateWithoutRequestsInputObjectSchema as request_statusesCreateWithoutRequestsInputObjectSchema } from './request_statusesCreateWithoutRequestsInput.schema';
import { request_statusesUncheckedCreateWithoutRequestsInputObjectSchema as request_statusesUncheckedCreateWithoutRequestsInputObjectSchema } from './request_statusesUncheckedCreateWithoutRequestsInput.schema';
import { request_statusesCreateOrConnectWithoutRequestsInputObjectSchema as request_statusesCreateOrConnectWithoutRequestsInputObjectSchema } from './request_statusesCreateOrConnectWithoutRequestsInput.schema';
import { request_statusesUpsertWithoutRequestsInputObjectSchema as request_statusesUpsertWithoutRequestsInputObjectSchema } from './request_statusesUpsertWithoutRequestsInput.schema';
import { request_statusesWhereInputObjectSchema as request_statusesWhereInputObjectSchema } from './request_statusesWhereInput.schema';
import { request_statusesWhereUniqueInputObjectSchema as request_statusesWhereUniqueInputObjectSchema } from './request_statusesWhereUniqueInput.schema';
import { request_statusesUpdateToOneWithWhereWithoutRequestsInputObjectSchema as request_statusesUpdateToOneWithWhereWithoutRequestsInputObjectSchema } from './request_statusesUpdateToOneWithWhereWithoutRequestsInput.schema';
import { request_statusesUpdateWithoutRequestsInputObjectSchema as request_statusesUpdateWithoutRequestsInputObjectSchema } from './request_statusesUpdateWithoutRequestsInput.schema';
import { request_statusesUncheckedUpdateWithoutRequestsInputObjectSchema as request_statusesUncheckedUpdateWithoutRequestsInputObjectSchema } from './request_statusesUncheckedUpdateWithoutRequestsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => request_statusesCreateWithoutRequestsInputObjectSchema), z.lazy(() => request_statusesUncheckedCreateWithoutRequestsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => request_statusesCreateOrConnectWithoutRequestsInputObjectSchema).optional(),
  upsert: z.lazy(() => request_statusesUpsertWithoutRequestsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => request_statusesWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => request_statusesWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => request_statusesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => request_statusesUpdateToOneWithWhereWithoutRequestsInputObjectSchema), z.lazy(() => request_statusesUpdateWithoutRequestsInputObjectSchema), z.lazy(() => request_statusesUncheckedUpdateWithoutRequestsInputObjectSchema)]).optional()
}).strict();
export const request_statusesUpdateOneWithoutRequestsNestedInputObjectSchema: z.ZodType<Prisma.request_statusesUpdateOneWithoutRequestsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.request_statusesUpdateOneWithoutRequestsNestedInput>;
export const request_statusesUpdateOneWithoutRequestsNestedInputObjectZodSchema = makeSchema();
