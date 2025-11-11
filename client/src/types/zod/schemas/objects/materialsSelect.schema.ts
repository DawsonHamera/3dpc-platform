import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesArgsObjectSchema as filesArgsObjectSchema } from './filesArgs.schema';
import { printersFindManySchema as printersFindManySchema } from '../findManyprinters.schema';
import { MaterialsCountOutputTypeArgsObjectSchema as MaterialsCountOutputTypeArgsObjectSchema } from './MaterialsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  hex: z.boolean().optional(),
  texture_file_id: z.boolean().optional(),
  image_file_id: z.boolean().optional(),
  type: z.boolean().optional(),
  vendor: z.boolean().optional(),
  min_temp: z.boolean().optional(),
  max_temp: z.boolean().optional(),
  details: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  deleted_at: z.boolean().optional(),
  texture_url: z.boolean().optional(),
  cost: z.boolean().optional(),
  cost_unit: z.boolean().optional(),
  supplier: z.boolean().optional(),
  safety_data: z.boolean().optional(),
  density: z.boolean().optional(),
  files_materials_image_file_idTofiles: z.union([z.boolean(), z.lazy(() => filesArgsObjectSchema)]).optional(),
  files_materials_texture_file_idTofiles: z.union([z.boolean(), z.lazy(() => filesArgsObjectSchema)]).optional(),
  printers: z.union([z.boolean(), z.lazy(() => printersFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => MaterialsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const materialsSelectObjectSchema: z.ZodType<Prisma.materialsSelect> = makeSchema() as unknown as z.ZodType<Prisma.materialsSelect>;
export const materialsSelectObjectZodSchema = makeSchema();
