import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { usersUpdateManyMutationInputObjectSchema as usersUpdateManyMutationInputObjectSchema } from './objects/usersUpdateManyMutationInput.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './objects/usersWhereInput.schema';

export const usersUpdateManySchema: z.ZodType<Prisma.usersUpdateManyArgs> = z.object({ data: usersUpdateManyMutationInputObjectSchema, where: usersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.usersUpdateManyArgs>;

export const usersUpdateManyZodSchema = z.object({ data: usersUpdateManyMutationInputObjectSchema, where: usersWhereInputObjectSchema.optional() }).strict();