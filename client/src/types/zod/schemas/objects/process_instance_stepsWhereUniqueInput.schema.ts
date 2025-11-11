import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_stepsProcess_instance_idStep_orderCompoundUniqueInputObjectSchema as process_instance_stepsProcess_instance_idStep_orderCompoundUniqueInputObjectSchema } from './process_instance_stepsProcess_instance_idStep_orderCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  process_instance_id_step_order: z.lazy(() => process_instance_stepsProcess_instance_idStep_orderCompoundUniqueInputObjectSchema).optional()
}).strict();
export const process_instance_stepsWhereUniqueInputObjectSchema: z.ZodType<Prisma.process_instance_stepsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsWhereUniqueInput>;
export const process_instance_stepsWhereUniqueInputObjectZodSchema = makeSchema();
