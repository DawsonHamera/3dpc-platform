import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { recycling_logIncludeObjectSchema as recycling_logIncludeObjectSchema } from './objects/recycling_logInclude.schema';
import { recycling_logOrderByWithRelationInputObjectSchema as recycling_logOrderByWithRelationInputObjectSchema } from './objects/recycling_logOrderByWithRelationInput.schema';
import { recycling_logWhereInputObjectSchema as recycling_logWhereInputObjectSchema } from './objects/recycling_logWhereInput.schema';
import { recycling_logWhereUniqueInputObjectSchema as recycling_logWhereUniqueInputObjectSchema } from './objects/recycling_logWhereUniqueInput.schema';
import { RecyclingLogScalarFieldEnumSchema } from './enums/RecyclingLogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const recycling_logFindFirstOrThrowSelectSchema: z.ZodType<Prisma.recycling_logSelect> = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    amount: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_by: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.recycling_logSelect>;

export const recycling_logFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    amount: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_by: z.boolean().optional()
  }).strict();

export const recycling_logFindFirstOrThrowSchema: z.ZodType<Prisma.recycling_logFindFirstOrThrowArgs> = z.object({ select: recycling_logFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => recycling_logIncludeObjectSchema.optional()), orderBy: z.union([recycling_logOrderByWithRelationInputObjectSchema, recycling_logOrderByWithRelationInputObjectSchema.array()]).optional(), where: recycling_logWhereInputObjectSchema.optional(), cursor: recycling_logWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RecyclingLogScalarFieldEnumSchema, RecyclingLogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.recycling_logFindFirstOrThrowArgs>;

export const recycling_logFindFirstOrThrowZodSchema = z.object({ select: recycling_logFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => recycling_logIncludeObjectSchema.optional()), orderBy: z.union([recycling_logOrderByWithRelationInputObjectSchema, recycling_logOrderByWithRelationInputObjectSchema.array()]).optional(), where: recycling_logWhereInputObjectSchema.optional(), cursor: recycling_logWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RecyclingLogScalarFieldEnumSchema, RecyclingLogScalarFieldEnumSchema.array()]).optional() }).strict();