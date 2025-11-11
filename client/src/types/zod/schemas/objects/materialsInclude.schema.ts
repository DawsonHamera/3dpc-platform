import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesArgsObjectSchema as filesArgsObjectSchema } from './filesArgs.schema';
import { printersFindManySchema as printersFindManySchema } from '../findManyprinters.schema';
import { MaterialsCountOutputTypeArgsObjectSchema as MaterialsCountOutputTypeArgsObjectSchema } from './MaterialsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  files_materials_image_file_idTofiles: z.union([z.boolean(), z.lazy(() => filesArgsObjectSchema)]).optional(),
  files_materials_texture_file_idTofiles: z.union([z.boolean(), z.lazy(() => filesArgsObjectSchema)]).optional(),
  printers: z.union([z.boolean(), z.lazy(() => printersFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => MaterialsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const materialsIncludeObjectSchema: z.ZodType<Prisma.materialsInclude> = makeSchema() as unknown as z.ZodType<Prisma.materialsInclude>;
export const materialsIncludeObjectZodSchema = makeSchema();
