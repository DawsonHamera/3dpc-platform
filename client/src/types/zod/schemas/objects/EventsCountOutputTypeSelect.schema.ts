import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  attendances: z.boolean().optional()
}).strict();
export const EventsCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.EventsCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.EventsCountOutputTypeSelect>;
export const EventsCountOutputTypeSelectObjectZodSchema = makeSchema();
