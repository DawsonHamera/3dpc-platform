import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const process_templatesWhereUniqueInputObjectSchema: z.ZodType<Prisma.process_templatesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesWhereUniqueInput>;
export const process_templatesWhereUniqueInputObjectZodSchema = makeSchema();
