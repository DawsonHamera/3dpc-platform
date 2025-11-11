import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { request_statusesSelectObjectSchema as request_statusesSelectObjectSchema } from './objects/request_statusesSelect.schema';
import { request_statusesIncludeObjectSchema as request_statusesIncludeObjectSchema } from './objects/request_statusesInclude.schema';
import { request_statusesWhereUniqueInputObjectSchema as request_statusesWhereUniqueInputObjectSchema } from './objects/request_statusesWhereUniqueInput.schema';
import { request_statusesCreateInputObjectSchema as request_statusesCreateInputObjectSchema } from './objects/request_statusesCreateInput.schema';
import { request_statusesUncheckedCreateInputObjectSchema as request_statusesUncheckedCreateInputObjectSchema } from './objects/request_statusesUncheckedCreateInput.schema';
import { request_statusesUpdateInputObjectSchema as request_statusesUpdateInputObjectSchema } from './objects/request_statusesUpdateInput.schema';
import { request_statusesUncheckedUpdateInputObjectSchema as request_statusesUncheckedUpdateInputObjectSchema } from './objects/request_statusesUncheckedUpdateInput.schema';

export const request_statusesUpsertOneSchema: z.ZodType<Prisma.request_statusesUpsertArgs> = z.object({ select: request_statusesSelectObjectSchema.optional(), include: request_statusesIncludeObjectSchema.optional(), where: request_statusesWhereUniqueInputObjectSchema, create: z.union([ request_statusesCreateInputObjectSchema, request_statusesUncheckedCreateInputObjectSchema ]), update: z.union([ request_statusesUpdateInputObjectSchema, request_statusesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.request_statusesUpsertArgs>;

export const request_statusesUpsertOneZodSchema = z.object({ select: request_statusesSelectObjectSchema.optional(), include: request_statusesIncludeObjectSchema.optional(), where: request_statusesWhereUniqueInputObjectSchema, create: z.union([ request_statusesCreateInputObjectSchema, request_statusesUncheckedCreateInputObjectSchema ]), update: z.union([ request_statusesUpdateInputObjectSchema, request_statusesUncheckedUpdateInputObjectSchema ]) }).strict();