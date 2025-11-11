import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_logsCreateManyInputObjectSchema as process_logsCreateManyInputObjectSchema } from './objects/process_logsCreateManyInput.schema';

export const process_logsCreateManySchema: z.ZodType<Prisma.process_logsCreateManyArgs> = z.object({ data: z.union([ process_logsCreateManyInputObjectSchema, z.array(process_logsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.process_logsCreateManyArgs>;

export const process_logsCreateManyZodSchema = z.object({ data: z.union([ process_logsCreateManyInputObjectSchema, z.array(process_logsCreateManyInputObjectSchema) ]),  }).strict();