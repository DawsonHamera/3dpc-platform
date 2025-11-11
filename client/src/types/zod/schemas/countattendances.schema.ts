import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { attendancesOrderByWithRelationInputObjectSchema as attendancesOrderByWithRelationInputObjectSchema } from './objects/attendancesOrderByWithRelationInput.schema';
import { attendancesWhereInputObjectSchema as attendancesWhereInputObjectSchema } from './objects/attendancesWhereInput.schema';
import { attendancesWhereUniqueInputObjectSchema as attendancesWhereUniqueInputObjectSchema } from './objects/attendancesWhereUniqueInput.schema';
import { AttendancesCountAggregateInputObjectSchema as AttendancesCountAggregateInputObjectSchema } from './objects/AttendancesCountAggregateInput.schema';

export const attendancesCountSchema: z.ZodType<Prisma.attendancesCountArgs> = z.object({ orderBy: z.union([attendancesOrderByWithRelationInputObjectSchema, attendancesOrderByWithRelationInputObjectSchema.array()]).optional(), where: attendancesWhereInputObjectSchema.optional(), cursor: attendancesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AttendancesCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.attendancesCountArgs>;

export const attendancesCountZodSchema = z.object({ orderBy: z.union([attendancesOrderByWithRelationInputObjectSchema, attendancesOrderByWithRelationInputObjectSchema.array()]).optional(), where: attendancesWhereInputObjectSchema.optional(), cursor: attendancesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AttendancesCountAggregateInputObjectSchema ]).optional() }).strict();