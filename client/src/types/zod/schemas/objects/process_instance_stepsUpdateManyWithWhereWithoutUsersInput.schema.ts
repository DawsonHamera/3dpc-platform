import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_stepsScalarWhereInputObjectSchema as process_instance_stepsScalarWhereInputObjectSchema } from './process_instance_stepsScalarWhereInput.schema';
import { process_instance_stepsUpdateManyMutationInputObjectSchema as process_instance_stepsUpdateManyMutationInputObjectSchema } from './process_instance_stepsUpdateManyMutationInput.schema';
import { process_instance_stepsUncheckedUpdateManyWithoutUsersInputObjectSchema as process_instance_stepsUncheckedUpdateManyWithoutUsersInputObjectSchema } from './process_instance_stepsUncheckedUpdateManyWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_instance_stepsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => process_instance_stepsUpdateManyMutationInputObjectSchema), z.lazy(() => process_instance_stepsUncheckedUpdateManyWithoutUsersInputObjectSchema)])
}).strict();
export const process_instance_stepsUpdateManyWithWhereWithoutUsersInputObjectSchema: z.ZodType<Prisma.process_instance_stepsUpdateManyWithWhereWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsUpdateManyWithWhereWithoutUsersInput>;
export const process_instance_stepsUpdateManyWithWhereWithoutUsersInputObjectZodSchema = makeSchema();
