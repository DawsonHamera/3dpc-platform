import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { fileUpdateManyMutationInputObjectSchema as fileUpdateManyMutationInputObjectSchema } from './objects/fileUpdateManyMutationInput.schema';
import { fileWhereInputObjectSchema as fileWhereInputObjectSchema } from './objects/fileWhereInput.schema';

export const fileUpdateManySchema: z.ZodType<Prisma.fileUpdateManyArgs> = z.object({ data: fileUpdateManyMutationInputObjectSchema, where: fileWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.fileUpdateManyArgs>;

export const fileUpdateManyZodSchema = z.object({ data: fileUpdateManyMutationInputObjectSchema, where: fileWhereInputObjectSchema.optional() }).strict();