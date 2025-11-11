import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_actionsCreateManyInputObjectSchema as step_actionsCreateManyInputObjectSchema } from './objects/step_actionsCreateManyInput.schema';

export const step_actionsCreateManySchema: z.ZodType<Prisma.step_actionsCreateManyArgs> = z.object({ data: z.union([ step_actionsCreateManyInputObjectSchema, z.array(step_actionsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.step_actionsCreateManyArgs>;

export const step_actionsCreateManyZodSchema = z.object({ data: z.union([ step_actionsCreateManyInputObjectSchema, z.array(step_actionsCreateManyInputObjectSchema) ]),  }).strict();