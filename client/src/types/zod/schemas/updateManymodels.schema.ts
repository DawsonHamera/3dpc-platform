import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { modelsUpdateManyMutationInputObjectSchema as modelsUpdateManyMutationInputObjectSchema } from './objects/modelsUpdateManyMutationInput.schema';
import { modelsWhereInputObjectSchema as modelsWhereInputObjectSchema } from './objects/modelsWhereInput.schema';

export const modelsUpdateManySchema: z.ZodType<Prisma.modelsUpdateManyArgs> = z.object({ data: modelsUpdateManyMutationInputObjectSchema, where: modelsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.modelsUpdateManyArgs>;

export const modelsUpdateManyZodSchema = z.object({ data: modelsUpdateManyMutationInputObjectSchema, where: modelsWhereInputObjectSchema.optional() }).strict();