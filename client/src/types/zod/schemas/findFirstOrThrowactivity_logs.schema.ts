import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { activity_logsIncludeObjectSchema as activity_logsIncludeObjectSchema } from './objects/activity_logsInclude.schema';
import { activity_logsOrderByWithRelationInputObjectSchema as activity_logsOrderByWithRelationInputObjectSchema } from './objects/activity_logsOrderByWithRelationInput.schema';
import { activity_logsWhereInputObjectSchema as activity_logsWhereInputObjectSchema } from './objects/activity_logsWhereInput.schema';
import { activity_logsWhereUniqueInputObjectSchema as activity_logsWhereUniqueInputObjectSchema } from './objects/activity_logsWhereUniqueInput.schema';
import { ActivityLogsScalarFieldEnumSchema } from './enums/ActivityLogsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const activity_logsFindFirstOrThrowSelectSchema: z.ZodType<Prisma.activity_logsSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    action_type: z.boolean().optional(),
    table_name: z.boolean().optional(),
    record_id: z.boolean().optional(),
    result: z.boolean().optional(),
    details: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.activity_logsSelect>;

export const activity_logsFindFirstOrThrowSelectZodSchema = z.object({
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

export const activity_logsFindFirstOrThrowSchema: z.ZodType<Prisma.activity_logsFindFirstOrThrowArgs> = z.object({ select: activity_logsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => activity_logsIncludeObjectSchema.optional()), orderBy: z.union([activity_logsOrderByWithRelationInputObjectSchema, activity_logsOrderByWithRelationInputObjectSchema.array()]).optional(), where: activity_logsWhereInputObjectSchema.optional(), cursor: activity_logsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ActivityLogsScalarFieldEnumSchema, ActivityLogsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.activity_logsFindFirstOrThrowArgs>;

export const activity_logsFindFirstOrThrowZodSchema = z.object({ select: activity_logsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => activity_logsIncludeObjectSchema.optional()), orderBy: z.union([activity_logsOrderByWithRelationInputObjectSchema, activity_logsOrderByWithRelationInputObjectSchema.array()]).optional(), where: activity_logsWhereInputObjectSchema.optional(), cursor: activity_logsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ActivityLogsScalarFieldEnumSchema, ActivityLogsScalarFieldEnumSchema.array()]).optional() }).strict();