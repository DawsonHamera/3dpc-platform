import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsFindManySchema as error_reportsFindManySchema } from '../findManyerror_reports.schema';
import { process_instance_stepsFindManySchema as process_instance_stepsFindManySchema } from '../findManyprocess_instance_steps.schema';
import { process_template_stepsFindManySchema as process_template_stepsFindManySchema } from '../findManyprocess_template_steps.schema';
import { step_actionsFindManySchema as step_actionsFindManySchema } from '../findManystep_actions.schema';
import { step_contentFindManySchema as step_contentFindManySchema } from '../findManystep_content.schema';
import { StepsCountOutputTypeArgsObjectSchema as StepsCountOutputTypeArgsObjectSchema } from './StepsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  error_reports: z.union([z.boolean(), z.lazy(() => error_reportsFindManySchema)]).optional(),
  process_instance_steps: z.union([z.boolean(), z.lazy(() => process_instance_stepsFindManySchema)]).optional(),
  process_template_steps: z.union([z.boolean(), z.lazy(() => process_template_stepsFindManySchema)]).optional(),
  step_actions: z.union([z.boolean(), z.lazy(() => step_actionsFindManySchema)]).optional(),
  step_content: z.union([z.boolean(), z.lazy(() => step_contentFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => StepsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const stepsIncludeObjectSchema: z.ZodType<Prisma.stepsInclude> = makeSchema() as unknown as z.ZodType<Prisma.stepsInclude>;
export const stepsIncludeObjectZodSchema = makeSchema();
