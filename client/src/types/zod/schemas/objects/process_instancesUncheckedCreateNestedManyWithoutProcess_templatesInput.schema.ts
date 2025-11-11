import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesCreateWithoutProcess_templatesInputObjectSchema as process_instancesCreateWithoutProcess_templatesInputObjectSchema } from './process_instancesCreateWithoutProcess_templatesInput.schema';
import { process_instancesUncheckedCreateWithoutProcess_templatesInputObjectSchema as process_instancesUncheckedCreateWithoutProcess_templatesInputObjectSchema } from './process_instancesUncheckedCreateWithoutProcess_templatesInput.schema';
import { process_instancesCreateOrConnectWithoutProcess_templatesInputObjectSchema as process_instancesCreateOrConnectWithoutProcess_templatesInputObjectSchema } from './process_instancesCreateOrConnectWithoutProcess_templatesInput.schema';
import { process_instancesCreateManyProcess_templatesInputEnvelopeObjectSchema as process_instancesCreateManyProcess_templatesInputEnvelopeObjectSchema } from './process_instancesCreateManyProcess_templatesInputEnvelope.schema';
import { process_instancesWhereUniqueInputObjectSchema as process_instancesWhereUniqueInputObjectSchema } from './process_instancesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_instancesCreateWithoutProcess_templatesInputObjectSchema), z.lazy(() => process_instancesCreateWithoutProcess_templatesInputObjectSchema).array(), z.lazy(() => process_instancesUncheckedCreateWithoutProcess_templatesInputObjectSchema), z.lazy(() => process_instancesUncheckedCreateWithoutProcess_templatesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => process_instancesCreateOrConnectWithoutProcess_templatesInputObjectSchema), z.lazy(() => process_instancesCreateOrConnectWithoutProcess_templatesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => process_instancesCreateManyProcess_templatesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => process_instancesWhereUniqueInputObjectSchema), z.lazy(() => process_instancesWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const process_instancesUncheckedCreateNestedManyWithoutProcess_templatesInputObjectSchema: z.ZodType<Prisma.process_instancesUncheckedCreateNestedManyWithoutProcess_templatesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesUncheckedCreateNestedManyWithoutProcess_templatesInput>;
export const process_instancesUncheckedCreateNestedManyWithoutProcess_templatesInputObjectZodSchema = makeSchema();
