import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersFindManySchema as printersFindManySchema } from '../findManyprinters.schema';
import { process_instancesFindManySchema as process_instancesFindManySchema } from '../findManyprocess_instances.schema';
import { process_template_stepsFindManySchema as process_template_stepsFindManySchema } from '../findManyprocess_template_steps.schema';
import { Process_templatesCountOutputTypeArgsObjectSchema as Process_templatesCountOutputTypeArgsObjectSchema } from './Process_templatesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  printers: z.union([z.boolean(), z.lazy(() => printersFindManySchema)]).optional(),
  process_instances: z.union([z.boolean(), z.lazy(() => process_instancesFindManySchema)]).optional(),
  process_template_steps: z.union([z.boolean(), z.lazy(() => process_template_stepsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => Process_templatesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const process_templatesIncludeObjectSchema: z.ZodType<Prisma.process_templatesInclude> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesInclude>;
export const process_templatesIncludeObjectZodSchema = makeSchema();
