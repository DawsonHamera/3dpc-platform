import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_template_stepsCreateManyInputObjectSchema as process_template_stepsCreateManyInputObjectSchema } from './objects/process_template_stepsCreateManyInput.schema';

export const process_template_stepsCreateManySchema: z.ZodType<Prisma.process_template_stepsCreateManyArgs> = z.object({ data: z.union([ process_template_stepsCreateManyInputObjectSchema, z.array(process_template_stepsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.process_template_stepsCreateManyArgs>;

export const process_template_stepsCreateManyZodSchema = z.object({ data: z.union([ process_template_stepsCreateManyInputObjectSchema, z.array(process_template_stepsCreateManyInputObjectSchema) ]),  }).strict();