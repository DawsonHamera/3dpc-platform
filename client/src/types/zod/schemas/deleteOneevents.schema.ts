import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { eventsSelectObjectSchema as eventsSelectObjectSchema } from './objects/eventsSelect.schema';
import { eventsIncludeObjectSchema as eventsIncludeObjectSchema } from './objects/eventsInclude.schema';
import { eventsWhereUniqueInputObjectSchema as eventsWhereUniqueInputObjectSchema } from './objects/eventsWhereUniqueInput.schema';

export const eventsDeleteOneSchema: z.ZodType<Prisma.eventsDeleteArgs> = z.object({ select: eventsSelectObjectSchema.optional(), include: eventsIncludeObjectSchema.optional(), where: eventsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.eventsDeleteArgs>;

export const eventsDeleteOneZodSchema = z.object({ select: eventsSelectObjectSchema.optional(), include: eventsIncludeObjectSchema.optional(), where: eventsWhereUniqueInputObjectSchema }).strict();