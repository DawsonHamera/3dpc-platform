import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { request_statusesSelectObjectSchema as request_statusesSelectObjectSchema } from './objects/request_statusesSelect.schema';
import { request_statusesIncludeObjectSchema as request_statusesIncludeObjectSchema } from './objects/request_statusesInclude.schema';
import { request_statusesCreateInputObjectSchema as request_statusesCreateInputObjectSchema } from './objects/request_statusesCreateInput.schema';
import { request_statusesUncheckedCreateInputObjectSchema as request_statusesUncheckedCreateInputObjectSchema } from './objects/request_statusesUncheckedCreateInput.schema';

export const request_statusesCreateOneSchema: z.ZodType<Prisma.request_statusesCreateArgs> = z.object({ select: request_statusesSelectObjectSchema.optional(), include: request_statusesIncludeObjectSchema.optional(), data: z.union([request_statusesCreateInputObjectSchema, request_statusesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.request_statusesCreateArgs>;

export const request_statusesCreateOneZodSchema = z.object({ select: request_statusesSelectObjectSchema.optional(), include: request_statusesIncludeObjectSchema.optional(), data: z.union([request_statusesCreateInputObjectSchema, request_statusesUncheckedCreateInputObjectSchema]) }).strict();