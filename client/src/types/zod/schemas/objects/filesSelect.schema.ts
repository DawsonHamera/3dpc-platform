import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsFindManySchema as eventsFindManySchema } from '../findManyevents.schema';
import { usersArgsObjectSchema as usersArgsObjectSchema } from './usersArgs.schema';
import { materialsFindManySchema as materialsFindManySchema } from '../findManymaterials.schema';
import { printersFindManySchema as printersFindManySchema } from '../findManyprinters.schema';
import { FilesCountOutputTypeArgsObjectSchema as FilesCountOutputTypeArgsObjectSchema } from './FilesCountOutputTypeArgs.schema'

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
  events: z.union([z.boolean(), z.lazy(() => eventsFindManySchema)]).optional(),
  uploader: z.union([z.boolean(), z.lazy(() => usersArgsObjectSchema)]).optional(),
  materials_materials_image_file_idTofiles: z.union([z.boolean(), z.lazy(() => materialsFindManySchema)]).optional(),
  materials_materials_texture_file_idTofiles: z.union([z.boolean(), z.lazy(() => materialsFindManySchema)]).optional(),
  printers: z.union([z.boolean(), z.lazy(() => printersFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => FilesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const filesSelectObjectSchema: z.ZodType<Prisma.filesSelect> = makeSchema() as unknown as z.ZodType<Prisma.filesSelect>;
export const filesSelectObjectZodSchema = makeSchema();
