import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templatesWhereInputObjectSchema as process_templatesWhereInputObjectSchema } from './process_templatesWhereInput.schema';
import { process_templatesUpdateWithoutProcess_instancesInputObjectSchema as process_templatesUpdateWithoutProcess_instancesInputObjectSchema } from './process_templatesUpdateWithoutProcess_instancesInput.schema';
import { process_templatesUncheckedUpdateWithoutProcess_instancesInputObjectSchema as process_templatesUncheckedUpdateWithoutProcess_instancesInputObjectSchema } from './process_templatesUncheckedUpdateWithoutProcess_instancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_templatesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => process_templatesUpdateWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_templatesUncheckedUpdateWithoutProcess_instancesInputObjectSchema)])
}).strict();
export const process_templatesUpdateToOneWithWhereWithoutProcess_instancesInputObjectSchema: z.ZodType<Prisma.process_templatesUpdateToOneWithWhereWithoutProcess_instancesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesUpdateToOneWithWhereWithoutProcess_instancesInput>;
export const process_templatesUpdateToOneWithWhereWithoutProcess_instancesInputObjectZodSchema = makeSchema();
