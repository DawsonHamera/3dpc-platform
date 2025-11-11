import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { rolesIncludeObjectSchema as rolesIncludeObjectSchema } from './objects/rolesInclude.schema';
import { rolesOrderByWithRelationInputObjectSchema as rolesOrderByWithRelationInputObjectSchema } from './objects/rolesOrderByWithRelationInput.schema';
import { rolesWhereInputObjectSchema as rolesWhereInputObjectSchema } from './objects/rolesWhereInput.schema';
import { rolesWhereUniqueInputObjectSchema as rolesWhereUniqueInputObjectSchema } from './objects/rolesWhereUniqueInput.schema';
import { RolesScalarFieldEnumSchema } from './enums/RolesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const rolesFindFirstOrThrowSelectSchema: z.ZodType<Prisma.rolesSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    users: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.rolesSelect>;

export const rolesFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    users: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const rolesFindFirstOrThrowSchema: z.ZodType<Prisma.rolesFindFirstOrThrowArgs> = z.object({ select: rolesFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => rolesIncludeObjectSchema.optional()), orderBy: z.union([rolesOrderByWithRelationInputObjectSchema, rolesOrderByWithRelationInputObjectSchema.array()]).optional(), where: rolesWhereInputObjectSchema.optional(), cursor: rolesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RolesScalarFieldEnumSchema, RolesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.rolesFindFirstOrThrowArgs>;

export const rolesFindFirstOrThrowZodSchema = z.object({ select: rolesFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => rolesIncludeObjectSchema.optional()), orderBy: z.union([rolesOrderByWithRelationInputObjectSchema, rolesOrderByWithRelationInputObjectSchema.array()]).optional(), where: rolesWhereInputObjectSchema.optional(), cursor: rolesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RolesScalarFieldEnumSchema, RolesScalarFieldEnumSchema.array()]).optional() }).strict();