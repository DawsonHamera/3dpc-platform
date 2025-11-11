import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_actionsUpdateManyMutationInputObjectSchema as step_actionsUpdateManyMutationInputObjectSchema } from './objects/step_actionsUpdateManyMutationInput.schema';
import { step_actionsWhereInputObjectSchema as step_actionsWhereInputObjectSchema } from './objects/step_actionsWhereInput.schema';

export const step_actionsUpdateManySchema: z.ZodType<Prisma.step_actionsUpdateManyArgs> = z.object({ data: step_actionsUpdateManyMutationInputObjectSchema, where: step_actionsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.step_actionsUpdateManyArgs>;

export const step_actionsUpdateManyZodSchema = z.object({ data: step_actionsUpdateManyMutationInputObjectSchema, where: step_actionsWhereInputObjectSchema.optional() }).strict();