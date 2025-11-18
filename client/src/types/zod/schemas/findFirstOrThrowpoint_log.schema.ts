import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { point_logIncludeObjectSchema as point_logIncludeObjectSchema } from './objects/point_logInclude.schema';
import { point_logOrderByWithRelationInputObjectSchema as point_logOrderByWithRelationInputObjectSchema } from './objects/point_logOrderByWithRelationInput.schema';
import { point_logWhereInputObjectSchema as point_logWhereInputObjectSchema } from './objects/point_logWhereInput.schema';
import { point_logWhereUniqueInputObjectSchema as point_logWhereUniqueInputObjectSchema } from './objects/point_logWhereUniqueInput.schema';
import { PointLogScalarFieldEnumSchema } from './enums/PointLogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const point_logFindFirstOrThrowSelectSchema: z.ZodType<Prisma.point_logSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    change: z.boolean().optional(),
    reason: z.boolean().optional(),
    details: z.boolean().optional(),
    logged_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.point_logSelect>;

export const point_logFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    change: z.boolean().optional(),
    reason: z.boolean().optional(),
    details: z.boolean().optional(),
    logged_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const point_logFindFirstOrThrowSchema: z.ZodType<Prisma.point_logFindFirstOrThrowArgs> = z.object({ select: point_logFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => point_logIncludeObjectSchema.optional()), orderBy: z.union([point_logOrderByWithRelationInputObjectSchema, point_logOrderByWithRelationInputObjectSchema.array()]).optional(), where: point_logWhereInputObjectSchema.optional(), cursor: point_logWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PointLogScalarFieldEnumSchema, PointLogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.point_logFindFirstOrThrowArgs>;

export const point_logFindFirstOrThrowZodSchema = z.object({ select: point_logFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => point_logIncludeObjectSchema.optional()), orderBy: z.union([point_logOrderByWithRelationInputObjectSchema, point_logOrderByWithRelationInputObjectSchema.array()]).optional(), where: point_logWhereInputObjectSchema.optional(), cursor: point_logWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PointLogScalarFieldEnumSchema, PointLogScalarFieldEnumSchema.array()]).optional() }).strict();