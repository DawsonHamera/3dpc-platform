import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { attendancesSelectObjectSchema as attendancesSelectObjectSchema } from './objects/attendancesSelect.schema';
import { attendancesIncludeObjectSchema as attendancesIncludeObjectSchema } from './objects/attendancesInclude.schema';
import { attendancesUpdateInputObjectSchema as attendancesUpdateInputObjectSchema } from './objects/attendancesUpdateInput.schema';
import { attendancesUncheckedUpdateInputObjectSchema as attendancesUncheckedUpdateInputObjectSchema } from './objects/attendancesUncheckedUpdateInput.schema';
import { attendancesWhereUniqueInputObjectSchema as attendancesWhereUniqueInputObjectSchema } from './objects/attendancesWhereUniqueInput.schema';

export const attendancesUpdateOneSchema: z.ZodType<Prisma.attendancesUpdateArgs> = z.object({ select: attendancesSelectObjectSchema.optional(), include: attendancesIncludeObjectSchema.optional(), data: z.union([attendancesUpdateInputObjectSchema, attendancesUncheckedUpdateInputObjectSchema]), where: attendancesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.attendancesUpdateArgs>;

export const attendancesUpdateOneZodSchema = z.object({ select: attendancesSelectObjectSchema.optional(), include: attendancesIncludeObjectSchema.optional(), data: z.union([attendancesUpdateInputObjectSchema, attendancesUncheckedUpdateInputObjectSchema]), where: attendancesWhereUniqueInputObjectSchema }).strict();