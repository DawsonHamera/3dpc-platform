import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { activity_logIncludeObjectSchema as activity_logIncludeObjectSchema } from './objects/activity_logInclude.schema';
import { activity_logOrderByWithRelationInputObjectSchema as activity_logOrderByWithRelationInputObjectSchema } from './objects/activity_logOrderByWithRelationInput.schema';
import { activity_logWhereInputObjectSchema as activity_logWhereInputObjectSchema } from './objects/activity_logWhereInput.schema';
import { activity_logWhereUniqueInputObjectSchema as activity_logWhereUniqueInputObjectSchema } from './objects/activity_logWhereUniqueInput.schema';
import { ActivityLogScalarFieldEnumSchema } from './enums/ActivityLogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const activity_logFindFirstSelectSchema: z.ZodType<Prisma.activity_logSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    action_type: z.boolean().optional(),
    table_name: z.boolean().optional(),
    record_id: z.boolean().optional(),
    result: z.boolean().optional(),
    details: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.activity_logSelect>;

export const activity_logFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    action_type: z.boolean().optional(),
    table_name: z.boolean().optional(),
    record_id: z.boolean().optional(),
    result: z.boolean().optional(),
    details: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const activity_logFindFirstSchema: z.ZodType<Prisma.activity_logFindFirstArgs> = z.object({ select: activity_logFindFirstSelectSchema.optional(), include: z.lazy(() => activity_logIncludeObjectSchema.optional()), orderBy: z.union([activity_logOrderByWithRelationInputObjectSchema, activity_logOrderByWithRelationInputObjectSchema.array()]).optional(), where: activity_logWhereInputObjectSchema.optional(), cursor: activity_logWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ActivityLogScalarFieldEnumSchema, ActivityLogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.activity_logFindFirstArgs>;

export const activity_logFindFirstZodSchema = z.object({ select: activity_logFindFirstSelectSchema.optional(), include: z.lazy(() => activity_logIncludeObjectSchema.optional()), orderBy: z.union([activity_logOrderByWithRelationInputObjectSchema, activity_logOrderByWithRelationInputObjectSchema.array()]).optional(), where: activity_logWhereInputObjectSchema.optional(), cursor: activity_logWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ActivityLogScalarFieldEnumSchema, ActivityLogScalarFieldEnumSchema.array()]).optional() }).strict();