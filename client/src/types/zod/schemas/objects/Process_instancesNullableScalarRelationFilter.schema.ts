import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesWhereInputObjectSchema as process_instancesWhereInputObjectSchema } from './process_instancesWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => process_instancesWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => process_instancesWhereInputObjectSchema).optional().nullable()
}).strict();
export const Process_instancesNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.Process_instancesNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Process_instancesNullableScalarRelationFilter>;
export const Process_instancesNullableScalarRelationFilterObjectZodSchema = makeSchema();
