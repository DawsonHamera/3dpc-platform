import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const request_statusesWhereUniqueInputObjectSchema: z.ZodType<Prisma.request_statusesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.request_statusesWhereUniqueInput>;
export const request_statusesWhereUniqueInputObjectZodSchema = makeSchema();
