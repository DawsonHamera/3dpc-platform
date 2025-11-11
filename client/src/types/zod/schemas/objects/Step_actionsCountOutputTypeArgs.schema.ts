import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { Step_actionsCountOutputTypeSelectObjectSchema as Step_actionsCountOutputTypeSelectObjectSchema } from './Step_actionsCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => Step_actionsCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const Step_actionsCountOutputTypeArgsObjectSchema = makeSchema();
export const Step_actionsCountOutputTypeArgsObjectZodSchema = makeSchema();
