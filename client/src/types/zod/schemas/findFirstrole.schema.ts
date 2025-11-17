import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { roleIncludeObjectSchema as roleIncludeObjectSchema } from './objects/roleInclude.schema';
import { roleOrderByWithRelationInputObjectSchema as roleOrderByWithRelationInputObjectSchema } from './objects/roleOrderByWithRelationInput.schema';
import { roleWhereInputObjectSchema as roleWhereInputObjectSchema } from './objects/roleWhereInput.schema';
import { roleWhereUniqueInputObjectSchema as roleWhereUniqueInputObjectSchema } from './objects/roleWhereUniqueInput.schema';
import { RoleScalarFieldEnumSchema } from './enums/RoleScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const roleFindFirstSelectSchema: z.ZodType<Prisma.roleSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    users: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.roleSelect>;

export const roleFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    users: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const roleFindFirstSchema: z.ZodType<Prisma.roleFindFirstArgs> = z.object({ select: roleFindFirstSelectSchema.optional(), include: z.lazy(() => roleIncludeObjectSchema.optional()), orderBy: z.union([roleOrderByWithRelationInputObjectSchema, roleOrderByWithRelationInputObjectSchema.array()]).optional(), where: roleWhereInputObjectSchema.optional(), cursor: roleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RoleScalarFieldEnumSchema, RoleScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.roleFindFirstArgs>;

export const roleFindFirstZodSchema = z.object({ select: roleFindFirstSelectSchema.optional(), include: z.lazy(() => roleIncludeObjectSchema.optional()), orderBy: z.union([roleOrderByWithRelationInputObjectSchema, roleOrderByWithRelationInputObjectSchema.array()]).optional(), where: roleWhereInputObjectSchema.optional(), cursor: roleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RoleScalarFieldEnumSchema, RoleScalarFieldEnumSchema.array()]).optional() }).strict();