import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { attendanceSelectObjectSchema as attendanceSelectObjectSchema } from './objects/attendanceSelect.schema';
import { attendanceIncludeObjectSchema as attendanceIncludeObjectSchema } from './objects/attendanceInclude.schema';
import { attendanceWhereUniqueInputObjectSchema as attendanceWhereUniqueInputObjectSchema } from './objects/attendanceWhereUniqueInput.schema';
import { attendanceCreateInputObjectSchema as attendanceCreateInputObjectSchema } from './objects/attendanceCreateInput.schema';
import { attendanceUncheckedCreateInputObjectSchema as attendanceUncheckedCreateInputObjectSchema } from './objects/attendanceUncheckedCreateInput.schema';
import { attendanceUpdateInputObjectSchema as attendanceUpdateInputObjectSchema } from './objects/attendanceUpdateInput.schema';
import { attendanceUncheckedUpdateInputObjectSchema as attendanceUncheckedUpdateInputObjectSchema } from './objects/attendanceUncheckedUpdateInput.schema';

export const attendanceUpsertOneSchema: z.ZodType<Prisma.attendanceUpsertArgs> = z.object({ select: attendanceSelectObjectSchema.optional(), include: attendanceIncludeObjectSchema.optional(), where: attendanceWhereUniqueInputObjectSchema, create: z.union([ attendanceCreateInputObjectSchema, attendanceUncheckedCreateInputObjectSchema ]), update: z.union([ attendanceUpdateInputObjectSchema, attendanceUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.attendanceUpsertArgs>;

export const attendanceUpsertOneZodSchema = z.object({ select: attendanceSelectObjectSchema.optional(), include: attendanceIncludeObjectSchema.optional(), where: attendanceWhereUniqueInputObjectSchema, create: z.union([ attendanceCreateInputObjectSchema, attendanceUncheckedCreateInputObjectSchema ]), update: z.union([ attendanceUpdateInputObjectSchema, attendanceUncheckedUpdateInputObjectSchema ]) }).strict();