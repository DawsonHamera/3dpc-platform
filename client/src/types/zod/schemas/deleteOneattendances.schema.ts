import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { attendancesSelectObjectSchema as attendancesSelectObjectSchema } from './objects/attendancesSelect.schema';
import { attendancesIncludeObjectSchema as attendancesIncludeObjectSchema } from './objects/attendancesInclude.schema';
import { attendancesWhereUniqueInputObjectSchema as attendancesWhereUniqueInputObjectSchema } from './objects/attendancesWhereUniqueInput.schema';

export const attendancesDeleteOneSchema: z.ZodType<Prisma.attendancesDeleteArgs> = z.object({ select: attendancesSelectObjectSchema.optional(), include: attendancesIncludeObjectSchema.optional(), where: attendancesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.attendancesDeleteArgs>;

export const attendancesDeleteOneZodSchema = z.object({ select: attendancesSelectObjectSchema.optional(), include: attendancesIncludeObjectSchema.optional(), where: attendancesWhereUniqueInputObjectSchema }).strict();