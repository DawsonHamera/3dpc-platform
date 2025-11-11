import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  process_instance_id: z.number().int(),
  step_order: z.number().int()
}).strict();
export const process_instance_stepsProcess_instance_idStep_orderCompoundUniqueInputObjectSchema: z.ZodType<Prisma.process_instance_stepsProcess_instance_idStep_orderCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsProcess_instance_idStep_orderCompoundUniqueInput>;
export const process_instance_stepsProcess_instance_idStep_orderCompoundUniqueInputObjectZodSchema = makeSchema();
