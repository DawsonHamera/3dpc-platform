import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tasksWhereInputObjectSchema as tasksWhereInputObjectSchema } from './objects/tasksWhereInput.schema';

export const tasksDeleteManySchema: z.ZodType<Prisma.tasksDeleteManyArgs> = z.object({ where: tasksWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tasksDeleteManyArgs>;

export const tasksDeleteManyZodSchema = z.object({ where: tasksWhereInputObjectSchema.optional() }).strict();