import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { usersIncludeObjectSchema as usersIncludeObjectSchema } from './objects/usersInclude.schema';
import { usersOrderByWithRelationInputObjectSchema as usersOrderByWithRelationInputObjectSchema } from './objects/usersOrderByWithRelationInput.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './objects/usersWhereInput.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './objects/usersWhereUniqueInput.schema';
import { UsersScalarFieldEnumSchema } from './enums/UsersScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const usersFindFirstSelectSchema: z.ZodType<Prisma.usersSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    password_hash: z.boolean().optional(),
    role_id: z.boolean().optional(),
    grade_id: z.boolean().optional(),
    score: z.boolean().optional(),
    last_active: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    attendances: z.boolean().optional(),
    error_reports: z.boolean().optional(),
    events: z.boolean().optional(),
    files: z.boolean().optional(),
    point_logs: z.boolean().optional(),
    process_instance_steps: z.boolean().optional(),
    process_instances: z.boolean().optional(),
    process_logs: z.boolean().optional(),
    tasks: z.boolean().optional(),
    grade: z.boolean().optional(),
    role: z.boolean().optional(),
    activity_logs: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.usersSelect>;

export const usersFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    password_hash: z.boolean().optional(),
    role_id: z.boolean().optional(),
    grade_id: z.boolean().optional(),
    score: z.boolean().optional(),
    last_active: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    attendances: z.boolean().optional(),
    error_reports: z.boolean().optional(),
    events: z.boolean().optional(),
    files: z.boolean().optional(),
    point_logs: z.boolean().optional(),
    process_instance_steps: z.boolean().optional(),
    process_instances: z.boolean().optional(),
    process_logs: z.boolean().optional(),
    tasks: z.boolean().optional(),
    grade: z.boolean().optional(),
    role: z.boolean().optional(),
    activity_logs: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const usersFindFirstSchema: z.ZodType<Prisma.usersFindFirstArgs> = z.object({ select: usersFindFirstSelectSchema.optional(), include: z.lazy(() => usersIncludeObjectSchema.optional()), orderBy: z.union([usersOrderByWithRelationInputObjectSchema, usersOrderByWithRelationInputObjectSchema.array()]).optional(), where: usersWhereInputObjectSchema.optional(), cursor: usersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UsersScalarFieldEnumSchema, UsersScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.usersFindFirstArgs>;

export const usersFindFirstZodSchema = z.object({ select: usersFindFirstSelectSchema.optional(), include: z.lazy(() => usersIncludeObjectSchema.optional()), orderBy: z.union([usersOrderByWithRelationInputObjectSchema, usersOrderByWithRelationInputObjectSchema.array()]).optional(), where: usersWhereInputObjectSchema.optional(), cursor: usersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UsersScalarFieldEnumSchema, UsersScalarFieldEnumSchema.array()]).optional() }).strict();