import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesWhereInputObjectSchema as filesWhereInputObjectSchema } from './filesWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => filesWhereInputObjectSchema).optional(),
  some: z.lazy(() => filesWhereInputObjectSchema).optional(),
  none: z.lazy(() => filesWhereInputObjectSchema).optional()
}).strict();
export const FilesListRelationFilterObjectSchema: z.ZodType<Prisma.FilesListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.FilesListRelationFilter>;
export const FilesListRelationFilterObjectZodSchema = makeSchema();
