import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendancesWhereInputObjectSchema as attendancesWhereInputObjectSchema } from './attendancesWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => attendancesWhereInputObjectSchema).optional(),
  some: z.lazy(() => attendancesWhereInputObjectSchema).optional(),
  none: z.lazy(() => attendancesWhereInputObjectSchema).optional()
}).strict();
export const AttendancesListRelationFilterObjectSchema: z.ZodType<Prisma.AttendancesListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AttendancesListRelationFilter>;
export const AttendancesListRelationFilterObjectZodSchema = makeSchema();
