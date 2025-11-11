import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { filesWhereInputObjectSchema as filesWhereInputObjectSchema } from './objects/filesWhereInput.schema';

export const filesDeleteManySchema: z.ZodType<Prisma.filesDeleteManyArgs> = z.object({ where: filesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.filesDeleteManyArgs>;

export const filesDeleteManyZodSchema = z.object({ where: filesWhereInputObjectSchema.optional() }).strict();