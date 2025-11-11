import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { attendancesSelectObjectSchema as attendancesSelectObjectSchema } from './objects/attendancesSelect.schema';
import { attendancesIncludeObjectSchema as attendancesIncludeObjectSchema } from './objects/attendancesInclude.schema';
import { attendancesCreateInputObjectSchema as attendancesCreateInputObjectSchema } from './objects/attendancesCreateInput.schema';
import { attendancesUncheckedCreateInputObjectSchema as attendancesUncheckedCreateInputObjectSchema } from './objects/attendancesUncheckedCreateInput.schema';

export const attendancesCreateOneSchema: z.ZodType<Prisma.attendancesCreateArgs> = z.object({ select: attendancesSelectObjectSchema.optional(), include: attendancesIncludeObjectSchema.optional(), data: z.union([attendancesCreateInputObjectSchema, attendancesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.attendancesCreateArgs>;

export const attendancesCreateOneZodSchema = z.object({ select: attendancesSelectObjectSchema.optional(), include: attendancesIncludeObjectSchema.optional(), data: z.union([attendancesCreateInputObjectSchema, attendancesUncheckedCreateInputObjectSchema]) }).strict();