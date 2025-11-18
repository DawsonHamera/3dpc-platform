import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { userIncludeObjectSchema as userIncludeObjectSchema } from './objects/userInclude.schema';
import { userOrderByWithRelationInputObjectSchema as userOrderByWithRelationInputObjectSchema } from './objects/userOrderByWithRelationInput.schema';
import { userWhereInputObjectSchema as userWhereInputObjectSchema } from './objects/userWhereInput.schema';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './objects/userWhereUniqueInput.schema';
import { UserScalarFieldEnumSchema } from './enums/UserScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const userFindManySelectSchema: z.ZodType<Prisma.userSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    password_hash: z.boolean().optional(),
    role_id: z.boolean().optional(),
    grade: z.boolean().optional(),
    points: z.boolean().optional(),
    last_active: z.boolean().optional(),
    attendances: z.boolean().optional(),
    events: z.boolean().optional(),
    files: z.boolean().optional(),
    role: z.boolean().optional(),
    activity_logs: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    pointLogs: z.boolean().optional(),
    recycling_logs: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.userSelect>;

export const userFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    password_hash: z.boolean().optional(),
    role_id: z.boolean().optional(),
    grade: z.boolean().optional(),
    points: z.boolean().optional(),
    last_active: z.boolean().optional(),
    attendances: z.boolean().optional(),
    events: z.boolean().optional(),
    files: z.boolean().optional(),
    role: z.boolean().optional(),
    activity_logs: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    pointLogs: z.boolean().optional(),
    recycling_logs: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const userFindManySchema: z.ZodType<Prisma.userFindManyArgs> = z.object({ select: userFindManySelectSchema.optional(), include: z.lazy(() => userIncludeObjectSchema.optional()), orderBy: z.union([userOrderByWithRelationInputObjectSchema, userOrderByWithRelationInputObjectSchema.array()]).optional(), where: userWhereInputObjectSchema.optional(), cursor: userWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.userFindManyArgs>;

export const userFindManyZodSchema = z.object({ select: userFindManySelectSchema.optional(), include: z.lazy(() => userIncludeObjectSchema.optional()), orderBy: z.union([userOrderByWithRelationInputObjectSchema, userOrderByWithRelationInputObjectSchema.array()]).optional(), where: userWhereInputObjectSchema.optional(), cursor: userWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict();