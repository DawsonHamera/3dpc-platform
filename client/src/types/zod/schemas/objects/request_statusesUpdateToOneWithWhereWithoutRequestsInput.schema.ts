import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { request_statusesWhereInputObjectSchema as request_statusesWhereInputObjectSchema } from './request_statusesWhereInput.schema';
import { request_statusesUpdateWithoutRequestsInputObjectSchema as request_statusesUpdateWithoutRequestsInputObjectSchema } from './request_statusesUpdateWithoutRequestsInput.schema';
import { request_statusesUncheckedUpdateWithoutRequestsInputObjectSchema as request_statusesUncheckedUpdateWithoutRequestsInputObjectSchema } from './request_statusesUncheckedUpdateWithoutRequestsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => request_statusesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => request_statusesUpdateWithoutRequestsInputObjectSchema), z.lazy(() => request_statusesUncheckedUpdateWithoutRequestsInputObjectSchema)])
}).strict();
export const request_statusesUpdateToOneWithWhereWithoutRequestsInputObjectSchema: z.ZodType<Prisma.request_statusesUpdateToOneWithWhereWithoutRequestsInput> = makeSchema() as unknown as z.ZodType<Prisma.request_statusesUpdateToOneWithWhereWithoutRequestsInput>;
export const request_statusesUpdateToOneWithWhereWithoutRequestsInputObjectZodSchema = makeSchema();
