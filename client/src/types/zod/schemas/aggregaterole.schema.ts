import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { roleOrderByWithRelationInputObjectSchema as roleOrderByWithRelationInputObjectSchema } from './objects/roleOrderByWithRelationInput.schema';
import { roleWhereInputObjectSchema as roleWhereInputObjectSchema } from './objects/roleWhereInput.schema';
import { roleWhereUniqueInputObjectSchema as roleWhereUniqueInputObjectSchema } from './objects/roleWhereUniqueInput.schema';
import { RoleCountAggregateInputObjectSchema as RoleCountAggregateInputObjectSchema } from './objects/RoleCountAggregateInput.schema';
import { RoleMinAggregateInputObjectSchema as RoleMinAggregateInputObjectSchema } from './objects/RoleMinAggregateInput.schema';
import { RoleMaxAggregateInputObjectSchema as RoleMaxAggregateInputObjectSchema } from './objects/RoleMaxAggregateInput.schema';
import { RoleAvgAggregateInputObjectSchema as RoleAvgAggregateInputObjectSchema } from './objects/RoleAvgAggregateInput.schema';
import { RoleSumAggregateInputObjectSchema as RoleSumAggregateInputObjectSchema } from './objects/RoleSumAggregateInput.schema';

export const roleAggregateSchema: z.ZodType<Prisma.roleAggregateArgs> = z.object({ orderBy: z.union([roleOrderByWithRelationInputObjectSchema, roleOrderByWithRelationInputObjectSchema.array()]).optional(), where: roleWhereInputObjectSchema.optional(), cursor: roleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), RoleCountAggregateInputObjectSchema ]).optional(), _min: RoleMinAggregateInputObjectSchema.optional(), _max: RoleMaxAggregateInputObjectSchema.optional(), _avg: RoleAvgAggregateInputObjectSchema.optional(), _sum: RoleSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.roleAggregateArgs>;

export const roleAggregateZodSchema = z.object({ orderBy: z.union([roleOrderByWithRelationInputObjectSchema, roleOrderByWithRelationInputObjectSchema.array()]).optional(), where: roleWhereInputObjectSchema.optional(), cursor: roleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), RoleCountAggregateInputObjectSchema ]).optional(), _min: RoleMinAggregateInputObjectSchema.optional(), _max: RoleMaxAggregateInputObjectSchema.optional(), _avg: RoleAvgAggregateInputObjectSchema.optional(), _sum: RoleSumAggregateInputObjectSchema.optional() }).strict();