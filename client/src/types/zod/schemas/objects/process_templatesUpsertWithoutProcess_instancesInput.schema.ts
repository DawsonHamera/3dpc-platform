import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templatesUpdateWithoutProcess_instancesInputObjectSchema as process_templatesUpdateWithoutProcess_instancesInputObjectSchema } from './process_templatesUpdateWithoutProcess_instancesInput.schema';
import { process_templatesUncheckedUpdateWithoutProcess_instancesInputObjectSchema as process_templatesUncheckedUpdateWithoutProcess_instancesInputObjectSchema } from './process_templatesUncheckedUpdateWithoutProcess_instancesInput.schema';
import { process_templatesCreateWithoutProcess_instancesInputObjectSchema as process_templatesCreateWithoutProcess_instancesInputObjectSchema } from './process_templatesCreateWithoutProcess_instancesInput.schema';
import { process_templatesUncheckedCreateWithoutProcess_instancesInputObjectSchema as process_templatesUncheckedCreateWithoutProcess_instancesInputObjectSchema } from './process_templatesUncheckedCreateWithoutProcess_instancesInput.schema';
import { process_templatesWhereInputObjectSchema as process_templatesWhereInputObjectSchema } from './process_templatesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => process_templatesUpdateWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_templatesUncheckedUpdateWithoutProcess_instancesInputObjectSchema)]),
  create: z.union([z.lazy(() => process_templatesCreateWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_templatesUncheckedCreateWithoutProcess_instancesInputObjectSchema)]),
  where: z.lazy(() => process_templatesWhereInputObjectSchema).optional()
}).strict();
export const process_templatesUpsertWithoutProcess_instancesInputObjectSchema: z.ZodType<Prisma.process_templatesUpsertWithoutProcess_instancesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesUpsertWithoutProcess_instancesInput>;
export const process_templatesUpsertWithoutProcess_instancesInputObjectZodSchema = makeSchema();
