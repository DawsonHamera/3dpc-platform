import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { roleUpdateManyMutationInputObjectSchema as roleUpdateManyMutationInputObjectSchema } from './objects/roleUpdateManyMutationInput.schema';
import { roleWhereInputObjectSchema as roleWhereInputObjectSchema } from './objects/roleWhereInput.schema';

export const roleUpdateManySchema: z.ZodType<Prisma.roleUpdateManyArgs> = z.object({ data: roleUpdateManyMutationInputObjectSchema, where: roleWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.roleUpdateManyArgs>;

export const roleUpdateManyZodSchema = z.object({ data: roleUpdateManyMutationInputObjectSchema, where: roleWhereInputObjectSchema.optional() }).strict();