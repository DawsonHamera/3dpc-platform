import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { requestsUpdateManyMutationInputObjectSchema as requestsUpdateManyMutationInputObjectSchema } from './objects/requestsUpdateManyMutationInput.schema';
import { requestsWhereInputObjectSchema as requestsWhereInputObjectSchema } from './objects/requestsWhereInput.schema';

export const requestsUpdateManySchema: z.ZodType<Prisma.requestsUpdateManyArgs> = z.object({ data: requestsUpdateManyMutationInputObjectSchema, where: requestsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.requestsUpdateManyArgs>;

export const requestsUpdateManyZodSchema = z.object({ data: requestsUpdateManyMutationInputObjectSchema, where: requestsWhereInputObjectSchema.optional() }).strict();