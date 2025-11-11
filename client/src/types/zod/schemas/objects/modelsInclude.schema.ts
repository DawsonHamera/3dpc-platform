import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsFindManySchema as productsFindManySchema } from '../findManyproducts.schema';
import { tasksFindManySchema as tasksFindManySchema } from '../findManytasks.schema';
import { ModelsCountOutputTypeArgsObjectSchema as ModelsCountOutputTypeArgsObjectSchema } from './ModelsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  products: z.union([z.boolean(), z.lazy(() => productsFindManySchema)]).optional(),
  tasks: z.union([z.boolean(), z.lazy(() => tasksFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ModelsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const modelsIncludeObjectSchema: z.ZodType<Prisma.modelsInclude> = makeSchema() as unknown as z.ZodType<Prisma.modelsInclude>;
export const modelsIncludeObjectZodSchema = makeSchema();
