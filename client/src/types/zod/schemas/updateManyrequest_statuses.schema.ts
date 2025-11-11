import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { request_statusesUpdateManyMutationInputObjectSchema as request_statusesUpdateManyMutationInputObjectSchema } from './objects/request_statusesUpdateManyMutationInput.schema';
import { request_statusesWhereInputObjectSchema as request_statusesWhereInputObjectSchema } from './objects/request_statusesWhereInput.schema';

export const request_statusesUpdateManySchema: z.ZodType<Prisma.request_statusesUpdateManyArgs> = z.object({ data: request_statusesUpdateManyMutationInputObjectSchema, where: request_statusesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.request_statusesUpdateManyArgs>;

export const request_statusesUpdateManyZodSchema = z.object({ data: request_statusesUpdateManyMutationInputObjectSchema, where: request_statusesWhereInputObjectSchema.optional() }).strict();