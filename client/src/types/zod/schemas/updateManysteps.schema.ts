import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { stepsUpdateManyMutationInputObjectSchema as stepsUpdateManyMutationInputObjectSchema } from './objects/stepsUpdateManyMutationInput.schema';
import { stepsWhereInputObjectSchema as stepsWhereInputObjectSchema } from './objects/stepsWhereInput.schema';

export const stepsUpdateManySchema: z.ZodType<Prisma.stepsUpdateManyArgs> = z.object({ data: stepsUpdateManyMutationInputObjectSchema, where: stepsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.stepsUpdateManyArgs>;

export const stepsUpdateManyZodSchema = z.object({ data: stepsUpdateManyMutationInputObjectSchema, where: stepsWhereInputObjectSchema.optional() }).strict();