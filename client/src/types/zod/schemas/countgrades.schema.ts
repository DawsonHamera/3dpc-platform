import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { gradesOrderByWithRelationInputObjectSchema as gradesOrderByWithRelationInputObjectSchema } from './objects/gradesOrderByWithRelationInput.schema';
import { gradesWhereInputObjectSchema as gradesWhereInputObjectSchema } from './objects/gradesWhereInput.schema';
import { gradesWhereUniqueInputObjectSchema as gradesWhereUniqueInputObjectSchema } from './objects/gradesWhereUniqueInput.schema';
import { GradesCountAggregateInputObjectSchema as GradesCountAggregateInputObjectSchema } from './objects/GradesCountAggregateInput.schema';

export const gradesCountSchema: z.ZodType<Prisma.gradesCountArgs> = z.object({ orderBy: z.union([gradesOrderByWithRelationInputObjectSchema, gradesOrderByWithRelationInputObjectSchema.array()]).optional(), where: gradesWhereInputObjectSchema.optional(), cursor: gradesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GradesCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.gradesCountArgs>;

export const gradesCountZodSchema = z.object({ orderBy: z.union([gradesOrderByWithRelationInputObjectSchema, gradesOrderByWithRelationInputObjectSchema.array()]).optional(), where: gradesWhereInputObjectSchema.optional(), cursor: gradesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GradesCountAggregateInputObjectSchema ]).optional() }).strict();