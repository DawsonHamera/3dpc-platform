import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_triggersUpdateManyMutationInputObjectSchema as step_triggersUpdateManyMutationInputObjectSchema } from './objects/step_triggersUpdateManyMutationInput.schema';
import { step_triggersWhereInputObjectSchema as step_triggersWhereInputObjectSchema } from './objects/step_triggersWhereInput.schema';

export const step_triggersUpdateManySchema: z.ZodType<Prisma.step_triggersUpdateManyArgs> = z.object({ data: step_triggersUpdateManyMutationInputObjectSchema, where: step_triggersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.step_triggersUpdateManyArgs>;

export const step_triggersUpdateManyZodSchema = z.object({ data: step_triggersUpdateManyMutationInputObjectSchema, where: step_triggersWhereInputObjectSchema.optional() }).strict();