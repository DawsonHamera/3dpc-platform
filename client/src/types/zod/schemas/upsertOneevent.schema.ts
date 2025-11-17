import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { eventSelectObjectSchema as eventSelectObjectSchema } from './objects/eventSelect.schema';
import { eventIncludeObjectSchema as eventIncludeObjectSchema } from './objects/eventInclude.schema';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './objects/eventWhereUniqueInput.schema';
import { eventCreateInputObjectSchema as eventCreateInputObjectSchema } from './objects/eventCreateInput.schema';
import { eventUncheckedCreateInputObjectSchema as eventUncheckedCreateInputObjectSchema } from './objects/eventUncheckedCreateInput.schema';
import { eventUpdateInputObjectSchema as eventUpdateInputObjectSchema } from './objects/eventUpdateInput.schema';
import { eventUncheckedUpdateInputObjectSchema as eventUncheckedUpdateInputObjectSchema } from './objects/eventUncheckedUpdateInput.schema';

export const eventUpsertOneSchema: z.ZodType<Prisma.eventUpsertArgs> = z.object({ select: eventSelectObjectSchema.optional(), include: eventIncludeObjectSchema.optional(), where: eventWhereUniqueInputObjectSchema, create: z.union([ eventCreateInputObjectSchema, eventUncheckedCreateInputObjectSchema ]), update: z.union([ eventUpdateInputObjectSchema, eventUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.eventUpsertArgs>;

export const eventUpsertOneZodSchema = z.object({ select: eventSelectObjectSchema.optional(), include: eventIncludeObjectSchema.optional(), where: eventWhereUniqueInputObjectSchema, create: z.union([ eventCreateInputObjectSchema, eventUncheckedCreateInputObjectSchema ]), update: z.union([ eventUpdateInputObjectSchema, eventUncheckedUpdateInputObjectSchema ]) }).strict();