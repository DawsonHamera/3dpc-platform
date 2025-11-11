import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { requestsSelectObjectSchema as requestsSelectObjectSchema } from './objects/requestsSelect.schema';
import { requestsIncludeObjectSchema as requestsIncludeObjectSchema } from './objects/requestsInclude.schema';
import { requestsCreateInputObjectSchema as requestsCreateInputObjectSchema } from './objects/requestsCreateInput.schema';
import { requestsUncheckedCreateInputObjectSchema as requestsUncheckedCreateInputObjectSchema } from './objects/requestsUncheckedCreateInput.schema';

export const requestsCreateOneSchema: z.ZodType<Prisma.requestsCreateArgs> = z.object({ select: requestsSelectObjectSchema.optional(), include: requestsIncludeObjectSchema.optional(), data: z.union([requestsCreateInputObjectSchema, requestsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.requestsCreateArgs>;

export const requestsCreateOneZodSchema = z.object({ select: requestsSelectObjectSchema.optional(), include: requestsIncludeObjectSchema.optional(), data: z.union([requestsCreateInputObjectSchema, requestsUncheckedCreateInputObjectSchema]) }).strict();