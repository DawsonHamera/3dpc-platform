import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  users: z.boolean().optional()
}).strict();
export const RolesCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.RolesCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.RolesCountOutputTypeSelect>;
export const RolesCountOutputTypeSelectObjectZodSchema = makeSchema();
