import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { rolesWhereInputObjectSchema as rolesWhereInputObjectSchema } from './objects/rolesWhereInput.schema';
import { rolesOrderByWithAggregationInputObjectSchema as rolesOrderByWithAggregationInputObjectSchema } from './objects/rolesOrderByWithAggregationInput.schema';
import { rolesScalarWhereWithAggregatesInputObjectSchema as rolesScalarWhereWithAggregatesInputObjectSchema } from './objects/rolesScalarWhereWithAggregatesInput.schema';
import { RolesScalarFieldEnumSchema } from './enums/RolesScalarFieldEnum.schema';
import { RolesCountAggregateInputObjectSchema as RolesCountAggregateInputObjectSchema } from './objects/RolesCountAggregateInput.schema';
import { RolesMinAggregateInputObjectSchema as RolesMinAggregateInputObjectSchema } from './objects/RolesMinAggregateInput.schema';
import { RolesMaxAggregateInputObjectSchema as RolesMaxAggregateInputObjectSchema } from './objects/RolesMaxAggregateInput.schema';
import { RolesAvgAggregateInputObjectSchema as RolesAvgAggregateInputObjectSchema } from './objects/RolesAvgAggregateInput.schema';
import { RolesSumAggregateInputObjectSchema as RolesSumAggregateInputObjectSchema } from './objects/RolesSumAggregateInput.schema';

export const rolesGroupBySchema: z.ZodType<Prisma.rolesGroupByArgs> = z.object({ where: rolesWhereInputObjectSchema.optional(), orderBy: z.union([rolesOrderByWithAggregationInputObjectSchema, rolesOrderByWithAggregationInputObjectSchema.array()]).optional(), having: rolesScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(RolesScalarFieldEnumSchema), _count: z.union([ z.literal(true), RolesCountAggregateInputObjectSchema ]).optional(), _min: RolesMinAggregateInputObjectSchema.optional(), _max: RolesMaxAggregateInputObjectSchema.optional(), _avg: RolesAvgAggregateInputObjectSchema.optional(), _sum: RolesSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.rolesGroupByArgs>;

export const rolesGroupByZodSchema = z.object({ where: rolesWhereInputObjectSchema.optional(), orderBy: z.union([rolesOrderByWithAggregationInputObjectSchema, rolesOrderByWithAggregationInputObjectSchema.array()]).optional(), having: rolesScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(RolesScalarFieldEnumSchema), _count: z.union([ z.literal(true), RolesCountAggregateInputObjectSchema ]).optional(), _min: RolesMinAggregateInputObjectSchema.optional(), _max: RolesMaxAggregateInputObjectSchema.optional(), _avg: RolesAvgAggregateInputObjectSchema.optional(), _sum: RolesSumAggregateInputObjectSchema.optional() }).strict();