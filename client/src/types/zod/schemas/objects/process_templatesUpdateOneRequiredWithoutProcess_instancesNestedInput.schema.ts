import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templatesCreateWithoutProcess_instancesInputObjectSchema as process_templatesCreateWithoutProcess_instancesInputObjectSchema } from './process_templatesCreateWithoutProcess_instancesInput.schema';
import { process_templatesUncheckedCreateWithoutProcess_instancesInputObjectSchema as process_templatesUncheckedCreateWithoutProcess_instancesInputObjectSchema } from './process_templatesUncheckedCreateWithoutProcess_instancesInput.schema';
import { process_templatesCreateOrConnectWithoutProcess_instancesInputObjectSchema as process_templatesCreateOrConnectWithoutProcess_instancesInputObjectSchema } from './process_templatesCreateOrConnectWithoutProcess_instancesInput.schema';
import { process_templatesUpsertWithoutProcess_instancesInputObjectSchema as process_templatesUpsertWithoutProcess_instancesInputObjectSchema } from './process_templatesUpsertWithoutProcess_instancesInput.schema';
import { process_templatesWhereUniqueInputObjectSchema as process_templatesWhereUniqueInputObjectSchema } from './process_templatesWhereUniqueInput.schema';
import { process_templatesUpdateToOneWithWhereWithoutProcess_instancesInputObjectSchema as process_templatesUpdateToOneWithWhereWithoutProcess_instancesInputObjectSchema } from './process_templatesUpdateToOneWithWhereWithoutProcess_instancesInput.schema';
import { process_templatesUpdateWithoutProcess_instancesInputObjectSchema as process_templatesUpdateWithoutProcess_instancesInputObjectSchema } from './process_templatesUpdateWithoutProcess_instancesInput.schema';
import { process_templatesUncheckedUpdateWithoutProcess_instancesInputObjectSchema as process_templatesUncheckedUpdateWithoutProcess_instancesInputObjectSchema } from './process_templatesUncheckedUpdateWithoutProcess_instancesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_templatesCreateWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_templatesUncheckedCreateWithoutProcess_instancesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => process_templatesCreateOrConnectWithoutProcess_instancesInputObjectSchema).optional(),
  upsert: z.lazy(() => process_templatesUpsertWithoutProcess_instancesInputObjectSchema).optional(),
  connect: z.lazy(() => process_templatesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => process_templatesUpdateToOneWithWhereWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_templatesUpdateWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_templatesUncheckedUpdateWithoutProcess_instancesInputObjectSchema)]).optional()
}).strict();
export const process_templatesUpdateOneRequiredWithoutProcess_instancesNestedInputObjectSchema: z.ZodType<Prisma.process_templatesUpdateOneRequiredWithoutProcess_instancesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesUpdateOneRequiredWithoutProcess_instancesNestedInput>;
export const process_templatesUpdateOneRequiredWithoutProcess_instancesNestedInputObjectZodSchema = makeSchema();
