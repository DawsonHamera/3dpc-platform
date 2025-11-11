import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { eventsOrderByWithRelationInputObjectSchema as eventsOrderByWithRelationInputObjectSchema } from './objects/eventsOrderByWithRelationInput.schema';
import { eventsWhereInputObjectSchema as eventsWhereInputObjectSchema } from './objects/eventsWhereInput.schema';
import { eventsWhereUniqueInputObjectSchema as eventsWhereUniqueInputObjectSchema } from './objects/eventsWhereUniqueInput.schema';
import { EventsCountAggregateInputObjectSchema as EventsCountAggregateInputObjectSchema } from './objects/EventsCountAggregateInput.schema';
import { EventsMinAggregateInputObjectSchema as EventsMinAggregateInputObjectSchema } from './objects/EventsMinAggregateInput.schema';
import { EventsMaxAggregateInputObjectSchema as EventsMaxAggregateInputObjectSchema } from './objects/EventsMaxAggregateInput.schema';
import { EventsAvgAggregateInputObjectSchema as EventsAvgAggregateInputObjectSchema } from './objects/EventsAvgAggregateInput.schema';
import { EventsSumAggregateInputObjectSchema as EventsSumAggregateInputObjectSchema } from './objects/EventsSumAggregateInput.schema';

export const eventsAggregateSchema: z.ZodType<Prisma.eventsAggregateArgs> = z.object({ orderBy: z.union([eventsOrderByWithRelationInputObjectSchema, eventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: eventsWhereInputObjectSchema.optional(), cursor: eventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), EventsCountAggregateInputObjectSchema ]).optional(), _min: EventsMinAggregateInputObjectSchema.optional(), _max: EventsMaxAggregateInputObjectSchema.optional(), _avg: EventsAvgAggregateInputObjectSchema.optional(), _sum: EventsSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.eventsAggregateArgs>;

export const eventsAggregateZodSchema = z.object({ orderBy: z.union([eventsOrderByWithRelationInputObjectSchema, eventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: eventsWhereInputObjectSchema.optional(), cursor: eventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), EventsCountAggregateInputObjectSchema ]).optional(), _min: EventsMinAggregateInputObjectSchema.optional(), _max: EventsMaxAggregateInputObjectSchema.optional(), _avg: EventsAvgAggregateInputObjectSchema.optional(), _sum: EventsSumAggregateInputObjectSchema.optional() }).strict();