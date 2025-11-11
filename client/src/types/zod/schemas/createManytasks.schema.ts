import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tasksCreateManyInputObjectSchema as tasksCreateManyInputObjectSchema } from './objects/tasksCreateManyInput.schema';

export const tasksCreateManySchema: z.ZodType<Prisma.tasksCreateManyArgs> = z.object({ data: z.union([ tasksCreateManyInputObjectSchema, z.array(tasksCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tasksCreateManyArgs>;

export const tasksCreateManyZodSchema = z.object({ data: z.union([ tasksCreateManyInputObjectSchema, z.array(tasksCreateManyInputObjectSchema) ]),  }).strict();