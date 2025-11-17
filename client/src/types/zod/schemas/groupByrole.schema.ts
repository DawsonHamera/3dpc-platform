import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { roleWhereInputObjectSchema as roleWhereInputObjectSchema } from './objects/roleWhereInput.schema';
import { roleOrderByWithAggregationInputObjectSchema as roleOrderByWithAggregationInputObjectSchema } from './objects/roleOrderByWithAggregationInput.schema';
import { roleScalarWhereWithAggregatesInputObjectSchema as roleScalarWhereWithAggregatesInputObjectSchema } from './objects/roleScalarWhereWithAggregatesInput.schema';
import { RoleScalarFieldEnumSchema } from './enums/RoleScalarFieldEnum.schema';
import { RoleCountAggregateInputObjectSchema as RoleCountAggregateInputObjectSchema } from './objects/RoleCountAggregateInput.schema';
import { RoleMinAggregateInputObjectSchema as RoleMinAggregateInputObjectSchema } from './objects/RoleMinAggregateInput.schema';
import { RoleMaxAggregateInputObjectSchema as RoleMaxAggregateInputObjectSchema } from './objects/RoleMaxAggregateInput.schema';
import { RoleAvgAggregateInputObjectSchema as RoleAvgAggregateInputObjectSchema } from './objects/RoleAvgAggregateInput.schema';
import { RoleSumAggregateInputObjectSchema as RoleSumAggregateInputObjectSchema } from './objects/RoleSumAggregateInput.schema';

export const roleGroupBySchema: z.ZodType<Prisma.roleGroupByArgs> = z.object({ where: roleWhereInputObjectSchema.optional(), orderBy: z.union([roleOrderByWithAggregationInputObjectSchema, roleOrderByWithAggregationInputObjectSchema.array()]).optional(), having: roleScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(RoleScalarFieldEnumSchema), _count: z.union([ z.literal(true), RoleCountAggregateInputObjectSchema ]).optional(), _min: RoleMinAggregateInputObjectSchema.optional(), _max: RoleMaxAggregateInputObjectSchema.optional(), _avg: RoleAvgAggregateInputObjectSchema.optional(), _sum: RoleSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.roleGroupByArgs>;

export const roleGroupByZodSchema = z.object({ where: roleWhereInputObjectSchema.optional(), orderBy: z.union([roleOrderByWithAggregationInputObjectSchema, roleOrderByWithAggregationInputObjectSchema.array()]).optional(), having: roleScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(RoleScalarFieldEnumSchema), _count: z.union([ z.literal(true), RoleCountAggregateInputObjectSchema ]).optional(), _min: RoleMinAggregateInputObjectSchema.optional(), _max: RoleMaxAggregateInputObjectSchema.optional(), _avg: RoleAvgAggregateInputObjectSchema.optional(), _sum: RoleSumAggregateInputObjectSchema.optional() }).strict();