import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { Process_instancesCountOutputTypeSelectObjectSchema as Process_instancesCountOutputTypeSelectObjectSchema } from './Process_instancesCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => Process_instancesCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const Process_instancesCountOutputTypeArgsObjectSchema = makeSchema();
export const Process_instancesCountOutputTypeArgsObjectZodSchema = makeSchema();
