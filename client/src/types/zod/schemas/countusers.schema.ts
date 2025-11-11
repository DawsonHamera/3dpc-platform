import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { usersOrderByWithRelationInputObjectSchema as usersOrderByWithRelationInputObjectSchema } from './objects/usersOrderByWithRelationInput.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './objects/usersWhereInput.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './objects/usersWhereUniqueInput.schema';
import { UsersCountAggregateInputObjectSchema as UsersCountAggregateInputObjectSchema } from './objects/UsersCountAggregateInput.schema';

export const usersCountSchema: z.ZodType<Prisma.usersCountArgs> = z.object({ orderBy: z.union([usersOrderByWithRelationInputObjectSchema, usersOrderByWithRelationInputObjectSchema.array()]).optional(), where: usersWhereInputObjectSchema.optional(), cursor: usersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UsersCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.usersCountArgs>;

export const usersCountZodSchema = z.object({ orderBy: z.union([usersOrderByWithRelationInputObjectSchema, usersOrderByWithRelationInputObjectSchema.array()]).optional(), where: usersWhereInputObjectSchema.optional(), cursor: usersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UsersCountAggregateInputObjectSchema ]).optional() }).strict();