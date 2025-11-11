import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { migrationsSelectObjectSchema as migrationsSelectObjectSchema } from './migrationsSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => migrationsSelectObjectSchema).optional()
}).strict();
export const migrationsArgsObjectSchema = makeSchema();
export const migrationsArgsObjectZodSchema = makeSchema();
