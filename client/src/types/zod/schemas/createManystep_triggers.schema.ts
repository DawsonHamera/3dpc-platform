import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_triggersCreateManyInputObjectSchema as step_triggersCreateManyInputObjectSchema } from './objects/step_triggersCreateManyInput.schema';

export const step_triggersCreateManySchema: z.ZodType<Prisma.step_triggersCreateManyArgs> = z.object({ data: z.union([ step_triggersCreateManyInputObjectSchema, z.array(step_triggersCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.step_triggersCreateManyArgs>;

export const step_triggersCreateManyZodSchema = z.object({ data: z.union([ step_triggersCreateManyInputObjectSchema, z.array(step_triggersCreateManyInputObjectSchema) ]),  }).strict();