import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { gradesOrderByWithRelationInputObjectSchema as gradesOrderByWithRelationInputObjectSchema } from './objects/gradesOrderByWithRelationInput.schema';
import { gradesWhereInputObjectSchema as gradesWhereInputObjectSchema } from './objects/gradesWhereInput.schema';
import { gradesWhereUniqueInputObjectSchema as gradesWhereUniqueInputObjectSchema } from './objects/gradesWhereUniqueInput.schema';
import { GradesCountAggregateInputObjectSchema as GradesCountAggregateInputObjectSchema } from './objects/GradesCountAggregateInput.schema';
import { GradesMinAggregateInputObjectSchema as GradesMinAggregateInputObjectSchema } from './objects/GradesMinAggregateInput.schema';
import { GradesMaxAggregateInputObjectSchema as GradesMaxAggregateInputObjectSchema } from './objects/GradesMaxAggregateInput.schema';
import { GradesAvgAggregateInputObjectSchema as GradesAvgAggregateInputObjectSchema } from './objects/GradesAvgAggregateInput.schema';
import { GradesSumAggregateInputObjectSchema as GradesSumAggregateInputObjectSchema } from './objects/GradesSumAggregateInput.schema';

export const gradesAggregateSchema: z.ZodType<Prisma.gradesAggregateArgs> = z.object({ orderBy: z.union([gradesOrderByWithRelationInputObjectSchema, gradesOrderByWithRelationInputObjectSchema.array()]).optional(), where: gradesWhereInputObjectSchema.optional(), cursor: gradesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), GradesCountAggregateInputObjectSchema ]).optional(), _min: GradesMinAggregateInputObjectSchema.optional(), _max: GradesMaxAggregateInputObjectSchema.optional(), _avg: GradesAvgAggregateInputObjectSchema.optional(), _sum: GradesSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.gradesAggregateArgs>;

export const gradesAggregateZodSchema = z.object({ orderBy: z.union([gradesOrderByWithRelationInputObjectSchema, gradesOrderByWithRelationInputObjectSchema.array()]).optional(), where: gradesWhereInputObjectSchema.optional(), cursor: gradesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), GradesCountAggregateInputObjectSchema ]).optional(), _min: GradesMinAggregateInputObjectSchema.optional(), _max: GradesMaxAggregateInputObjectSchema.optional(), _avg: GradesAvgAggregateInputObjectSchema.optional(), _sum: GradesSumAggregateInputObjectSchema.optional() }).strict();