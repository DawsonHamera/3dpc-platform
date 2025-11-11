import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesScalarWhereInputObjectSchema as process_instancesScalarWhereInputObjectSchema } from './process_instancesScalarWhereInput.schema';
import { process_instancesUpdateManyMutationInputObjectSchema as process_instancesUpdateManyMutationInputObjectSchema } from './process_instancesUpdateManyMutationInput.schema';
import { process_instancesUncheckedUpdateManyWithoutUsersInputObjectSchema as process_instancesUncheckedUpdateManyWithoutUsersInputObjectSchema } from './process_instancesUncheckedUpdateManyWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_instancesScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => process_instancesUpdateManyMutationInputObjectSchema), z.lazy(() => process_instancesUncheckedUpdateManyWithoutUsersInputObjectSchema)])
}).strict();
export const process_instancesUpdateManyWithWhereWithoutUsersInputObjectSchema: z.ZodType<Prisma.process_instancesUpdateManyWithWhereWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesUpdateManyWithWhereWithoutUsersInput>;
export const process_instancesUpdateManyWithWhereWithoutUsersInputObjectZodSchema = makeSchema();
