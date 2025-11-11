import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { filesOrderByWithRelationInputObjectSchema as filesOrderByWithRelationInputObjectSchema } from './objects/filesOrderByWithRelationInput.schema';
import { filesWhereInputObjectSchema as filesWhereInputObjectSchema } from './objects/filesWhereInput.schema';
import { filesWhereUniqueInputObjectSchema as filesWhereUniqueInputObjectSchema } from './objects/filesWhereUniqueInput.schema';
import { FilesCountAggregateInputObjectSchema as FilesCountAggregateInputObjectSchema } from './objects/FilesCountAggregateInput.schema';

export const filesCountSchema: z.ZodType<Prisma.filesCountArgs> = z.object({ orderBy: z.union([filesOrderByWithRelationInputObjectSchema, filesOrderByWithRelationInputObjectSchema.array()]).optional(), where: filesWhereInputObjectSchema.optional(), cursor: filesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FilesCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.filesCountArgs>;

export const filesCountZodSchema = z.object({ orderBy: z.union([filesOrderByWithRelationInputObjectSchema, filesOrderByWithRelationInputObjectSchema.array()]).optional(), where: filesWhereInputObjectSchema.optional(), cursor: filesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FilesCountAggregateInputObjectSchema ]).optional() }).strict();