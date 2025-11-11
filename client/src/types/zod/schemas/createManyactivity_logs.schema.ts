import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { activity_logsCreateManyInputObjectSchema as activity_logsCreateManyInputObjectSchema } from './objects/activity_logsCreateManyInput.schema';

export const activity_logsCreateManySchema: z.ZodType<Prisma.activity_logsCreateManyArgs> = z.object({ data: z.union([ activity_logsCreateManyInputObjectSchema, z.array(activity_logsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.activity_logsCreateManyArgs>;

export const activity_logsCreateManyZodSchema = z.object({ data: z.union([ activity_logsCreateManyInputObjectSchema, z.array(activity_logsCreateManyInputObjectSchema) ]),  }).strict();