import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { fileOrderByWithRelationInputObjectSchema as fileOrderByWithRelationInputObjectSchema } from './objects/fileOrderByWithRelationInput.schema';
import { fileWhereInputObjectSchema as fileWhereInputObjectSchema } from './objects/fileWhereInput.schema';
import { fileWhereUniqueInputObjectSchema as fileWhereUniqueInputObjectSchema } from './objects/fileWhereUniqueInput.schema';
import { FileCountAggregateInputObjectSchema as FileCountAggregateInputObjectSchema } from './objects/FileCountAggregateInput.schema';
import { FileMinAggregateInputObjectSchema as FileMinAggregateInputObjectSchema } from './objects/FileMinAggregateInput.schema';
import { FileMaxAggregateInputObjectSchema as FileMaxAggregateInputObjectSchema } from './objects/FileMaxAggregateInput.schema';
import { FileAvgAggregateInputObjectSchema as FileAvgAggregateInputObjectSchema } from './objects/FileAvgAggregateInput.schema';
import { FileSumAggregateInputObjectSchema as FileSumAggregateInputObjectSchema } from './objects/FileSumAggregateInput.schema';

export const fileAggregateSchema: z.ZodType<Prisma.fileAggregateArgs> = z.object({ orderBy: z.union([fileOrderByWithRelationInputObjectSchema, fileOrderByWithRelationInputObjectSchema.array()]).optional(), where: fileWhereInputObjectSchema.optional(), cursor: fileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), FileCountAggregateInputObjectSchema ]).optional(), _min: FileMinAggregateInputObjectSchema.optional(), _max: FileMaxAggregateInputObjectSchema.optional(), _avg: FileAvgAggregateInputObjectSchema.optional(), _sum: FileSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.fileAggregateArgs>;

export const fileAggregateZodSchema = z.object({ orderBy: z.union([fileOrderByWithRelationInputObjectSchema, fileOrderByWithRelationInputObjectSchema.array()]).optional(), where: fileWhereInputObjectSchema.optional(), cursor: fileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), FileCountAggregateInputObjectSchema ]).optional(), _min: FileMinAggregateInputObjectSchema.optional(), _max: FileMaxAggregateInputObjectSchema.optional(), _avg: FileAvgAggregateInputObjectSchema.optional(), _sum: FileSumAggregateInputObjectSchema.optional() }).strict();