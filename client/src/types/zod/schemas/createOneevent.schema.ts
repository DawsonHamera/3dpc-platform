import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { eventSelectObjectSchema as eventSelectObjectSchema } from './objects/eventSelect.schema';
import { eventIncludeObjectSchema as eventIncludeObjectSchema } from './objects/eventInclude.schema';
import { eventCreateInputObjectSchema as eventCreateInputObjectSchema } from './objects/eventCreateInput.schema';
import { eventUncheckedCreateInputObjectSchema as eventUncheckedCreateInputObjectSchema } from './objects/eventUncheckedCreateInput.schema';

export const eventCreateOneSchema: z.ZodType<Prisma.eventCreateArgs> = z.object({ select: eventSelectObjectSchema.optional(), include: eventIncludeObjectSchema.optional(), data: z.union([eventCreateInputObjectSchema, eventUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.eventCreateArgs>;

export const eventCreateOneZodSchema = z.object({ select: eventSelectObjectSchema.optional(), include: eventIncludeObjectSchema.optional(), data: z.union([eventCreateInputObjectSchema, eventUncheckedCreateInputObjectSchema]) }).strict();