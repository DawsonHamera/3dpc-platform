import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const process_template_stepsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => process_template_stepsScalarWhereInputObjectSchema), z.lazy(() => process_template_stepsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => process_template_stepsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => process_template_stepsScalarWhereInputObjectSchema), z.lazy(() => process_template_stepsScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  process_template_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  step_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  step_order: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  is_required: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const process_template_stepsScalarWhereInputObjectSchema: z.ZodType<Prisma.process_template_stepsScalarWhereInput> = process_template_stepsscalarwhereinputSchema as unknown as z.ZodType<Prisma.process_template_stepsScalarWhereInput>;
export const process_template_stepsScalarWhereInputObjectZodSchema = process_template_stepsscalarwhereinputSchema;
