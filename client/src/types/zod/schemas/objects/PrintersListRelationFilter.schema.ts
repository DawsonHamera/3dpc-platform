import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersWhereInputObjectSchema as printersWhereInputObjectSchema } from './printersWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => printersWhereInputObjectSchema).optional(),
  some: z.lazy(() => printersWhereInputObjectSchema).optional(),
  none: z.lazy(() => printersWhereInputObjectSchema).optional()
}).strict();
export const PrintersListRelationFilterObjectSchema: z.ZodType<Prisma.PrintersListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PrintersListRelationFilter>;
export const PrintersListRelationFilterObjectZodSchema = makeSchema();
