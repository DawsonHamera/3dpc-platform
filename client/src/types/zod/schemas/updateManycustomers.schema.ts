import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { customersUpdateManyMutationInputObjectSchema as customersUpdateManyMutationInputObjectSchema } from './objects/customersUpdateManyMutationInput.schema';
import { customersWhereInputObjectSchema as customersWhereInputObjectSchema } from './objects/customersWhereInput.schema';

export const customersUpdateManySchema: z.ZodType<Prisma.customersUpdateManyArgs> = z.object({ data: customersUpdateManyMutationInputObjectSchema, where: customersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.customersUpdateManyArgs>;

export const customersUpdateManyZodSchema = z.object({ data: customersUpdateManyMutationInputObjectSchema, where: customersWhereInputObjectSchema.optional() }).strict();