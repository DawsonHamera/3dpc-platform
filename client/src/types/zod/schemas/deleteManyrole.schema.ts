import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { roleWhereInputObjectSchema as roleWhereInputObjectSchema } from './objects/roleWhereInput.schema';

export const roleDeleteManySchema: z.ZodType<Prisma.roleDeleteManyArgs> = z.object({ where: roleWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.roleDeleteManyArgs>;

export const roleDeleteManyZodSchema = z.object({ where: roleWhereInputObjectSchema.optional() }).strict();