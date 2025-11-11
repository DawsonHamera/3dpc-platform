import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesCreateWithoutProcess_templatesInputObjectSchema as process_instancesCreateWithoutProcess_templatesInputObjectSchema } from './process_instancesCreateWithoutProcess_templatesInput.schema';
import { process_instancesUncheckedCreateWithoutProcess_templatesInputObjectSchema as process_instancesUncheckedCreateWithoutProcess_templatesInputObjectSchema } from './process_instancesUncheckedCreateWithoutProcess_templatesInput.schema';
import { process_instancesCreateOrConnectWithoutProcess_templatesInputObjectSchema as process_instancesCreateOrConnectWithoutProcess_templatesInputObjectSchema } from './process_instancesCreateOrConnectWithoutProcess_templatesInput.schema';
import { process_instancesUpsertWithWhereUniqueWithoutProcess_templatesInputObjectSchema as process_instancesUpsertWithWhereUniqueWithoutProcess_templatesInputObjectSchema } from './process_instancesUpsertWithWhereUniqueWithoutProcess_templatesInput.schema';
import { process_instancesCreateManyProcess_templatesInputEnvelopeObjectSchema as process_instancesCreateManyProcess_templatesInputEnvelopeObjectSchema } from './process_instancesCreateManyProcess_templatesInputEnvelope.schema';
import { process_instancesWhereUniqueInputObjectSchema as process_instancesWhereUniqueInputObjectSchema } from './process_instancesWhereUniqueInput.schema';
import { process_instancesUpdateWithWhereUniqueWithoutProcess_templatesInputObjectSchema as process_instancesUpdateWithWhereUniqueWithoutProcess_templatesInputObjectSchema } from './process_instancesUpdateWithWhereUniqueWithoutProcess_templatesInput.schema';
import { process_instancesUpdateManyWithWhereWithoutProcess_templatesInputObjectSchema as process_instancesUpdateManyWithWhereWithoutProcess_templatesInputObjectSchema } from './process_instancesUpdateManyWithWhereWithoutProcess_templatesInput.schema';
import { process_instancesScalarWhereInputObjectSchema as process_instancesScalarWhereInputObjectSchema } from './process_instancesScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_instancesCreateWithoutProcess_templatesInputObjectSchema), z.lazy(() => process_instancesCreateWithoutProcess_templatesInputObjectSchema).array(), z.lazy(() => process_instancesUncheckedCreateWithoutProcess_templatesInputObjectSchema), z.lazy(() => process_instancesUncheckedCreateWithoutProcess_templatesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => process_instancesCreateOrConnectWithoutProcess_templatesInputObjectSchema), z.lazy(() => process_instancesCreateOrConnectWithoutProcess_templatesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => process_instancesUpsertWithWhereUniqueWithoutProcess_templatesInputObjectSchema), z.lazy(() => process_instancesUpsertWithWhereUniqueWithoutProcess_templatesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => process_instancesCreateManyProcess_templatesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => process_instancesWhereUniqueInputObjectSchema), z.lazy(() => process_instancesWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => process_instancesWhereUniqueInputObjectSchema), z.lazy(() => process_instancesWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => process_instancesWhereUniqueInputObjectSchema), z.lazy(() => process_instancesWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => process_instancesWhereUniqueInputObjectSchema), z.lazy(() => process_instancesWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => process_instancesUpdateWithWhereUniqueWithoutProcess_templatesInputObjectSchema), z.lazy(() => process_instancesUpdateWithWhereUniqueWithoutProcess_templatesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => process_instancesUpdateManyWithWhereWithoutProcess_templatesInputObjectSchema), z.lazy(() => process_instancesUpdateManyWithWhereWithoutProcess_templatesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => process_instancesScalarWhereInputObjectSchema), z.lazy(() => process_instancesScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const process_instancesUncheckedUpdateManyWithoutProcess_templatesNestedInputObjectSchema: z.ZodType<Prisma.process_instancesUncheckedUpdateManyWithoutProcess_templatesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesUncheckedUpdateManyWithoutProcess_templatesNestedInput>;
export const process_instancesUncheckedUpdateManyWithoutProcess_templatesNestedInputObjectZodSchema = makeSchema();
