import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { eventsSelectObjectSchema as eventsSelectObjectSchema } from './objects/eventsSelect.schema';
import { eventsIncludeObjectSchema as eventsIncludeObjectSchema } from './objects/eventsInclude.schema';
import { eventsUpdateInputObjectSchema as eventsUpdateInputObjectSchema } from './objects/eventsUpdateInput.schema';
import { eventsUncheckedUpdateInputObjectSchema as eventsUncheckedUpdateInputObjectSchema } from './objects/eventsUncheckedUpdateInput.schema';
import { eventsWhereUniqueInputObjectSchema as eventsWhereUniqueInputObjectSchema } from './objects/eventsWhereUniqueInput.schema';

export const eventsUpdateOneSchema: z.ZodType<Prisma.eventsUpdateArgs> = z.object({ select: eventsSelectObjectSchema.optional(), include: eventsIncludeObjectSchema.optional(), data: z.union([eventsUpdateInputObjectSchema, eventsUncheckedUpdateInputObjectSchema]), where: eventsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.eventsUpdateArgs>;

export const eventsUpdateOneZodSchema = z.object({ select: eventsSelectObjectSchema.optional(), include: eventsIncludeObjectSchema.optional(), data: z.union([eventsUpdateInputObjectSchema, eventsUncheckedUpdateInputObjectSchema]), where: eventsWhereUniqueInputObjectSchema }).strict();