import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { rolesWhereInputObjectSchema as rolesWhereInputObjectSchema } from './objects/rolesWhereInput.schema';

export const rolesDeleteManySchema: z.ZodType<Prisma.rolesDeleteManyArgs> = z.object({ where: rolesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.rolesDeleteManyArgs>;

export const rolesDeleteManyZodSchema = z.object({ where: rolesWhereInputObjectSchema.optional() }).strict();