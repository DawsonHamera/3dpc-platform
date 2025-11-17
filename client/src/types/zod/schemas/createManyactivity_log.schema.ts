import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { activity_logCreateManyInputObjectSchema as activity_logCreateManyInputObjectSchema } from './objects/activity_logCreateManyInput.schema';

export const activity_logCreateManySchema: z.ZodType<Prisma.activity_logCreateManyArgs> = z.object({ data: z.union([ activity_logCreateManyInputObjectSchema, z.array(activity_logCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.activity_logCreateManyArgs>;

export const activity_logCreateManyZodSchema = z.object({ data: z.union([ activity_logCreateManyInputObjectSchema, z.array(activity_logCreateManyInputObjectSchema) ]),  }).strict();