import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_logsOrderByWithRelationInputObjectSchema as process_logsOrderByWithRelationInputObjectSchema } from './objects/process_logsOrderByWithRelationInput.schema';
import { process_logsWhereInputObjectSchema as process_logsWhereInputObjectSchema } from './objects/process_logsWhereInput.schema';
import { process_logsWhereUniqueInputObjectSchema as process_logsWhereUniqueInputObjectSchema } from './objects/process_logsWhereUniqueInput.schema';
import { Process_logsCountAggregateInputObjectSchema as Process_logsCountAggregateInputObjectSchema } from './objects/Process_logsCountAggregateInput.schema';

export const process_logsCountSchema: z.ZodType<Prisma.process_logsCountArgs> = z.object({ orderBy: z.union([process_logsOrderByWithRelationInputObjectSchema, process_logsOrderByWithRelationInputObjectSchema.array()]).optional(), where: process_logsWhereInputObjectSchema.optional(), cursor: process_logsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Process_logsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.process_logsCountArgs>;

export const process_logsCountZodSchema = z.object({ orderBy: z.union([process_logsOrderByWithRelationInputObjectSchema, process_logsOrderByWithRelationInputObjectSchema.array()]).optional(), where: process_logsWhereInputObjectSchema.optional(), cursor: process_logsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Process_logsCountAggregateInputObjectSchema ]).optional() }).strict();