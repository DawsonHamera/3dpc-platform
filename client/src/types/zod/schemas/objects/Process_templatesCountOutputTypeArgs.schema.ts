import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { Process_templatesCountOutputTypeSelectObjectSchema as Process_templatesCountOutputTypeSelectObjectSchema } from './Process_templatesCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => Process_templatesCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const Process_templatesCountOutputTypeArgsObjectSchema = makeSchema();
export const Process_templatesCountOutputTypeArgsObjectZodSchema = makeSchema();
