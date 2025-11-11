import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_instance_stepsCreateManyInputObjectSchema as process_instance_stepsCreateManyInputObjectSchema } from './objects/process_instance_stepsCreateManyInput.schema';

export const process_instance_stepsCreateManySchema: z.ZodType<Prisma.process_instance_stepsCreateManyArgs> = z.object({ data: z.union([ process_instance_stepsCreateManyInputObjectSchema, z.array(process_instance_stepsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.process_instance_stepsCreateManyArgs>;

export const process_instance_stepsCreateManyZodSchema = z.object({ data: z.union([ process_instance_stepsCreateManyInputObjectSchema, z.array(process_instance_stepsCreateManyInputObjectSchema) ]),  }).strict();