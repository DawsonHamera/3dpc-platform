import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { request_statusesIncludeObjectSchema as request_statusesIncludeObjectSchema } from './objects/request_statusesInclude.schema';
import { request_statusesOrderByWithRelationInputObjectSchema as request_statusesOrderByWithRelationInputObjectSchema } from './objects/request_statusesOrderByWithRelationInput.schema';
import { request_statusesWhereInputObjectSchema as request_statusesWhereInputObjectSchema } from './objects/request_statusesWhereInput.schema';
import { request_statusesWhereUniqueInputObjectSchema as request_statusesWhereUniqueInputObjectSchema } from './objects/request_statusesWhereUniqueInput.schema';
import { RequestStatusesScalarFieldEnumSchema } from './enums/RequestStatusesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const request_statusesFindManySelectSchema: z.ZodType<Prisma.request_statusesSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    requests: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.request_statusesSelect>;

export const request_statusesFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    requests: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const request_statusesFindManySchema: z.ZodType<Prisma.request_statusesFindManyArgs> = z.object({ select: request_statusesFindManySelectSchema.optional(), include: z.lazy(() => request_statusesIncludeObjectSchema.optional()), orderBy: z.union([request_statusesOrderByWithRelationInputObjectSchema, request_statusesOrderByWithRelationInputObjectSchema.array()]).optional(), where: request_statusesWhereInputObjectSchema.optional(), cursor: request_statusesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RequestStatusesScalarFieldEnumSchema, RequestStatusesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.request_statusesFindManyArgs>;

export const request_statusesFindManyZodSchema = z.object({ select: request_statusesFindManySelectSchema.optional(), include: z.lazy(() => request_statusesIncludeObjectSchema.optional()), orderBy: z.union([request_statusesOrderByWithRelationInputObjectSchema, request_statusesOrderByWithRelationInputObjectSchema.array()]).optional(), where: request_statusesWhereInputObjectSchema.optional(), cursor: request_statusesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RequestStatusesScalarFieldEnumSchema, RequestStatusesScalarFieldEnumSchema.array()]).optional() }).strict();