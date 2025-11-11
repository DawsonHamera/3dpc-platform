import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { order_logsIncludeObjectSchema as order_logsIncludeObjectSchema } from './objects/order_logsInclude.schema';
import { order_logsOrderByWithRelationInputObjectSchema as order_logsOrderByWithRelationInputObjectSchema } from './objects/order_logsOrderByWithRelationInput.schema';
import { order_logsWhereInputObjectSchema as order_logsWhereInputObjectSchema } from './objects/order_logsWhereInput.schema';
import { order_logsWhereUniqueInputObjectSchema as order_logsWhereUniqueInputObjectSchema } from './objects/order_logsWhereUniqueInput.schema';
import { OrderLogsScalarFieldEnumSchema } from './enums/OrderLogsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const order_logsFindManySelectSchema: z.ZodType<Prisma.order_logsSelect> = z.object({
    id: z.boolean().optional(),
    order_id: z.boolean().optional(),
    log_timestamp: z.boolean().optional(),
    log_message: z.boolean().optional(),
    log_details: z.boolean().optional(),
    orders: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.order_logsSelect>;

export const order_logsFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    order_id: z.boolean().optional(),
    log_timestamp: z.boolean().optional(),
    log_message: z.boolean().optional(),
    log_details: z.boolean().optional(),
    orders: z.boolean().optional()
  }).strict();

export const order_logsFindManySchema: z.ZodType<Prisma.order_logsFindManyArgs> = z.object({ select: order_logsFindManySelectSchema.optional(), include: z.lazy(() => order_logsIncludeObjectSchema.optional()), orderBy: z.union([order_logsOrderByWithRelationInputObjectSchema, order_logsOrderByWithRelationInputObjectSchema.array()]).optional(), where: order_logsWhereInputObjectSchema.optional(), cursor: order_logsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrderLogsScalarFieldEnumSchema, OrderLogsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.order_logsFindManyArgs>;

export const order_logsFindManyZodSchema = z.object({ select: order_logsFindManySelectSchema.optional(), include: z.lazy(() => order_logsIncludeObjectSchema.optional()), orderBy: z.union([order_logsOrderByWithRelationInputObjectSchema, order_logsOrderByWithRelationInputObjectSchema.array()]).optional(), where: order_logsWhereInputObjectSchema.optional(), cursor: order_logsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrderLogsScalarFieldEnumSchema, OrderLogsScalarFieldEnumSchema.array()]).optional() }).strict();