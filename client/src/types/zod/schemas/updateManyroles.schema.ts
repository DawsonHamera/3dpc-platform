import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { rolesUpdateManyMutationInputObjectSchema as rolesUpdateManyMutationInputObjectSchema } from './objects/rolesUpdateManyMutationInput.schema';
import { rolesWhereInputObjectSchema as rolesWhereInputObjectSchema } from './objects/rolesWhereInput.schema';

export const rolesUpdateManySchema: z.ZodType<Prisma.rolesUpdateManyArgs> = z.object({ data: rolesUpdateManyMutationInputObjectSchema, where: rolesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.rolesUpdateManyArgs>;

export const rolesUpdateManyZodSchema = z.object({ data: rolesUpdateManyMutationInputObjectSchema, where: rolesWhereInputObjectSchema.optional() }).strict();