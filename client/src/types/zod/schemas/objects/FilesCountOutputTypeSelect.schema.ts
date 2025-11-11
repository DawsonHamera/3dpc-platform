import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  events: z.boolean().optional(),
  materials_materials_image_file_idTofiles: z.boolean().optional(),
  materials_materials_texture_file_idTofiles: z.boolean().optional(),
  printers: z.boolean().optional()
}).strict();
export const FilesCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.FilesCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.FilesCountOutputTypeSelect>;
export const FilesCountOutputTypeSelectObjectZodSchema = makeSchema();
