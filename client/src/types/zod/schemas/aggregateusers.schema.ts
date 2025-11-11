import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { usersOrderByWithRelationInputObjectSchema as usersOrderByWithRelationInputObjectSchema } from './objects/usersOrderByWithRelationInput.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './objects/usersWhereInput.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './objects/usersWhereUniqueInput.schema';
import { UsersCountAggregateInputObjectSchema as UsersCountAggregateInputObjectSchema } from './objects/UsersCountAggregateInput.schema';
import { UsersMinAggregateInputObjectSchema as UsersMinAggregateInputObjectSchema } from './objects/UsersMinAggregateInput.schema';
import { UsersMaxAggregateInputObjectSchema as UsersMaxAggregateInputObjectSchema } from './objects/UsersMaxAggregateInput.schema';
import { UsersAvgAggregateInputObjectSchema as UsersAvgAggregateInputObjectSchema } from './objects/UsersAvgAggregateInput.schema';
import { UsersSumAggregateInputObjectSchema as UsersSumAggregateInputObjectSchema } from './objects/UsersSumAggregateInput.schema';

export const usersAggregateSchema: z.ZodType<Prisma.usersAggregateArgs> = z.object({ orderBy: z.union([usersOrderByWithRelationInputObjectSchema, usersOrderByWithRelationInputObjectSchema.array()]).optional(), where: usersWhereInputObjectSchema.optional(), cursor: usersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), UsersCountAggregateInputObjectSchema ]).optional(), _min: UsersMinAggregateInputObjectSchema.optional(), _max: UsersMaxAggregateInputObjectSchema.optional(), _avg: UsersAvgAggregateInputObjectSchema.optional(), _sum: UsersSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.usersAggregateArgs>;

export const usersAggregateZodSchema = z.object({ orderBy: z.union([usersOrderByWithRelationInputObjectSchema, usersOrderByWithRelationInputObjectSchema.array()]).optional(), where: usersWhereInputObjectSchema.optional(), cursor: usersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), UsersCountAggregateInputObjectSchema ]).optional(), _min: UsersMinAggregateInputObjectSchema.optional(), _max: UsersMaxAggregateInputObjectSchema.optional(), _avg: UsersAvgAggregateInputObjectSchema.optional(), _sum: UsersSumAggregateInputObjectSchema.optional() }).strict();