import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { fileWhereInputObjectSchema as fileWhereInputObjectSchema } from './fileWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => fileWhereInputObjectSchema).optional(),
  some: z.lazy(() => fileWhereInputObjectSchema).optional(),
  none: z.lazy(() => fileWhereInputObjectSchema).optional()
}).strict();
export const FileListRelationFilterObjectSchema: z.ZodType<Prisma.FileListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.FileListRelationFilter>;
export const FileListRelationFilterObjectZodSchema = makeSchema();
