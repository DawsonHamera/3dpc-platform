import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  requests: z.boolean().optional()
}).strict();
export const Request_statusesCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.Request_statusesCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.Request_statusesCountOutputTypeSelect>;
export const Request_statusesCountOutputTypeSelectObjectZodSchema = makeSchema();
