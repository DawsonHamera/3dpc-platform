import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { eventsIncludeObjectSchema as eventsIncludeObjectSchema } from './objects/eventsInclude.schema';
import { eventsOrderByWithRelationInputObjectSchema as eventsOrderByWithRelationInputObjectSchema } from './objects/eventsOrderByWithRelationInput.schema';
import { eventsWhereInputObjectSchema as eventsWhereInputObjectSchema } from './objects/eventsWhereInput.schema';
import { eventsWhereUniqueInputObjectSchema as eventsWhereUniqueInputObjectSchema } from './objects/eventsWhereUniqueInput.schema';
import { EventsScalarFieldEnumSchema } from './enums/EventsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const eventsFindManySelectSchema: z.ZodType<Prisma.eventsSelect> = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    location: z.boolean().optional(),
    start_time: z.boolean().optional(),
    end_time: z.boolean().optional(),
    image_file_id: z.boolean().optional(),
    is_featured: z.boolean().optional(),
    event_type: z.boolean().optional(),
    created_by: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    verification_code: z.boolean().optional(),
    attendances: z.boolean().optional(),
    files: z.boolean().optional(),
    users: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.eventsSelect>;

export const eventsFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    location: z.boolean().optional(),
    start_time: z.boolean().optional(),
    end_time: z.boolean().optional(),
    image_file_id: z.boolean().optional(),
    is_featured: z.boolean().optional(),
    event_type: z.boolean().optional(),
    created_by: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    verification_code: z.boolean().optional(),
    attendances: z.boolean().optional(),
    files: z.boolean().optional(),
    users: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const eventsFindManySchema: z.ZodType<Prisma.eventsFindManyArgs> = z.object({ select: eventsFindManySelectSchema.optional(), include: z.lazy(() => eventsIncludeObjectSchema.optional()), orderBy: z.union([eventsOrderByWithRelationInputObjectSchema, eventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: eventsWhereInputObjectSchema.optional(), cursor: eventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EventsScalarFieldEnumSchema, EventsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.eventsFindManyArgs>;

export const eventsFindManyZodSchema = z.object({ select: eventsFindManySelectSchema.optional(), include: z.lazy(() => eventsIncludeObjectSchema.optional()), orderBy: z.union([eventsOrderByWithRelationInputObjectSchema, eventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: eventsWhereInputObjectSchema.optional(), cursor: eventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EventsScalarFieldEnumSchema, EventsScalarFieldEnumSchema.array()]).optional() }).strict();