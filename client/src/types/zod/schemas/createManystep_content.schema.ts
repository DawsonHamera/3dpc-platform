import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_contentCreateManyInputObjectSchema as step_contentCreateManyInputObjectSchema } from './objects/step_contentCreateManyInput.schema';

export const step_contentCreateManySchema: z.ZodType<Prisma.step_contentCreateManyArgs> = z.object({ data: z.union([ step_contentCreateManyInputObjectSchema, z.array(step_contentCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.step_contentCreateManyArgs>;

export const step_contentCreateManyZodSchema = z.object({ data: z.union([ step_contentCreateManyInputObjectSchema, z.array(step_contentCreateManyInputObjectSchema) ]),  }).strict();