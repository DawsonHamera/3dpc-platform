import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { request_statusesWhereInputObjectSchema as request_statusesWhereInputObjectSchema } from './objects/request_statusesWhereInput.schema';

export const request_statusesDeleteManySchema: z.ZodType<Prisma.request_statusesDeleteManyArgs> = z.object({ where: request_statusesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.request_statusesDeleteManyArgs>;

export const request_statusesDeleteManyZodSchema = z.object({ where: request_statusesWhereInputObjectSchema.optional() }).strict();