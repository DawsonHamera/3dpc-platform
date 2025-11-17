import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { fileOrderByWithRelationInputObjectSchema as fileOrderByWithRelationInputObjectSchema } from './objects/fileOrderByWithRelationInput.schema';
import { fileWhereInputObjectSchema as fileWhereInputObjectSchema } from './objects/fileWhereInput.schema';
import { fileWhereUniqueInputObjectSchema as fileWhereUniqueInputObjectSchema } from './objects/fileWhereUniqueInput.schema';
import { FileCountAggregateInputObjectSchema as FileCountAggregateInputObjectSchema } from './objects/FileCountAggregateInput.schema';

export const fileCountSchema: z.ZodType<Prisma.fileCountArgs> = z.object({ orderBy: z.union([fileOrderByWithRelationInputObjectSchema, fileOrderByWithRelationInputObjectSchema.array()]).optional(), where: fileWhereInputObjectSchema.optional(), cursor: fileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FileCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.fileCountArgs>;

export const fileCountZodSchema = z.object({ orderBy: z.union([fileOrderByWithRelationInputObjectSchema, fileOrderByWithRelationInputObjectSchema.array()]).optional(), where: fileWhereInputObjectSchema.optional(), cursor: fileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FileCountAggregateInputObjectSchema ]).optional() }).strict();