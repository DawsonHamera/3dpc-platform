import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './objects/usersWhereInput.schema';
import { usersOrderByWithAggregationInputObjectSchema as usersOrderByWithAggregationInputObjectSchema } from './objects/usersOrderByWithAggregationInput.schema';
import { usersScalarWhereWithAggregatesInputObjectSchema as usersScalarWhereWithAggregatesInputObjectSchema } from './objects/usersScalarWhereWithAggregatesInput.schema';
import { UsersScalarFieldEnumSchema } from './enums/UsersScalarFieldEnum.schema';
import { UsersCountAggregateInputObjectSchema as UsersCountAggregateInputObjectSchema } from './objects/UsersCountAggregateInput.schema';
import { UsersMinAggregateInputObjectSchema as UsersMinAggregateInputObjectSchema } from './objects/UsersMinAggregateInput.schema';
import { UsersMaxAggregateInputObjectSchema as UsersMaxAggregateInputObjectSchema } from './objects/UsersMaxAggregateInput.schema';
import { UsersAvgAggregateInputObjectSchema as UsersAvgAggregateInputObjectSchema } from './objects/UsersAvgAggregateInput.schema';
import { UsersSumAggregateInputObjectSchema as UsersSumAggregateInputObjectSchema } from './objects/UsersSumAggregateInput.schema';

export const usersGroupBySchema: z.ZodType<Prisma.usersGroupByArgs> = z.object({ where: usersWhereInputObjectSchema.optional(), orderBy: z.union([usersOrderByWithAggregationInputObjectSchema, usersOrderByWithAggregationInputObjectSchema.array()]).optional(), having: usersScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(UsersScalarFieldEnumSchema), _count: z.union([ z.literal(true), UsersCountAggregateInputObjectSchema ]).optional(), _min: UsersMinAggregateInputObjectSchema.optional(), _max: UsersMaxAggregateInputObjectSchema.optional(), _avg: UsersAvgAggregateInputObjectSchema.optional(), _sum: UsersSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.usersGroupByArgs>;

export const usersGroupByZodSchema = z.object({ where: usersWhereInputObjectSchema.optional(), orderBy: z.union([usersOrderByWithAggregationInputObjectSchema, usersOrderByWithAggregationInputObjectSchema.array()]).optional(), having: usersScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(UsersScalarFieldEnumSchema), _count: z.union([ z.literal(true), UsersCountAggregateInputObjectSchema ]).optional(), _min: UsersMinAggregateInputObjectSchema.optional(), _max: UsersMaxAggregateInputObjectSchema.optional(), _avg: UsersAvgAggregateInputObjectSchema.optional(), _sum: UsersSumAggregateInputObjectSchema.optional() }).strict();