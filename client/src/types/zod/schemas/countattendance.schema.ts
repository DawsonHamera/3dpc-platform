import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { attendanceOrderByWithRelationInputObjectSchema as attendanceOrderByWithRelationInputObjectSchema } from './objects/attendanceOrderByWithRelationInput.schema';
import { attendanceWhereInputObjectSchema as attendanceWhereInputObjectSchema } from './objects/attendanceWhereInput.schema';
import { attendanceWhereUniqueInputObjectSchema as attendanceWhereUniqueInputObjectSchema } from './objects/attendanceWhereUniqueInput.schema';
import { AttendanceCountAggregateInputObjectSchema as AttendanceCountAggregateInputObjectSchema } from './objects/AttendanceCountAggregateInput.schema';

export const attendanceCountSchema: z.ZodType<Prisma.attendanceCountArgs> = z.object({ orderBy: z.union([attendanceOrderByWithRelationInputObjectSchema, attendanceOrderByWithRelationInputObjectSchema.array()]).optional(), where: attendanceWhereInputObjectSchema.optional(), cursor: attendanceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AttendanceCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.attendanceCountArgs>;

export const attendanceCountZodSchema = z.object({ orderBy: z.union([attendanceOrderByWithRelationInputObjectSchema, attendanceOrderByWithRelationInputObjectSchema.array()]).optional(), where: attendanceWhereInputObjectSchema.optional(), cursor: attendanceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AttendanceCountAggregateInputObjectSchema ]).optional() }).strict();