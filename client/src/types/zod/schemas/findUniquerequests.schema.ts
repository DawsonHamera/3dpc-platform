import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { requestsSelectObjectSchema as requestsSelectObjectSchema } from './objects/requestsSelect.schema';
import { requestsIncludeObjectSchema as requestsIncludeObjectSchema } from './objects/requestsInclude.schema';
import { requestsWhereUniqueInputObjectSchema as requestsWhereUniqueInputObjectSchema } from './objects/requestsWhereUniqueInput.schema';

export const requestsFindUniqueSchema: z.ZodType<Prisma.requestsFindUniqueArgs> = z.object({ select: requestsSelectObjectSchema.optional(), include: requestsIncludeObjectSchema.optional(), where: requestsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.requestsFindUniqueArgs>;

export const requestsFindUniqueZodSchema = z.object({ select: requestsSelectObjectSchema.optional(), include: requestsIncludeObjectSchema.optional(), where: requestsWhereUniqueInputObjectSchema }).strict();