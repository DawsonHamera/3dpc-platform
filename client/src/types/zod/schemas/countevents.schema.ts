import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { eventsOrderByWithRelationInputObjectSchema as eventsOrderByWithRelationInputObjectSchema } from './objects/eventsOrderByWithRelationInput.schema';
import { eventsWhereInputObjectSchema as eventsWhereInputObjectSchema } from './objects/eventsWhereInput.schema';
import { eventsWhereUniqueInputObjectSchema as eventsWhereUniqueInputObjectSchema } from './objects/eventsWhereUniqueInput.schema';
import { EventsCountAggregateInputObjectSchema as EventsCountAggregateInputObjectSchema } from './objects/EventsCountAggregateInput.schema';

export const eventsCountSchema: z.ZodType<Prisma.eventsCountArgs> = z.object({ orderBy: z.union([eventsOrderByWithRelationInputObjectSchema, eventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: eventsWhereInputObjectSchema.optional(), cursor: eventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EventsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.eventsCountArgs>;

export const eventsCountZodSchema = z.object({ orderBy: z.union([eventsOrderByWithRelationInputObjectSchema, eventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: eventsWhereInputObjectSchema.optional(), cursor: eventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EventsCountAggregateInputObjectSchema ]).optional() }).strict();