import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsFindManySchema as productsFindManySchema } from '../findManyproducts.schema';
import { tasksFindManySchema as tasksFindManySchema } from '../findManytasks.schema';
import { ModelsCountOutputTypeArgsObjectSchema as ModelsCountOutputTypeArgsObjectSchema } from './ModelsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  image_file_id: z.boolean().optional(),
  model_file_id: z.boolean().optional(),
  material_slots: z.boolean().optional(),
  estimated_duration: z.boolean().optional(),
  estimated_filament: z.boolean().optional(),
  description: z.boolean().optional(),
  tags: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  deleted_at: z.boolean().optional(),
  products: z.union([z.boolean(), z.lazy(() => productsFindManySchema)]).optional(),
  tasks: z.union([z.boolean(), z.lazy(() => tasksFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ModelsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const modelsSelectObjectSchema: z.ZodType<Prisma.modelsSelect> = makeSchema() as unknown as z.ZodType<Prisma.modelsSelect>;
export const modelsSelectObjectZodSchema = makeSchema();
