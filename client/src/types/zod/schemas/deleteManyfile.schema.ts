import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { fileWhereInputObjectSchema as fileWhereInputObjectSchema } from './objects/fileWhereInput.schema';

export const fileDeleteManySchema: z.ZodType<Prisma.fileDeleteManyArgs> = z.object({ where: fileWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.fileDeleteManyArgs>;

export const fileDeleteManyZodSchema = z.object({ where: fileWhereInputObjectSchema.optional() }).strict();