import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesSelectObjectSchema as process_instancesSelectObjectSchema } from './process_instancesSelect.schema';
import { process_instancesIncludeObjectSchema as process_instancesIncludeObjectSchema } from './process_instancesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => process_instancesSelectObjectSchema).optional(),
  include: z.lazy(() => process_instancesIncludeObjectSchema).optional()
}).strict();
export const process_instancesArgsObjectSchema = makeSchema();
export const process_instancesArgsObjectZodSchema = makeSchema();
