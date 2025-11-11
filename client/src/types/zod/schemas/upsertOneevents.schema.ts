import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { eventsSelectObjectSchema as eventsSelectObjectSchema } from './objects/eventsSelect.schema';
import { eventsIncludeObjectSchema as eventsIncludeObjectSchema } from './objects/eventsInclude.schema';
import { eventsWhereUniqueInputObjectSchema as eventsWhereUniqueInputObjectSchema } from './objects/eventsWhereUniqueInput.schema';
import { eventsCreateInputObjectSchema as eventsCreateInputObjectSchema } from './objects/eventsCreateInput.schema';
import { eventsUncheckedCreateInputObjectSchema as eventsUncheckedCreateInputObjectSchema } from './objects/eventsUncheckedCreateInput.schema';
import { eventsUpdateInputObjectSchema as eventsUpdateInputObjectSchema } from './objects/eventsUpdateInput.schema';
import { eventsUncheckedUpdateInputObjectSchema as eventsUncheckedUpdateInputObjectSchema } from './objects/eventsUncheckedUpdateInput.schema';

export const eventsUpsertOneSchema: z.ZodType<Prisma.eventsUpsertArgs> = z.object({ select: eventsSelectObjectSchema.optional(), include: eventsIncludeObjectSchema.optional(), where: eventsWhereUniqueInputObjectSchema, create: z.union([ eventsCreateInputObjectSchema, eventsUncheckedCreateInputObjectSchema ]), update: z.union([ eventsUpdateInputObjectSchema, eventsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.eventsUpsertArgs>;

export const eventsUpsertOneZodSchema = z.object({ select: eventsSelectObjectSchema.optional(), include: eventsIncludeObjectSchema.optional(), where: eventsWhereUniqueInputObjectSchema, create: z.union([ eventsCreateInputObjectSchema, eventsUncheckedCreateInputObjectSchema ]), update: z.union([ eventsUpdateInputObjectSchema, eventsUncheckedUpdateInputObjectSchema ]) }).strict();