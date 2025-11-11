import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { requestsSelectObjectSchema as requestsSelectObjectSchema } from './objects/requestsSelect.schema';
import { requestsIncludeObjectSchema as requestsIncludeObjectSchema } from './objects/requestsInclude.schema';
import { requestsUpdateInputObjectSchema as requestsUpdateInputObjectSchema } from './objects/requestsUpdateInput.schema';
import { requestsUncheckedUpdateInputObjectSchema as requestsUncheckedUpdateInputObjectSchema } from './objects/requestsUncheckedUpdateInput.schema';
import { requestsWhereUniqueInputObjectSchema as requestsWhereUniqueInputObjectSchema } from './objects/requestsWhereUniqueInput.schema';

export const requestsUpdateOneSchema: z.ZodType<Prisma.requestsUpdateArgs> = z.object({ select: requestsSelectObjectSchema.optional(), include: requestsIncludeObjectSchema.optional(), data: z.union([requestsUpdateInputObjectSchema, requestsUncheckedUpdateInputObjectSchema]), where: requestsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.requestsUpdateArgs>;

export const requestsUpdateOneZodSchema = z.object({ select: requestsSelectObjectSchema.optional(), include: requestsIncludeObjectSchema.optional(), data: z.union([requestsUpdateInputObjectSchema, requestsUncheckedUpdateInputObjectSchema]), where: requestsWhereUniqueInputObjectSchema }).strict();