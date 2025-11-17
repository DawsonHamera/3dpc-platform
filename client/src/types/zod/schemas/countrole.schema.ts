import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { roleOrderByWithRelationInputObjectSchema as roleOrderByWithRelationInputObjectSchema } from './objects/roleOrderByWithRelationInput.schema';
import { roleWhereInputObjectSchema as roleWhereInputObjectSchema } from './objects/roleWhereInput.schema';
import { roleWhereUniqueInputObjectSchema as roleWhereUniqueInputObjectSchema } from './objects/roleWhereUniqueInput.schema';
import { RoleCountAggregateInputObjectSchema as RoleCountAggregateInputObjectSchema } from './objects/RoleCountAggregateInput.schema';

export const roleCountSchema: z.ZodType<Prisma.roleCountArgs> = z.object({ orderBy: z.union([roleOrderByWithRelationInputObjectSchema, roleOrderByWithRelationInputObjectSchema.array()]).optional(), where: roleWhereInputObjectSchema.optional(), cursor: roleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RoleCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.roleCountArgs>;

export const roleCountZodSchema = z.object({ orderBy: z.union([roleOrderByWithRelationInputObjectSchema, roleOrderByWithRelationInputObjectSchema.array()]).optional(), where: roleWhereInputObjectSchema.optional(), cursor: roleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RoleCountAggregateInputObjectSchema ]).optional() }).strict();