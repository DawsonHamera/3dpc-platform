import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable()
}).strict();
export const request_statusesUncheckedCreateWithoutRequestsInputObjectSchema: z.ZodType<Prisma.request_statusesUncheckedCreateWithoutRequestsInput> = makeSchema() as unknown as z.ZodType<Prisma.request_statusesUncheckedCreateWithoutRequestsInput>;
export const request_statusesUncheckedCreateWithoutRequestsInputObjectZodSchema = makeSchema();
