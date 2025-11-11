import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersFindManySchema as usersFindManySchema } from '../findManyusers.schema';
import { GradesCountOutputTypeArgsObjectSchema as GradesCountOutputTypeArgsObjectSchema } from './GradesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  users: z.union([z.boolean(), z.lazy(() => usersFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => GradesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const gradesIncludeObjectSchema: z.ZodType<Prisma.gradesInclude> = makeSchema() as unknown as z.ZodType<Prisma.gradesInclude>;
export const gradesIncludeObjectZodSchema = makeSchema();
