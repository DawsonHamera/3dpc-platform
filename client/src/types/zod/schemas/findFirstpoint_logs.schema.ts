import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { point_logsIncludeObjectSchema as point_logsIncludeObjectSchema } from './objects/point_logsInclude.schema';
import { point_logsOrderByWithRelationInputObjectSchema as point_logsOrderByWithRelationInputObjectSchema } from './objects/point_logsOrderByWithRelationInput.schema';
import { point_logsWhereInputObjectSchema as point_logsWhereInputObjectSchema } from './objects/point_logsWhereInput.schema';
import { point_logsWhereUniqueInputObjectSchema as point_logsWhereUniqueInputObjectSchema } from './objects/point_logsWhereUniqueInput.schema';
import { PointLogsScalarFieldEnumSchema } from './enums/PointLogsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const point_logsFindFirstSelectSchema: z.ZodType<Prisma.point_logsSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    change: z.boolean().optional(),
    reason: z.boolean().optional(),
    details: z.boolean().optional(),
    logged_at: z.boolean().optional(),
    users: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.point_logsSelect>;

export const point_logsFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    change: z.boolean().optional(),
    reason: z.boolean().optional(),
    details: z.boolean().optional(),
    logged_at: z.boolean().optional(),
    users: z.boolean().optional()
  }).strict();

export const point_logsFindFirstSchema: z.ZodType<Prisma.point_logsFindFirstArgs> = z.object({ select: point_logsFindFirstSelectSchema.optional(), include: z.lazy(() => point_logsIncludeObjectSchema.optional()), orderBy: z.union([point_logsOrderByWithRelationInputObjectSchema, point_logsOrderByWithRelationInputObjectSchema.array()]).optional(), where: point_logsWhereInputObjectSchema.optional(), cursor: point_logsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PointLogsScalarFieldEnumSchema, PointLogsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.point_logsFindFirstArgs>;

export const point_logsFindFirstZodSchema = z.object({ select: point_logsFindFirstSelectSchema.optional(), include: z.lazy(() => point_logsIncludeObjectSchema.optional()), orderBy: z.union([point_logsOrderByWithRelationInputObjectSchema, point_logsOrderByWithRelationInputObjectSchema.array()]).optional(), where: point_logsWhereInputObjectSchema.optional(), cursor: point_logsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PointLogsScalarFieldEnumSchema, PointLogsScalarFieldEnumSchema.array()]).optional() }).strict();