import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsFindManySchema as eventsFindManySchema } from '../findManyevents.schema';
import { usersArgsObjectSchema as usersArgsObjectSchema } from './usersArgs.schema';
import { materialsFindManySchema as materialsFindManySchema } from '../findManymaterials.schema';
import { printersFindManySchema as printersFindManySchema } from '../findManyprinters.schema';
import { FilesCountOutputTypeArgsObjectSchema as FilesCountOutputTypeArgsObjectSchema } from './FilesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  events: z.union([z.boolean(), z.lazy(() => eventsFindManySchema)]).optional(),
  uploader: z.union([z.boolean(), z.lazy(() => usersArgsObjectSchema)]).optional(),
  materials_materials_image_file_idTofiles: z.union([z.boolean(), z.lazy(() => materialsFindManySchema)]).optional(),
  materials_materials_texture_file_idTofiles: z.union([z.boolean(), z.lazy(() => materialsFindManySchema)]).optional(),
  printers: z.union([z.boolean(), z.lazy(() => printersFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => FilesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const filesIncludeObjectSchema: z.ZodType<Prisma.filesInclude> = makeSchema() as unknown as z.ZodType<Prisma.filesInclude>;
export const filesIncludeObjectZodSchema = makeSchema();
