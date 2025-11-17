import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventFindManySchema as eventFindManySchema } from '../findManyevent.schema';
import { userArgsObjectSchema as userArgsObjectSchema } from './userArgs.schema';
import { FileCountOutputTypeArgsObjectSchema as FileCountOutputTypeArgsObjectSchema } from './FileCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  events: z.union([z.boolean(), z.lazy(() => eventFindManySchema)]).optional(),
  uploader: z.union([z.boolean(), z.lazy(() => userArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => FileCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const fileIncludeObjectSchema: z.ZodType<Prisma.fileInclude> = makeSchema() as unknown as z.ZodType<Prisma.fileInclude>;
export const fileIncludeObjectZodSchema = makeSchema();
