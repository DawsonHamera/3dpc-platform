import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { attendanceIncludeObjectSchema as attendanceIncludeObjectSchema } from './objects/attendanceInclude.schema';
import { attendanceOrderByWithRelationInputObjectSchema as attendanceOrderByWithRelationInputObjectSchema } from './objects/attendanceOrderByWithRelationInput.schema';
import { attendanceWhereInputObjectSchema as attendanceWhereInputObjectSchema } from './objects/attendanceWhereInput.schema';
import { attendanceWhereUniqueInputObjectSchema as attendanceWhereUniqueInputObjectSchema } from './objects/attendanceWhereUniqueInput.schema';
import { AttendanceScalarFieldEnumSchema } from './enums/AttendanceScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const attendanceFindManySelectSchema: z.ZodType<Prisma.attendanceSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    event_id: z.boolean().optional(),
    status: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    rsvp_time: z.boolean().optional(),
    arrival_time: z.boolean().optional(),
    event: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.attendanceSelect>;

export const attendanceFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    event_id: z.boolean().optional(),
    status: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    rsvp_time: z.boolean().optional(),
    arrival_time: z.boolean().optional(),
    event: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const attendanceFindManySchema: z.ZodType<Prisma.attendanceFindManyArgs> = z.object({ select: attendanceFindManySelectSchema.optional(), include: z.lazy(() => attendanceIncludeObjectSchema.optional()), orderBy: z.union([attendanceOrderByWithRelationInputObjectSchema, attendanceOrderByWithRelationInputObjectSchema.array()]).optional(), where: attendanceWhereInputObjectSchema.optional(), cursor: attendanceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AttendanceScalarFieldEnumSchema, AttendanceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.attendanceFindManyArgs>;

export const attendanceFindManyZodSchema = z.object({ select: attendanceFindManySelectSchema.optional(), include: z.lazy(() => attendanceIncludeObjectSchema.optional()), orderBy: z.union([attendanceOrderByWithRelationInputObjectSchema, attendanceOrderByWithRelationInputObjectSchema.array()]).optional(), where: attendanceWhereInputObjectSchema.optional(), cursor: attendanceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AttendanceScalarFieldEnumSchema, AttendanceScalarFieldEnumSchema.array()]).optional() }).strict();