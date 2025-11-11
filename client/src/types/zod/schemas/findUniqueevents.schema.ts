import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { eventsSelectObjectSchema as eventsSelectObjectSchema } from './objects/eventsSelect.schema';
import { eventsIncludeObjectSchema as eventsIncludeObjectSchema } from './objects/eventsInclude.schema';
import { eventsWhereUniqueInputObjectSchema as eventsWhereUniqueInputObjectSchema } from './objects/eventsWhereUniqueInput.schema';

export const eventsFindUniqueSchema: z.ZodType<Prisma.eventsFindUniqueArgs> = z.object({ select: eventsSelectObjectSchema.optional(), include: eventsIncludeObjectSchema.optional(), where: eventsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.eventsFindUniqueArgs>;

export const eventsFindUniqueZodSchema = z.object({ select: eventsSelectObjectSchema.optional(), include: eventsIncludeObjectSchema.optional(), where: eventsWhereUniqueInputObjectSchema }).strict();