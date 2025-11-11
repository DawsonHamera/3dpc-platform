import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { printersUpdateManyMutationInputObjectSchema as printersUpdateManyMutationInputObjectSchema } from './objects/printersUpdateManyMutationInput.schema';
import { printersWhereInputObjectSchema as printersWhereInputObjectSchema } from './objects/printersWhereInput.schema';

export const printersUpdateManySchema: z.ZodType<Prisma.printersUpdateManyArgs> = z.object({ data: printersUpdateManyMutationInputObjectSchema, where: printersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.printersUpdateManyArgs>;

export const printersUpdateManyZodSchema = z.object({ data: printersUpdateManyMutationInputObjectSchema, where: printersWhereInputObjectSchema.optional() }).strict();