import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { eventOrderByWithRelationInputObjectSchema as eventOrderByWithRelationInputObjectSchema } from './objects/eventOrderByWithRelationInput.schema';
import { eventWhereInputObjectSchema as eventWhereInputObjectSchema } from './objects/eventWhereInput.schema';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './objects/eventWhereUniqueInput.schema';
import { EventCountAggregateInputObjectSchema as EventCountAggregateInputObjectSchema } from './objects/EventCountAggregateInput.schema';
import { EventMinAggregateInputObjectSchema as EventMinAggregateInputObjectSchema } from './objects/EventMinAggregateInput.schema';
import { EventMaxAggregateInputObjectSchema as EventMaxAggregateInputObjectSchema } from './objects/EventMaxAggregateInput.schema';
import { EventAvgAggregateInputObjectSchema as EventAvgAggregateInputObjectSchema } from './objects/EventAvgAggregateInput.schema';
import { EventSumAggregateInputObjectSchema as EventSumAggregateInputObjectSchema } from './objects/EventSumAggregateInput.schema';

export const eventAggregateSchema: z.ZodType<Prisma.eventAggregateArgs> = z.object({ orderBy: z.union([eventOrderByWithRelationInputObjectSchema, eventOrderByWithRelationInputObjectSchema.array()]).optional(), where: eventWhereInputObjectSchema.optional(), cursor: eventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), EventCountAggregateInputObjectSchema ]).optional(), _min: EventMinAggregateInputObjectSchema.optional(), _max: EventMaxAggregateInputObjectSchema.optional(), _avg: EventAvgAggregateInputObjectSchema.optional(), _sum: EventSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.eventAggregateArgs>;

export const eventAggregateZodSchema = z.object({ orderBy: z.union([eventOrderByWithRelationInputObjectSchema, eventOrderByWithRelationInputObjectSchema.array()]).optional(), where: eventWhereInputObjectSchema.optional(), cursor: eventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), EventCountAggregateInputObjectSchema ]).optional(), _min: EventMinAggregateInputObjectSchema.optional(), _max: EventMaxAggregateInputObjectSchema.optional(), _avg: EventAvgAggregateInputObjectSchema.optional(), _sum: EventSumAggregateInputObjectSchema.optional() }).strict();