import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { filesUpdateManyMutationInputObjectSchema as filesUpdateManyMutationInputObjectSchema } from './objects/filesUpdateManyMutationInput.schema';
import { filesWhereInputObjectSchema as filesWhereInputObjectSchema } from './objects/filesWhereInput.schema';

export const filesUpdateManySchema: z.ZodType<Prisma.filesUpdateManyArgs> = z.object({ data: filesUpdateManyMutationInputObjectSchema, where: filesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.filesUpdateManyArgs>;

export const filesUpdateManyZodSchema = z.object({ data: filesUpdateManyMutationInputObjectSchema, where: filesWhereInputObjectSchema.optional() }).strict();