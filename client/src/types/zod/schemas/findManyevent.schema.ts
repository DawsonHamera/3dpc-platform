import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { eventIncludeObjectSchema as eventIncludeObjectSchema } from './objects/eventInclude.schema';
import { eventOrderByWithRelationInputObjectSchema as eventOrderByWithRelationInputObjectSchema } from './objects/eventOrderByWithRelationInput.schema';
import { eventWhereInputObjectSchema as eventWhereInputObjectSchema } from './objects/eventWhereInput.schema';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './objects/eventWhereUniqueInput.schema';
import { EventScalarFieldEnumSchema } from './enums/EventScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const eventFindManySelectSchema: z.ZodType<Prisma.eventSelect> = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    location: z.boolean().optional(),
    start_time: z.boolean().optional(),
    end_time: z.boolean().optional(),
    image_file_id: z.boolean().optional(),
    is_featured: z.boolean().optional(),
    event_type: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    verification_code: z.boolean().optional(),
    attendances: z.boolean().optional(),
    image_file: z.boolean().optional(),
    created_by: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.eventSelect>;

export const eventFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    location: z.boolean().optional(),
    start_time: z.boolean().optional(),
    end_time: z.boolean().optional(),
    image_file_id: z.boolean().optional(),
    is_featured: z.boolean().optional(),
    event_type: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    verification_code: z.boolean().optional(),
    attendances: z.boolean().optional(),
    image_file: z.boolean().optional(),
    created_by: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const eventFindManySchema: z.ZodType<Prisma.eventFindManyArgs> = z.object({ select: eventFindManySelectSchema.optional(), include: z.lazy(() => eventIncludeObjectSchema.optional()), orderBy: z.union([eventOrderByWithRelationInputObjectSchema, eventOrderByWithRelationInputObjectSchema.array()]).optional(), where: eventWhereInputObjectSchema.optional(), cursor: eventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EventScalarFieldEnumSchema, EventScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.eventFindManyArgs>;

export const eventFindManyZodSchema = z.object({ select: eventFindManySelectSchema.optional(), include: z.lazy(() => eventIncludeObjectSchema.optional()), orderBy: z.union([eventOrderByWithRelationInputObjectSchema, eventOrderByWithRelationInputObjectSchema.array()]).optional(), where: eventWhereInputObjectSchema.optional(), cursor: eventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EventScalarFieldEnumSchema, EventScalarFieldEnumSchema.array()]).optional() }).strict();