import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { eventSelectObjectSchema as eventSelectObjectSchema } from './objects/eventSelect.schema';
import { eventIncludeObjectSchema as eventIncludeObjectSchema } from './objects/eventInclude.schema';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './objects/eventWhereUniqueInput.schema';

export const eventFindUniqueSchema: z.ZodType<Prisma.eventFindUniqueArgs> = z.object({ select: eventSelectObjectSchema.optional(), include: eventIncludeObjectSchema.optional(), where: eventWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.eventFindUniqueArgs>;

export const eventFindUniqueZodSchema = z.object({ select: eventSelectObjectSchema.optional(), include: eventIncludeObjectSchema.optional(), where: eventWhereUniqueInputObjectSchema }).strict();