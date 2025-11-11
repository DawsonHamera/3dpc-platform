import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_stepsScalarWhereInputObjectSchema as process_instance_stepsScalarWhereInputObjectSchema } from './process_instance_stepsScalarWhereInput.schema';
import { process_instance_stepsUpdateManyMutationInputObjectSchema as process_instance_stepsUpdateManyMutationInputObjectSchema } from './process_instance_stepsUpdateManyMutationInput.schema';
import { process_instance_stepsUncheckedUpdateManyWithoutProcess_instancesInputObjectSchema as process_instance_stepsUncheckedUpdateManyWithoutProcess_instancesInputObjectSchema } from './process_instance_stepsUncheckedUpdateManyWithoutProcess_instancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_instance_stepsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => process_instance_stepsUpdateManyMutationInputObjectSchema), z.lazy(() => process_instance_stepsUncheckedUpdateManyWithoutProcess_instancesInputObjectSchema)])
}).strict();
export const process_instance_stepsUpdateManyWithWhereWithoutProcess_instancesInputObjectSchema: z.ZodType<Prisma.process_instance_stepsUpdateManyWithWhereWithoutProcess_instancesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsUpdateManyWithWhereWithoutProcess_instancesInput>;
export const process_instance_stepsUpdateManyWithWhereWithoutProcess_instancesInputObjectZodSchema = makeSchema();
