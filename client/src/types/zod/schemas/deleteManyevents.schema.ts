import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { eventsWhereInputObjectSchema as eventsWhereInputObjectSchema } from './objects/eventsWhereInput.schema';

export const eventsDeleteManySchema: z.ZodType<Prisma.eventsDeleteManyArgs> = z.object({ where: eventsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.eventsDeleteManyArgs>;

export const eventsDeleteManyZodSchema = z.object({ where: eventsWhereInputObjectSchema.optional() }).strict();