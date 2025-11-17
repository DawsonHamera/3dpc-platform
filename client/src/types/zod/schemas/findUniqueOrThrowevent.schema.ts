import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { eventSelectObjectSchema as eventSelectObjectSchema } from './objects/eventSelect.schema';
import { eventIncludeObjectSchema as eventIncludeObjectSchema } from './objects/eventInclude.schema';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './objects/eventWhereUniqueInput.schema';

export const eventFindUniqueOrThrowSchema: z.ZodType<Prisma.eventFindUniqueOrThrowArgs> = z.object({ select: eventSelectObjectSchema.optional(), include: eventIncludeObjectSchema.optional(), where: eventWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.eventFindUniqueOrThrowArgs>;

export const eventFindUniqueOrThrowZodSchema = z.object({ select: eventSelectObjectSchema.optional(), include: eventIncludeObjectSchema.optional(), where: eventWhereUniqueInputObjectSchema }).strict();