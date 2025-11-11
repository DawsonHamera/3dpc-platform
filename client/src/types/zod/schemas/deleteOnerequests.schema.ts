import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { requestsSelectObjectSchema as requestsSelectObjectSchema } from './objects/requestsSelect.schema';
import { requestsIncludeObjectSchema as requestsIncludeObjectSchema } from './objects/requestsInclude.schema';
import { requestsWhereUniqueInputObjectSchema as requestsWhereUniqueInputObjectSchema } from './objects/requestsWhereUniqueInput.schema';

export const requestsDeleteOneSchema: z.ZodType<Prisma.requestsDeleteArgs> = z.object({ select: requestsSelectObjectSchema.optional(), include: requestsIncludeObjectSchema.optional(), where: requestsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.requestsDeleteArgs>;

export const requestsDeleteOneZodSchema = z.object({ select: requestsSelectObjectSchema.optional(), include: requestsIncludeObjectSchema.optional(), where: requestsWhereUniqueInputObjectSchema }).strict();