import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { PrintersListRelationFilterObjectSchema as PrintersListRelationFilterObjectSchema } from './PrintersListRelationFilter.schema'

const printer_statuseswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => printer_statusesWhereInputObjectSchema), z.lazy(() => printer_statusesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => printer_statusesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => printer_statusesWhereInputObjectSchema), z.lazy(() => printer_statusesWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(100)]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  printers: z.lazy(() => PrintersListRelationFilterObjectSchema).optional()
}).strict();
export const printer_statusesWhereInputObjectSchema: z.ZodType<Prisma.printer_statusesWhereInput> = printer_statuseswhereinputSchema as unknown as z.ZodType<Prisma.printer_statusesWhereInput>;
export const printer_statusesWhereInputObjectZodSchema = printer_statuseswhereinputSchema;
