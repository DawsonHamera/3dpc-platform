import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tasksUpdateManyMutationInputObjectSchema as tasksUpdateManyMutationInputObjectSchema } from './objects/tasksUpdateManyMutationInput.schema';
import { tasksWhereInputObjectSchema as tasksWhereInputObjectSchema } from './objects/tasksWhereInput.schema';

export const tasksUpdateManySchema: z.ZodType<Prisma.tasksUpdateManyArgs> = z.object({ data: tasksUpdateManyMutationInputObjectSchema, where: tasksWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tasksUpdateManyArgs>;

export const tasksUpdateManyZodSchema = z.object({ data: tasksUpdateManyMutationInputObjectSchema, where: tasksWhereInputObjectSchema.optional() }).strict();