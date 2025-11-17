import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventWhereInputObjectSchema as eventWhereInputObjectSchema } from './eventWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => eventWhereInputObjectSchema).optional(),
  some: z.lazy(() => eventWhereInputObjectSchema).optional(),
  none: z.lazy(() => eventWhereInputObjectSchema).optional()
}).strict();
export const EventListRelationFilterObjectSchema: z.ZodType<Prisma.EventListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EventListRelationFilter>;
export const EventListRelationFilterObjectZodSchema = makeSchema();
