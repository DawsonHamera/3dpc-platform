import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templatesCreateWithoutProcess_instancesInputObjectSchema as process_templatesCreateWithoutProcess_instancesInputObjectSchema } from './process_templatesCreateWithoutProcess_instancesInput.schema';
import { process_templatesUncheckedCreateWithoutProcess_instancesInputObjectSchema as process_templatesUncheckedCreateWithoutProcess_instancesInputObjectSchema } from './process_templatesUncheckedCreateWithoutProcess_instancesInput.schema';
import { process_templatesCreateOrConnectWithoutProcess_instancesInputObjectSchema as process_templatesCreateOrConnectWithoutProcess_instancesInputObjectSchema } from './process_templatesCreateOrConnectWithoutProcess_instancesInput.schema';
import { process_templatesWhereUniqueInputObjectSchema as process_templatesWhereUniqueInputObjectSchema } from './process_templatesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_templatesCreateWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_templatesUncheckedCreateWithoutProcess_instancesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => process_templatesCreateOrConnectWithoutProcess_instancesInputObjectSchema).optional(),
  connect: z.lazy(() => process_templatesWhereUniqueInputObjectSchema).optional()
}).strict();
export const process_templatesCreateNestedOneWithoutProcess_instancesInputObjectSchema: z.ZodType<Prisma.process_templatesCreateNestedOneWithoutProcess_instancesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesCreateNestedOneWithoutProcess_instancesInput>;
export const process_templatesCreateNestedOneWithoutProcess_instancesInputObjectZodSchema = makeSchema();
