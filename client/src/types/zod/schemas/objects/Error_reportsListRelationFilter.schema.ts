import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsWhereInputObjectSchema as error_reportsWhereInputObjectSchema } from './error_reportsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => error_reportsWhereInputObjectSchema).optional(),
  some: z.lazy(() => error_reportsWhereInputObjectSchema).optional(),
  none: z.lazy(() => error_reportsWhereInputObjectSchema).optional()
}).strict();
export const Error_reportsListRelationFilterObjectSchema: z.ZodType<Prisma.Error_reportsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Error_reportsListRelationFilter>;
export const Error_reportsListRelationFilterObjectZodSchema = makeSchema();
