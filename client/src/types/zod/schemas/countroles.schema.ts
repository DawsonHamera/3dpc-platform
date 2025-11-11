import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { rolesOrderByWithRelationInputObjectSchema as rolesOrderByWithRelationInputObjectSchema } from './objects/rolesOrderByWithRelationInput.schema';
import { rolesWhereInputObjectSchema as rolesWhereInputObjectSchema } from './objects/rolesWhereInput.schema';
import { rolesWhereUniqueInputObjectSchema as rolesWhereUniqueInputObjectSchema } from './objects/rolesWhereUniqueInput.schema';
import { RolesCountAggregateInputObjectSchema as RolesCountAggregateInputObjectSchema } from './objects/RolesCountAggregateInput.schema';

export const rolesCountSchema: z.ZodType<Prisma.rolesCountArgs> = z.object({ orderBy: z.union([rolesOrderByWithRelationInputObjectSchema, rolesOrderByWithRelationInputObjectSchema.array()]).optional(), where: rolesWhereInputObjectSchema.optional(), cursor: rolesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RolesCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.rolesCountArgs>;

export const rolesCountZodSchema = z.object({ orderBy: z.union([rolesOrderByWithRelationInputObjectSchema, rolesOrderByWithRelationInputObjectSchema.array()]).optional(), where: rolesWhereInputObjectSchema.optional(), cursor: rolesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RolesCountAggregateInputObjectSchema ]).optional() }).strict();