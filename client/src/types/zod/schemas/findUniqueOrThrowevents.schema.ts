import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { eventsSelectObjectSchema as eventsSelectObjectSchema } from './objects/eventsSelect.schema';
import { eventsIncludeObjectSchema as eventsIncludeObjectSchema } from './objects/eventsInclude.schema';
import { eventsWhereUniqueInputObjectSchema as eventsWhereUniqueInputObjectSchema } from './objects/eventsWhereUniqueInput.schema';

export const eventsFindUniqueOrThrowSchema: z.ZodType<Prisma.eventsFindUniqueOrThrowArgs> = z.object({ select: eventsSelectObjectSchema.optional(), include: eventsIncludeObjectSchema.optional(), where: eventsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.eventsFindUniqueOrThrowArgs>;

export const eventsFindUniqueOrThrowZodSchema = z.object({ select: eventsSelectObjectSchema.optional(), include: eventsIncludeObjectSchema.optional(), where: eventsWhereUniqueInputObjectSchema }).strict();