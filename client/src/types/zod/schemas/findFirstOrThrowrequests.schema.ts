import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { requestsIncludeObjectSchema as requestsIncludeObjectSchema } from './objects/requestsInclude.schema';
import { requestsOrderByWithRelationInputObjectSchema as requestsOrderByWithRelationInputObjectSchema } from './objects/requestsOrderByWithRelationInput.schema';
import { requestsWhereInputObjectSchema as requestsWhereInputObjectSchema } from './objects/requestsWhereInput.schema';
import { requestsWhereUniqueInputObjectSchema as requestsWhereUniqueInputObjectSchema } from './objects/requestsWhereUniqueInput.schema';
import { RequestsScalarFieldEnumSchema } from './enums/RequestsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const requestsFindFirstOrThrowSelectSchema: z.ZodType<Prisma.requestsSelect> = z.object({
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

export const requestsFindFirstOrThrowSelectZodSchema = z.object({
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

export const requestsFindFirstOrThrowSchema: z.ZodType<Prisma.requestsFindFirstOrThrowArgs> = z.object({ select: requestsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => requestsIncludeObjectSchema.optional()), orderBy: z.union([requestsOrderByWithRelationInputObjectSchema, requestsOrderByWithRelationInputObjectSchema.array()]).optional(), where: requestsWhereInputObjectSchema.optional(), cursor: requestsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RequestsScalarFieldEnumSchema, RequestsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.requestsFindFirstOrThrowArgs>;

export const requestsFindFirstOrThrowZodSchema = z.object({ select: requestsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => requestsIncludeObjectSchema.optional()), orderBy: z.union([requestsOrderByWithRelationInputObjectSchema, requestsOrderByWithRelationInputObjectSchema.array()]).optional(), where: requestsWhereInputObjectSchema.optional(), cursor: requestsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RequestsScalarFieldEnumSchema, RequestsScalarFieldEnumSchema.array()]).optional() }).strict();