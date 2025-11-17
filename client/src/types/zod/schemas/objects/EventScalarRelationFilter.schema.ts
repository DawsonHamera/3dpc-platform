import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventWhereInputObjectSchema as eventWhereInputObjectSchema } from './eventWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => eventWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => eventWhereInputObjectSchema).optional()
}).strict();
export const EventScalarRelationFilterObjectSchema: z.ZodType<Prisma.EventScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EventScalarRelationFilter>;
export const EventScalarRelationFilterObjectZodSchema = makeSchema();
