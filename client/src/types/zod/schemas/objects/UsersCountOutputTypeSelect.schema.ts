import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  attendances: z.boolean().optional(),
  error_reports: z.boolean().optional(),
  events: z.boolean().optional(),
  files: z.boolean().optional(),
  point_logs: z.boolean().optional(),
  process_instance_steps: z.boolean().optional(),
  process_instances: z.boolean().optional(),
  process_logs: z.boolean().optional(),
  tasks: z.boolean().optional(),
  activity_logs: z.boolean().optional()
}).strict();
export const UsersCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UsersCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UsersCountOutputTypeSelect>;
export const UsersCountOutputTypeSelectObjectZodSchema = makeSchema();
