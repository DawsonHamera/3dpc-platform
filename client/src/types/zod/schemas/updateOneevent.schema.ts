import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { eventSelectObjectSchema as eventSelectObjectSchema } from './objects/eventSelect.schema';
import { eventIncludeObjectSchema as eventIncludeObjectSchema } from './objects/eventInclude.schema';
import { eventUpdateInputObjectSchema as eventUpdateInputObjectSchema } from './objects/eventUpdateInput.schema';
import { eventUncheckedUpdateInputObjectSchema as eventUncheckedUpdateInputObjectSchema } from './objects/eventUncheckedUpdateInput.schema';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './objects/eventWhereUniqueInput.schema';

export const eventUpdateOneSchema: z.ZodType<Prisma.eventUpdateArgs> = z.object({ select: eventSelectObjectSchema.optional(), include: eventIncludeObjectSchema.optional(), data: z.union([eventUpdateInputObjectSchema, eventUncheckedUpdateInputObjectSchema]), where: eventWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.eventUpdateArgs>;

export const eventUpdateOneZodSchema = z.object({ select: eventSelectObjectSchema.optional(), include: eventIncludeObjectSchema.optional(), data: z.union([eventUpdateInputObjectSchema, eventUncheckedUpdateInputObjectSchema]), where: eventWhereUniqueInputObjectSchema }).strict();