import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventStart_timeEnd_timeCompoundUniqueInputObjectSchema as eventStart_timeEnd_timeCompoundUniqueInputObjectSchema } from './eventStart_timeEnd_timeCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  verification_code: z.string().max(255).optional(),
  start_time_end_time: z.lazy(() => eventStart_timeEnd_timeCompoundUniqueInputObjectSchema).optional()
}).strict();
export const eventWhereUniqueInputObjectSchema: z.ZodType<Prisma.eventWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.eventWhereUniqueInput>;
export const eventWhereUniqueInputObjectZodSchema = makeSchema();
