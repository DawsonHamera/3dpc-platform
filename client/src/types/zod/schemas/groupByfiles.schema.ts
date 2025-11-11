import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { filesWhereInputObjectSchema as filesWhereInputObjectSchema } from './objects/filesWhereInput.schema';
import { filesOrderByWithAggregationInputObjectSchema as filesOrderByWithAggregationInputObjectSchema } from './objects/filesOrderByWithAggregationInput.schema';
import { filesScalarWhereWithAggregatesInputObjectSchema as filesScalarWhereWithAggregatesInputObjectSchema } from './objects/filesScalarWhereWithAggregatesInput.schema';
import { FilesScalarFieldEnumSchema } from './enums/FilesScalarFieldEnum.schema';
import { FilesCountAggregateInputObjectSchema as FilesCountAggregateInputObjectSchema } from './objects/FilesCountAggregateInput.schema';
import { FilesMinAggregateInputObjectSchema as FilesMinAggregateInputObjectSchema } from './objects/FilesMinAggregateInput.schema';
import { FilesMaxAggregateInputObjectSchema as FilesMaxAggregateInputObjectSchema } from './objects/FilesMaxAggregateInput.schema';
import { FilesAvgAggregateInputObjectSchema as FilesAvgAggregateInputObjectSchema } from './objects/FilesAvgAggregateInput.schema';
import { FilesSumAggregateInputObjectSchema as FilesSumAggregateInputObjectSchema } from './objects/FilesSumAggregateInput.schema';

export const filesGroupBySchema: z.ZodType<Prisma.filesGroupByArgs> = z.object({ where: filesWhereInputObjectSchema.optional(), orderBy: z.union([filesOrderByWithAggregationInputObjectSchema, filesOrderByWithAggregationInputObjectSchema.array()]).optional(), having: filesScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(FilesScalarFieldEnumSchema), _count: z.union([ z.literal(true), FilesCountAggregateInputObjectSchema ]).optional(), _min: FilesMinAggregateInputObjectSchema.optional(), _max: FilesMaxAggregateInputObjectSchema.optional(), _avg: FilesAvgAggregateInputObjectSchema.optional(), _sum: FilesSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.filesGroupByArgs>;

export const filesGroupByZodSchema = z.object({ where: filesWhereInputObjectSchema.optional(), orderBy: z.union([filesOrderByWithAggregationInputObjectSchema, filesOrderByWithAggregationInputObjectSchema.array()]).optional(), having: filesScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(FilesScalarFieldEnumSchema), _count: z.union([ z.literal(true), FilesCountAggregateInputObjectSchema ]).optional(), _min: FilesMinAggregateInputObjectSchema.optional(), _max: FilesMaxAggregateInputObjectSchema.optional(), _avg: FilesAvgAggregateInputObjectSchema.optional(), _sum: FilesSumAggregateInputObjectSchema.optional() }).strict();