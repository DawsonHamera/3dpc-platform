import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const migrationsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => migrationsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => migrationsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => migrationsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => migrationsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => migrationsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  version: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  class: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  group: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  namespace: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  time: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  batch: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const migrationsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.migrationsScalarWhereWithAggregatesInput> = migrationsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.migrationsScalarWhereWithAggregatesInput>;
export const migrationsScalarWhereWithAggregatesInputObjectZodSchema = migrationsscalarwherewithaggregatesinputSchema;
