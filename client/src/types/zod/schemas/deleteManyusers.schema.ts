import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './objects/usersWhereInput.schema';

export const usersDeleteManySchema: z.ZodType<Prisma.usersDeleteManyArgs> = z.object({ where: usersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.usersDeleteManyArgs>;

export const usersDeleteManyZodSchema = z.object({ where: usersWhereInputObjectSchema.optional() }).strict();