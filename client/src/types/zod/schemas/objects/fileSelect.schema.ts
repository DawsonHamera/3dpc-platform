import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventFindManySchema as eventFindManySchema } from '../findManyevent.schema';
import { userArgsObjectSchema as userArgsObjectSchema } from './userArgs.schema';
import { FileCountOutputTypeArgsObjectSchema as FileCountOutputTypeArgsObjectSchema } from './FileCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  original_name: z.boolean().optional(),
  stored_name: z.boolean().optional(),
  mime_type: z.boolean().optional(),
  size: z.boolean().optional(),
  path: z.boolean().optional(),
  uploaded_by: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  deleted_at: z.boolean().optional(),
  description: z.boolean().optional(),
  type: z.boolean().optional(),
  events: z.union([z.boolean(), z.lazy(() => eventFindManySchema)]).optional(),
  uploader: z.union([z.boolean(), z.lazy(() => userArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => FileCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const fileSelectObjectSchema: z.ZodType<Prisma.fileSelect> = makeSchema() as unknown as z.ZodType<Prisma.fileSelect>;
export const fileSelectObjectZodSchema = makeSchema();
