import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { request_statusesSelectObjectSchema as request_statusesSelectObjectSchema } from './objects/request_statusesSelect.schema';
import { request_statusesIncludeObjectSchema as request_statusesIncludeObjectSchema } from './objects/request_statusesInclude.schema';
import { request_statusesWhereUniqueInputObjectSchema as request_statusesWhereUniqueInputObjectSchema } from './objects/request_statusesWhereUniqueInput.schema';

export const request_statusesFindUniqueOrThrowSchema: z.ZodType<Prisma.request_statusesFindUniqueOrThrowArgs> = z.object({ select: request_statusesSelectObjectSchema.optional(), include: request_statusesIncludeObjectSchema.optional(), where: request_statusesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.request_statusesFindUniqueOrThrowArgs>;

export const request_statusesFindUniqueOrThrowZodSchema = z.object({ select: request_statusesSelectObjectSchema.optional(), include: request_statusesIncludeObjectSchema.optional(), where: request_statusesWhereUniqueInputObjectSchema }).strict();