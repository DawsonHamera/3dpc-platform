import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { eventWhereInputObjectSchema as eventWhereInputObjectSchema } from './objects/eventWhereInput.schema';
import { eventOrderByWithAggregationInputObjectSchema as eventOrderByWithAggregationInputObjectSchema } from './objects/eventOrderByWithAggregationInput.schema';
import { eventScalarWhereWithAggregatesInputObjectSchema as eventScalarWhereWithAggregatesInputObjectSchema } from './objects/eventScalarWhereWithAggregatesInput.schema';
import { EventScalarFieldEnumSchema } from './enums/EventScalarFieldEnum.schema';
import { EventCountAggregateInputObjectSchema as EventCountAggregateInputObjectSchema } from './objects/EventCountAggregateInput.schema';
import { EventMinAggregateInputObjectSchema as EventMinAggregateInputObjectSchema } from './objects/EventMinAggregateInput.schema';
import { EventMaxAggregateInputObjectSchema as EventMaxAggregateInputObjectSchema } from './objects/EventMaxAggregateInput.schema';
import { EventAvgAggregateInputObjectSchema as EventAvgAggregateInputObjectSchema } from './objects/EventAvgAggregateInput.schema';
import { EventSumAggregateInputObjectSchema as EventSumAggregateInputObjectSchema } from './objects/EventSumAggregateInput.schema';

export const eventGroupBySchema: z.ZodType<Prisma.eventGroupByArgs> = z.object({ where: eventWhereInputObjectSchema.optional(), orderBy: z.union([eventOrderByWithAggregationInputObjectSchema, eventOrderByWithAggregationInputObjectSchema.array()]).optional(), having: eventScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(EventScalarFieldEnumSchema), _count: z.union([ z.literal(true), EventCountAggregateInputObjectSchema ]).optional(), _min: EventMinAggregateInputObjectSchema.optional(), _max: EventMaxAggregateInputObjectSchema.optional(), _avg: EventAvgAggregateInputObjectSchema.optional(), _sum: EventSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.eventGroupByArgs>;

export const eventGroupByZodSchema = z.object({ where: eventWhereInputObjectSchema.optional(), orderBy: z.union([eventOrderByWithAggregationInputObjectSchema, eventOrderByWithAggregationInputObjectSchema.array()]).optional(), having: eventScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(EventScalarFieldEnumSchema), _count: z.union([ z.literal(true), EventCountAggregateInputObjectSchema ]).optional(), _min: EventMinAggregateInputObjectSchema.optional(), _max: EventMaxAggregateInputObjectSchema.optional(), _avg: EventAvgAggregateInputObjectSchema.optional(), _sum: EventSumAggregateInputObjectSchema.optional() }).strict();