import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  submitted_by: z.string().max(255).optional().nullable(),
  email: z.string().max(255).optional().nullable(),
  comments: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  requested_date: z.coerce.date().optional().nullable(),
  due_date: z.coerce.date().optional().nullable(),
  priority: z.number().int().optional().nullable()
}).strict();
export const requestsCreateManyRequest_statusesInputObjectSchema: z.ZodType<Prisma.requestsCreateManyRequest_statusesInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsCreateManyRequest_statusesInput>;
export const requestsCreateManyRequest_statusesInputObjectZodSchema = makeSchema();
