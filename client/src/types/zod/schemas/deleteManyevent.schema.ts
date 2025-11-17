import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { eventWhereInputObjectSchema as eventWhereInputObjectSchema } from './objects/eventWhereInput.schema';

export const eventDeleteManySchema: z.ZodType<Prisma.eventDeleteManyArgs> = z.object({ where: eventWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.eventDeleteManyArgs>;

export const eventDeleteManyZodSchema = z.object({ where: eventWhereInputObjectSchema.optional() }).strict();