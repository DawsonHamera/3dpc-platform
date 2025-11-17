import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { eventUpdateManyMutationInputObjectSchema as eventUpdateManyMutationInputObjectSchema } from './objects/eventUpdateManyMutationInput.schema';
import { eventWhereInputObjectSchema as eventWhereInputObjectSchema } from './objects/eventWhereInput.schema';

export const eventUpdateManySchema: z.ZodType<Prisma.eventUpdateManyArgs> = z.object({ data: eventUpdateManyMutationInputObjectSchema, where: eventWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.eventUpdateManyArgs>;

export const eventUpdateManyZodSchema = z.object({ data: eventUpdateManyMutationInputObjectSchema, where: eventWhereInputObjectSchema.optional() }).strict();