import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { eventsSelectObjectSchema as eventsSelectObjectSchema } from './objects/eventsSelect.schema';
import { eventsIncludeObjectSchema as eventsIncludeObjectSchema } from './objects/eventsInclude.schema';
import { eventsCreateInputObjectSchema as eventsCreateInputObjectSchema } from './objects/eventsCreateInput.schema';
import { eventsUncheckedCreateInputObjectSchema as eventsUncheckedCreateInputObjectSchema } from './objects/eventsUncheckedCreateInput.schema';

export const eventsCreateOneSchema: z.ZodType<Prisma.eventsCreateArgs> = z.object({ select: eventsSelectObjectSchema.optional(), include: eventsIncludeObjectSchema.optional(), data: z.union([eventsCreateInputObjectSchema, eventsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.eventsCreateArgs>;

export const eventsCreateOneZodSchema = z.object({ select: eventsSelectObjectSchema.optional(), include: eventsIncludeObjectSchema.optional(), data: z.union([eventsCreateInputObjectSchema, eventsUncheckedCreateInputObjectSchema]) }).strict();