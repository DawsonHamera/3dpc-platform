import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { fileWhereInputObjectSchema as fileWhereInputObjectSchema } from './objects/fileWhereInput.schema';
import { fileOrderByWithAggregationInputObjectSchema as fileOrderByWithAggregationInputObjectSchema } from './objects/fileOrderByWithAggregationInput.schema';
import { fileScalarWhereWithAggregatesInputObjectSchema as fileScalarWhereWithAggregatesInputObjectSchema } from './objects/fileScalarWhereWithAggregatesInput.schema';
import { FileScalarFieldEnumSchema } from './enums/FileScalarFieldEnum.schema';
import { FileCountAggregateInputObjectSchema as FileCountAggregateInputObjectSchema } from './objects/FileCountAggregateInput.schema';
import { FileMinAggregateInputObjectSchema as FileMinAggregateInputObjectSchema } from './objects/FileMinAggregateInput.schema';
import { FileMaxAggregateInputObjectSchema as FileMaxAggregateInputObjectSchema } from './objects/FileMaxAggregateInput.schema';
import { FileAvgAggregateInputObjectSchema as FileAvgAggregateInputObjectSchema } from './objects/FileAvgAggregateInput.schema';
import { FileSumAggregateInputObjectSchema as FileSumAggregateInputObjectSchema } from './objects/FileSumAggregateInput.schema';

export const fileGroupBySchema: z.ZodType<Prisma.fileGroupByArgs> = z.object({ where: fileWhereInputObjectSchema.optional(), orderBy: z.union([fileOrderByWithAggregationInputObjectSchema, fileOrderByWithAggregationInputObjectSchema.array()]).optional(), having: fileScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(FileScalarFieldEnumSchema), _count: z.union([ z.literal(true), FileCountAggregateInputObjectSchema ]).optional(), _min: FileMinAggregateInputObjectSchema.optional(), _max: FileMaxAggregateInputObjectSchema.optional(), _avg: FileAvgAggregateInputObjectSchema.optional(), _sum: FileSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.fileGroupByArgs>;

export const fileGroupByZodSchema = z.object({ where: fileWhereInputObjectSchema.optional(), orderBy: z.union([fileOrderByWithAggregationInputObjectSchema, fileOrderByWithAggregationInputObjectSchema.array()]).optional(), having: fileScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(FileScalarFieldEnumSchema), _count: z.union([ z.literal(true), FileCountAggregateInputObjectSchema ]).optional(), _min: FileMinAggregateInputObjectSchema.optional(), _max: FileMaxAggregateInputObjectSchema.optional(), _avg: FileAvgAggregateInputObjectSchema.optional(), _sum: FileSumAggregateInputObjectSchema.optional() }).strict();