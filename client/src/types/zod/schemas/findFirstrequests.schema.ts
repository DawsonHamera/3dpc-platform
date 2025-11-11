import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { requestsIncludeObjectSchema as requestsIncludeObjectSchema } from './objects/requestsInclude.schema';
import { requestsOrderByWithRelationInputObjectSchema as requestsOrderByWithRelationInputObjectSchema } from './objects/requestsOrderByWithRelationInput.schema';
import { requestsWhereInputObjectSchema as requestsWhereInputObjectSchema } from './objects/requestsWhereInput.schema';
import { requestsWhereUniqueInputObjectSchema as requestsWhereUniqueInputObjectSchema } from './objects/requestsWhereUniqueInput.schema';
import { RequestsScalarFieldEnumSchema } from './enums/RequestsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const requestsFindFirstSelectSchema: z.ZodType<Prisma.requestsSelect> = z.object({
    id: z.boolean().optional(),
    submitted_by: z.boolean().optional(),
    email: z.boolean().optional(),
    comments: z.boolean().optional(),
    status_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    requested_date: z.boolean().optional(),
    due_date: z.boolean().optional(),
    priority: z.boolean().optional(),
    request_statuses: z.boolean().optional(),
    tasks: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.requestsSelect>;

export const requestsFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    submitted_by: z.boolean().optional(),
    email: z.boolean().optional(),
    comments: z.boolean().optional(),
    status_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    requested_date: z.boolean().optional(),
    due_date: z.boolean().optional(),
    priority: z.boolean().optional(),
    request_statuses: z.boolean().optional(),
    tasks: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const requestsFindFirstSchema: z.ZodType<Prisma.requestsFindFirstArgs> = z.object({ select: requestsFindFirstSelectSchema.optional(), include: z.lazy(() => requestsIncludeObjectSchema.optional()), orderBy: z.union([requestsOrderByWithRelationInputObjectSchema, requestsOrderByWithRelationInputObjectSchema.array()]).optional(), where: requestsWhereInputObjectSchema.optional(), cursor: requestsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RequestsScalarFieldEnumSchema, RequestsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.requestsFindFirstArgs>;

export const requestsFindFirstZodSchema = z.object({ select: requestsFindFirstSelectSchema.optional(), include: z.lazy(() => requestsIncludeObjectSchema.optional()), orderBy: z.union([requestsOrderByWithRelationInputObjectSchema, requestsOrderByWithRelationInputObjectSchema.array()]).optional(), where: requestsWhereInputObjectSchema.optional(), cursor: requestsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RequestsScalarFieldEnumSchema, RequestsScalarFieldEnumSchema.array()]).optional() }).strict();