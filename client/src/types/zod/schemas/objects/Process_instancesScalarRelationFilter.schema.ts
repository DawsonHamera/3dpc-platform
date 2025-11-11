import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesWhereInputObjectSchema as process_instancesWhereInputObjectSchema } from './process_instancesWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => process_instancesWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => process_instancesWhereInputObjectSchema).optional()
}).strict();
export const Process_instancesScalarRelationFilterObjectSchema: z.ZodType<Prisma.Process_instancesScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Process_instancesScalarRelationFilter>;
export const Process_instancesScalarRelationFilterObjectZodSchema = makeSchema();
