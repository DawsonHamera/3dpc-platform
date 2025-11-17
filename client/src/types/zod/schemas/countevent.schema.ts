import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { eventOrderByWithRelationInputObjectSchema as eventOrderByWithRelationInputObjectSchema } from './objects/eventOrderByWithRelationInput.schema';
import { eventWhereInputObjectSchema as eventWhereInputObjectSchema } from './objects/eventWhereInput.schema';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './objects/eventWhereUniqueInput.schema';
import { EventCountAggregateInputObjectSchema as EventCountAggregateInputObjectSchema } from './objects/EventCountAggregateInput.schema';

export const eventCountSchema: z.ZodType<Prisma.eventCountArgs> = z.object({ orderBy: z.union([eventOrderByWithRelationInputObjectSchema, eventOrderByWithRelationInputObjectSchema.array()]).optional(), where: eventWhereInputObjectSchema.optional(), cursor: eventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EventCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.eventCountArgs>;

export const eventCountZodSchema = z.object({ orderBy: z.union([eventOrderByWithRelationInputObjectSchema, eventOrderByWithRelationInputObjectSchema.array()]).optional(), where: eventWhereInputObjectSchema.optional(), cursor: eventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EventCountAggregateInputObjectSchema ]).optional() }).strict();