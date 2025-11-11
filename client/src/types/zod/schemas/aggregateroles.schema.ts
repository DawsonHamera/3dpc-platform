import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { rolesOrderByWithRelationInputObjectSchema as rolesOrderByWithRelationInputObjectSchema } from './objects/rolesOrderByWithRelationInput.schema';
import { rolesWhereInputObjectSchema as rolesWhereInputObjectSchema } from './objects/rolesWhereInput.schema';
import { rolesWhereUniqueInputObjectSchema as rolesWhereUniqueInputObjectSchema } from './objects/rolesWhereUniqueInput.schema';
import { RolesCountAggregateInputObjectSchema as RolesCountAggregateInputObjectSchema } from './objects/RolesCountAggregateInput.schema';
import { RolesMinAggregateInputObjectSchema as RolesMinAggregateInputObjectSchema } from './objects/RolesMinAggregateInput.schema';
import { RolesMaxAggregateInputObjectSchema as RolesMaxAggregateInputObjectSchema } from './objects/RolesMaxAggregateInput.schema';
import { RolesAvgAggregateInputObjectSchema as RolesAvgAggregateInputObjectSchema } from './objects/RolesAvgAggregateInput.schema';
import { RolesSumAggregateInputObjectSchema as RolesSumAggregateInputObjectSchema } from './objects/RolesSumAggregateInput.schema';

export const rolesAggregateSchema: z.ZodType<Prisma.rolesAggregateArgs> = z.object({ orderBy: z.union([rolesOrderByWithRelationInputObjectSchema, rolesOrderByWithRelationInputObjectSchema.array()]).optional(), where: rolesWhereInputObjectSchema.optional(), cursor: rolesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), RolesCountAggregateInputObjectSchema ]).optional(), _min: RolesMinAggregateInputObjectSchema.optional(), _max: RolesMaxAggregateInputObjectSchema.optional(), _avg: RolesAvgAggregateInputObjectSchema.optional(), _sum: RolesSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.rolesAggregateArgs>;

export const rolesAggregateZodSchema = z.object({ orderBy: z.union([rolesOrderByWithRelationInputObjectSchema, rolesOrderByWithRelationInputObjectSchema.array()]).optional(), where: rolesWhereInputObjectSchema.optional(), cursor: rolesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), RolesCountAggregateInputObjectSchema ]).optional(), _min: RolesMinAggregateInputObjectSchema.optional(), _max: RolesMaxAggregateInputObjectSchema.optional(), _avg: RolesAvgAggregateInputObjectSchema.optional(), _sum: RolesSumAggregateInputObjectSchema.optional() }).strict();