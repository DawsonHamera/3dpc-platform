import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { request_statusesSelectObjectSchema as request_statusesSelectObjectSchema } from './objects/request_statusesSelect.schema';
import { request_statusesIncludeObjectSchema as request_statusesIncludeObjectSchema } from './objects/request_statusesInclude.schema';
import { request_statusesUpdateInputObjectSchema as request_statusesUpdateInputObjectSchema } from './objects/request_statusesUpdateInput.schema';
import { request_statusesUncheckedUpdateInputObjectSchema as request_statusesUncheckedUpdateInputObjectSchema } from './objects/request_statusesUncheckedUpdateInput.schema';
import { request_statusesWhereUniqueInputObjectSchema as request_statusesWhereUniqueInputObjectSchema } from './objects/request_statusesWhereUniqueInput.schema';

export const request_statusesUpdateOneSchema: z.ZodType<Prisma.request_statusesUpdateArgs> = z.object({ select: request_statusesSelectObjectSchema.optional(), include: request_statusesIncludeObjectSchema.optional(), data: z.union([request_statusesUpdateInputObjectSchema, request_statusesUncheckedUpdateInputObjectSchema]), where: request_statusesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.request_statusesUpdateArgs>;

export const request_statusesUpdateOneZodSchema = z.object({ select: request_statusesSelectObjectSchema.optional(), include: request_statusesIncludeObjectSchema.optional(), data: z.union([request_statusesUpdateInputObjectSchema, request_statusesUncheckedUpdateInputObjectSchema]), where: request_statusesWhereUniqueInputObjectSchema }).strict();