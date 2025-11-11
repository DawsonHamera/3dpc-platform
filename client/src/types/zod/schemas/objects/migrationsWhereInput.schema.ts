import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const migrationswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => migrationsWhereInputObjectSchema), z.lazy(() => migrationsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => migrationsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => migrationsWhereInputObjectSchema), z.lazy(() => migrationsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  version: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  class: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  group: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  namespace: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  time: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  batch: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const migrationsWhereInputObjectSchema: z.ZodType<Prisma.migrationsWhereInput> = migrationswhereinputSchema as unknown as z.ZodType<Prisma.migrationsWhereInput>;
export const migrationsWhereInputObjectZodSchema = migrationswhereinputSchema;
