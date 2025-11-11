import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_actionsWhereInputObjectSchema as step_actionsWhereInputObjectSchema } from './objects/step_actionsWhereInput.schema';

export const step_actionsDeleteManySchema: z.ZodType<Prisma.step_actionsDeleteManyArgs> = z.object({ where: step_actionsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.step_actionsDeleteManyArgs>;

export const step_actionsDeleteManyZodSchema = z.object({ where: step_actionsWhereInputObjectSchema.optional() }).strict();