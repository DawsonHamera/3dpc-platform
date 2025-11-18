import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { recycling_logUpdateManyMutationInputObjectSchema as recycling_logUpdateManyMutationInputObjectSchema } from './objects/recycling_logUpdateManyMutationInput.schema';
import { recycling_logWhereInputObjectSchema as recycling_logWhereInputObjectSchema } from './objects/recycling_logWhereInput.schema';

export const recycling_logUpdateManySchema: z.ZodType<Prisma.recycling_logUpdateManyArgs> = z.object({ data: recycling_logUpdateManyMutationInputObjectSchema, where: recycling_logWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.recycling_logUpdateManyArgs>;

export const recycling_logUpdateManyZodSchema = z.object({ data: recycling_logUpdateManyMutationInputObjectSchema, where: recycling_logWhereInputObjectSchema.optional() }).strict();