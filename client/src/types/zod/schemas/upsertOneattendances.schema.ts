import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { attendancesSelectObjectSchema as attendancesSelectObjectSchema } from './objects/attendancesSelect.schema';
import { attendancesIncludeObjectSchema as attendancesIncludeObjectSchema } from './objects/attendancesInclude.schema';
import { attendancesWhereUniqueInputObjectSchema as attendancesWhereUniqueInputObjectSchema } from './objects/attendancesWhereUniqueInput.schema';
import { attendancesCreateInputObjectSchema as attendancesCreateInputObjectSchema } from './objects/attendancesCreateInput.schema';
import { attendancesUncheckedCreateInputObjectSchema as attendancesUncheckedCreateInputObjectSchema } from './objects/attendancesUncheckedCreateInput.schema';
import { attendancesUpdateInputObjectSchema as attendancesUpdateInputObjectSchema } from './objects/attendancesUpdateInput.schema';
import { attendancesUncheckedUpdateInputObjectSchema as attendancesUncheckedUpdateInputObjectSchema } from './objects/attendancesUncheckedUpdateInput.schema';

export const attendancesUpsertOneSchema: z.ZodType<Prisma.attendancesUpsertArgs> = z.object({ select: attendancesSelectObjectSchema.optional(), include: attendancesIncludeObjectSchema.optional(), where: attendancesWhereUniqueInputObjectSchema, create: z.union([ attendancesCreateInputObjectSchema, attendancesUncheckedCreateInputObjectSchema ]), update: z.union([ attendancesUpdateInputObjectSchema, attendancesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.attendancesUpsertArgs>;

export const attendancesUpsertOneZodSchema = z.object({ select: attendancesSelectObjectSchema.optional(), include: attendancesIncludeObjectSchema.optional(), where: attendancesWhereUniqueInputObjectSchema, create: z.union([ attendancesCreateInputObjectSchema, attendancesUncheckedCreateInputObjectSchema ]), update: z.union([ attendancesUpdateInputObjectSchema, attendancesUncheckedUpdateInputObjectSchema ]) }).strict();