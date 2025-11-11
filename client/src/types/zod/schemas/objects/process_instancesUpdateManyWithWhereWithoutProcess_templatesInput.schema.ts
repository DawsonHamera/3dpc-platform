import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesScalarWhereInputObjectSchema as process_instancesScalarWhereInputObjectSchema } from './process_instancesScalarWhereInput.schema';
import { process_instancesUpdateManyMutationInputObjectSchema as process_instancesUpdateManyMutationInputObjectSchema } from './process_instancesUpdateManyMutationInput.schema';
import { process_instancesUncheckedUpdateManyWithoutProcess_templatesInputObjectSchema as process_instancesUncheckedUpdateManyWithoutProcess_templatesInputObjectSchema } from './process_instancesUncheckedUpdateManyWithoutProcess_templatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_instancesScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => process_instancesUpdateManyMutationInputObjectSchema), z.lazy(() => process_instancesUncheckedUpdateManyWithoutProcess_templatesInputObjectSchema)])
}).strict();
export const process_instancesUpdateManyWithWhereWithoutProcess_templatesInputObjectSchema: z.ZodType<Prisma.process_instancesUpdateManyWithWhereWithoutProcess_templatesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesUpdateManyWithWhereWithoutProcess_templatesInput>;
export const process_instancesUpdateManyWithWhereWithoutProcess_templatesInputObjectZodSchema = makeSchema();
