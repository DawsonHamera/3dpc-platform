import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { requestsSelectObjectSchema as requestsSelectObjectSchema } from './objects/requestsSelect.schema';
import { requestsIncludeObjectSchema as requestsIncludeObjectSchema } from './objects/requestsInclude.schema';
import { requestsWhereUniqueInputObjectSchema as requestsWhereUniqueInputObjectSchema } from './objects/requestsWhereUniqueInput.schema';
import { requestsCreateInputObjectSchema as requestsCreateInputObjectSchema } from './objects/requestsCreateInput.schema';
import { requestsUncheckedCreateInputObjectSchema as requestsUncheckedCreateInputObjectSchema } from './objects/requestsUncheckedCreateInput.schema';
import { requestsUpdateInputObjectSchema as requestsUpdateInputObjectSchema } from './objects/requestsUpdateInput.schema';
import { requestsUncheckedUpdateInputObjectSchema as requestsUncheckedUpdateInputObjectSchema } from './objects/requestsUncheckedUpdateInput.schema';

export const requestsUpsertOneSchema: z.ZodType<Prisma.requestsUpsertArgs> = z.object({ select: requestsSelectObjectSchema.optional(), include: requestsIncludeObjectSchema.optional(), where: requestsWhereUniqueInputObjectSchema, create: z.union([ requestsCreateInputObjectSchema, requestsUncheckedCreateInputObjectSchema ]), update: z.union([ requestsUpdateInputObjectSchema, requestsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.requestsUpsertArgs>;

export const requestsUpsertOneZodSchema = z.object({ select: requestsSelectObjectSchema.optional(), include: requestsIncludeObjectSchema.optional(), where: requestsWhereUniqueInputObjectSchema, create: z.union([ requestsCreateInputObjectSchema, requestsUncheckedCreateInputObjectSchema ]), update: z.union([ requestsUpdateInputObjectSchema, requestsUncheckedUpdateInputObjectSchema ]) }).strict();