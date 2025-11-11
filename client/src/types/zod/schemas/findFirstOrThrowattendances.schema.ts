import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { attendancesIncludeObjectSchema as attendancesIncludeObjectSchema } from './objects/attendancesInclude.schema';
import { attendancesOrderByWithRelationInputObjectSchema as attendancesOrderByWithRelationInputObjectSchema } from './objects/attendancesOrderByWithRelationInput.schema';
import { attendancesWhereInputObjectSchema as attendancesWhereInputObjectSchema } from './objects/attendancesWhereInput.schema';
import { attendancesWhereUniqueInputObjectSchema as attendancesWhereUniqueInputObjectSchema } from './objects/attendancesWhereUniqueInput.schema';
import { AttendancesScalarFieldEnumSchema } from './enums/AttendancesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const attendancesFindFirstOrThrowSelectSchema: z.ZodType<Prisma.attendancesSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    event_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    arrival_time: z.boolean().optional(),
    event: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.attendancesSelect>;

export const attendancesFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    event_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    arrival_time: z.boolean().optional(),
    event: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const attendancesFindFirstOrThrowSchema: z.ZodType<Prisma.attendancesFindFirstOrThrowArgs> = z.object({ select: attendancesFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => attendancesIncludeObjectSchema.optional()), orderBy: z.union([attendancesOrderByWithRelationInputObjectSchema, attendancesOrderByWithRelationInputObjectSchema.array()]).optional(), where: attendancesWhereInputObjectSchema.optional(), cursor: attendancesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AttendancesScalarFieldEnumSchema, AttendancesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.attendancesFindFirstOrThrowArgs>;

export const attendancesFindFirstOrThrowZodSchema = z.object({ select: attendancesFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => attendancesIncludeObjectSchema.optional()), orderBy: z.union([attendancesOrderByWithRelationInputObjectSchema, attendancesOrderByWithRelationInputObjectSchema.array()]).optional(), where: attendancesWhereInputObjectSchema.optional(), cursor: attendancesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AttendancesScalarFieldEnumSchema, AttendancesScalarFieldEnumSchema.array()]).optional() }).strict();