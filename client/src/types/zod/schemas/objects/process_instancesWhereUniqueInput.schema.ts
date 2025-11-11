import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const process_instancesWhereUniqueInputObjectSchema: z.ZodType<Prisma.process_instancesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesWhereUniqueInput>;
export const process_instancesWhereUniqueInputObjectZodSchema = makeSchema();
