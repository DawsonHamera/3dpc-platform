import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { requestsSelectObjectSchema as requestsSelectObjectSchema } from './objects/requestsSelect.schema';
import { requestsIncludeObjectSchema as requestsIncludeObjectSchema } from './objects/requestsInclude.schema';
import { requestsWhereUniqueInputObjectSchema as requestsWhereUniqueInputObjectSchema } from './objects/requestsWhereUniqueInput.schema';

export const requestsFindUniqueOrThrowSchema: z.ZodType<Prisma.requestsFindUniqueOrThrowArgs> = z.object({ select: requestsSelectObjectSchema.optional(), include: requestsIncludeObjectSchema.optional(), where: requestsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.requestsFindUniqueOrThrowArgs>;

export const requestsFindUniqueOrThrowZodSchema = z.object({ select: requestsSelectObjectSchema.optional(), include: requestsIncludeObjectSchema.optional(), where: requestsWhereUniqueInputObjectSchema }).strict();