import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { requestsWhereInputObjectSchema as requestsWhereInputObjectSchema } from './objects/requestsWhereInput.schema';

export const requestsDeleteManySchema: z.ZodType<Prisma.requestsDeleteManyArgs> = z.object({ where: requestsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.requestsDeleteManyArgs>;

export const requestsDeleteManyZodSchema = z.object({ where: requestsWhereInputObjectSchema.optional() }).strict();