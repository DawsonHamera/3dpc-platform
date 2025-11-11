import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { task_statusesCreateManyInputObjectSchema as task_statusesCreateManyInputObjectSchema } from './objects/task_statusesCreateManyInput.schema';

export const task_statusesCreateManySchema: z.ZodType<Prisma.task_statusesCreateManyArgs> = z.object({ data: z.union([ task_statusesCreateManyInputObjectSchema, z.array(task_statusesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.task_statusesCreateManyArgs>;

export const task_statusesCreateManyZodSchema = z.object({ data: z.union([ task_statusesCreateManyInputObjectSchema, z.array(task_statusesCreateManyInputObjectSchema) ]),  }).strict();