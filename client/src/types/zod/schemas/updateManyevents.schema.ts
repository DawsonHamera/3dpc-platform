import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { eventsUpdateManyMutationInputObjectSchema as eventsUpdateManyMutationInputObjectSchema } from './objects/eventsUpdateManyMutationInput.schema';
import { eventsWhereInputObjectSchema as eventsWhereInputObjectSchema } from './objects/eventsWhereInput.schema';

export const eventsUpdateManySchema: z.ZodType<Prisma.eventsUpdateManyArgs> = z.object({ data: eventsUpdateManyMutationInputObjectSchema, where: eventsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.eventsUpdateManyArgs>;

export const eventsUpdateManyZodSchema = z.object({ data: eventsUpdateManyMutationInputObjectSchema, where: eventsWhereInputObjectSchema.optional() }).strict();