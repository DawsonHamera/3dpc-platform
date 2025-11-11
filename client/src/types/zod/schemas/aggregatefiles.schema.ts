import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { filesOrderByWithRelationInputObjectSchema as filesOrderByWithRelationInputObjectSchema } from './objects/filesOrderByWithRelationInput.schema';
import { filesWhereInputObjectSchema as filesWhereInputObjectSchema } from './objects/filesWhereInput.schema';
import { filesWhereUniqueInputObjectSchema as filesWhereUniqueInputObjectSchema } from './objects/filesWhereUniqueInput.schema';
import { FilesCountAggregateInputObjectSchema as FilesCountAggregateInputObjectSchema } from './objects/FilesCountAggregateInput.schema';
import { FilesMinAggregateInputObjectSchema as FilesMinAggregateInputObjectSchema } from './objects/FilesMinAggregateInput.schema';
import { FilesMaxAggregateInputObjectSchema as FilesMaxAggregateInputObjectSchema } from './objects/FilesMaxAggregateInput.schema';
import { FilesAvgAggregateInputObjectSchema as FilesAvgAggregateInputObjectSchema } from './objects/FilesAvgAggregateInput.schema';
import { FilesSumAggregateInputObjectSchema as FilesSumAggregateInputObjectSchema } from './objects/FilesSumAggregateInput.schema';

export const filesAggregateSchema: z.ZodType<Prisma.filesAggregateArgs> = z.object({ orderBy: z.union([filesOrderByWithRelationInputObjectSchema, filesOrderByWithRelationInputObjectSchema.array()]).optional(), where: filesWhereInputObjectSchema.optional(), cursor: filesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), FilesCountAggregateInputObjectSchema ]).optional(), _min: FilesMinAggregateInputObjectSchema.optional(), _max: FilesMaxAggregateInputObjectSchema.optional(), _avg: FilesAvgAggregateInputObjectSchema.optional(), _sum: FilesSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.filesAggregateArgs>;

export const filesAggregateZodSchema = z.object({ orderBy: z.union([filesOrderByWithRelationInputObjectSchema, filesOrderByWithRelationInputObjectSchema.array()]).optional(), where: filesWhereInputObjectSchema.optional(), cursor: filesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), FilesCountAggregateInputObjectSchema ]).optional(), _min: FilesMinAggregateInputObjectSchema.optional(), _max: FilesMaxAggregateInputObjectSchema.optional(), _avg: FilesAvgAggregateInputObjectSchema.optional(), _sum: FilesSumAggregateInputObjectSchema.optional() }).strict();