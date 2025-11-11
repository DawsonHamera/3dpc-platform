import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsStart_timeEnd_timeCompoundUniqueInputObjectSchema as eventsStart_timeEnd_timeCompoundUniqueInputObjectSchema } from './eventsStart_timeEnd_timeCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  verification_code: z.string().max(255).optional(),
  start_time_end_time: z.lazy(() => eventsStart_timeEnd_timeCompoundUniqueInputObjectSchema).optional()
}).strict();
export const eventsWhereUniqueInputObjectSchema: z.ZodType<Prisma.eventsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsWhereUniqueInput>;
export const eventsWhereUniqueInputObjectZodSchema = makeSchema();
