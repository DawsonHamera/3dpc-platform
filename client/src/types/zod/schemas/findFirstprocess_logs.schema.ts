import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_logsIncludeObjectSchema as process_logsIncludeObjectSchema } from './objects/process_logsInclude.schema';
import { process_logsOrderByWithRelationInputObjectSchema as process_logsOrderByWithRelationInputObjectSchema } from './objects/process_logsOrderByWithRelationInput.schema';
import { process_logsWhereInputObjectSchema as process_logsWhereInputObjectSchema } from './objects/process_logsWhereInput.schema';
import { process_logsWhereUniqueInputObjectSchema as process_logsWhereUniqueInputObjectSchema } from './objects/process_logsWhereUniqueInput.schema';
import { ProcessLogsScalarFieldEnumSchema } from './enums/ProcessLogsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const process_logsFindFirstSelectSchema: z.ZodType<Prisma.process_logsSelect> = z.object({
    id: z.boolean().optional(),
    process_instance_id: z.boolean().optional(),
    step_order: z.boolean().optional(),
    level: z.boolean().optional(),
    action: z.boolean().optional(),
    message: z.boolean().optional(),
    data: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    process_instances: z.boolean().optional(),
    users: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.process_logsSelect>;

export const process_logsFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    process_instance_id: z.boolean().optional(),
    step_order: z.boolean().optional(),
    level: z.boolean().optional(),
    action: z.boolean().optional(),
    message: z.boolean().optional(),
    data: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    process_instances: z.boolean().optional(),
    users: z.boolean().optional()
  }).strict();

export const process_logsFindFirstSchema: z.ZodType<Prisma.process_logsFindFirstArgs> = z.object({ select: process_logsFindFirstSelectSchema.optional(), include: z.lazy(() => process_logsIncludeObjectSchema.optional()), orderBy: z.union([process_logsOrderByWithRelationInputObjectSchema, process_logsOrderByWithRelationInputObjectSchema.array()]).optional(), where: process_logsWhereInputObjectSchema.optional(), cursor: process_logsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProcessLogsScalarFieldEnumSchema, ProcessLogsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.process_logsFindFirstArgs>;

export const process_logsFindFirstZodSchema = z.object({ select: process_logsFindFirstSelectSchema.optional(), include: z.lazy(() => process_logsIncludeObjectSchema.optional()), orderBy: z.union([process_logsOrderByWithRelationInputObjectSchema, process_logsOrderByWithRelationInputObjectSchema.array()]).optional(), where: process_logsWhereInputObjectSchema.optional(), cursor: process_logsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProcessLogsScalarFieldEnumSchema, ProcessLogsScalarFieldEnumSchema.array()]).optional() }).strict();