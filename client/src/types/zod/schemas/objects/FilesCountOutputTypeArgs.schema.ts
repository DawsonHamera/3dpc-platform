import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FilesCountOutputTypeSelectObjectSchema as FilesCountOutputTypeSelectObjectSchema } from './FilesCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => FilesCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const FilesCountOutputTypeArgsObjectSchema = makeSchema();
export const FilesCountOutputTypeArgsObjectZodSchema = makeSchema();
