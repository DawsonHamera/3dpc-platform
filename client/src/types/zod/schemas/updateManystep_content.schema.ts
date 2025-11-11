import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_contentUpdateManyMutationInputObjectSchema as step_contentUpdateManyMutationInputObjectSchema } from './objects/step_contentUpdateManyMutationInput.schema';
import { step_contentWhereInputObjectSchema as step_contentWhereInputObjectSchema } from './objects/step_contentWhereInput.schema';

export const step_contentUpdateManySchema: z.ZodType<Prisma.step_contentUpdateManyArgs> = z.object({ data: step_contentUpdateManyMutationInputObjectSchema, where: step_contentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.step_contentUpdateManyArgs>;

export const step_contentUpdateManyZodSchema = z.object({ data: step_contentUpdateManyMutationInputObjectSchema, where: step_contentWhereInputObjectSchema.optional() }).strict();