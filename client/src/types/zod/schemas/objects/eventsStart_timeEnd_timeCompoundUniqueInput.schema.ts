import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  start_time: z.date(),
  end_time: z.date()
}).strict();
export const eventsStart_timeEnd_timeCompoundUniqueInputObjectSchema: z.ZodType<Prisma.eventsStart_timeEnd_timeCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsStart_timeEnd_timeCompoundUniqueInput>;
export const eventsStart_timeEnd_timeCompoundUniqueInputObjectZodSchema = makeSchema();
