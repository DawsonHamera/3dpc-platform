import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_template_stepsCreateWithoutProcess_templatesInputObjectSchema as process_template_stepsCreateWithoutProcess_templatesInputObjectSchema } from './process_template_stepsCreateWithoutProcess_templatesInput.schema';
import { process_template_stepsUncheckedCreateWithoutProcess_templatesInputObjectSchema as process_template_stepsUncheckedCreateWithoutProcess_templatesInputObjectSchema } from './process_template_stepsUncheckedCreateWithoutProcess_templatesInput.schema';
import { process_template_stepsCreateOrConnectWithoutProcess_templatesInputObjectSchema as process_template_stepsCreateOrConnectWithoutProcess_templatesInputObjectSchema } from './process_template_stepsCreateOrConnectWithoutProcess_templatesInput.schema';
import { process_template_stepsUpsertWithWhereUniqueWithoutProcess_templatesInputObjectSchema as process_template_stepsUpsertWithWhereUniqueWithoutProcess_templatesInputObjectSchema } from './process_template_stepsUpsertWithWhereUniqueWithoutProcess_templatesInput.schema';
import { process_template_stepsCreateManyProcess_templatesInputEnvelopeObjectSchema as process_template_stepsCreateManyProcess_templatesInputEnvelopeObjectSchema } from './process_template_stepsCreateManyProcess_templatesInputEnvelope.schema';
import { process_template_stepsWhereUniqueInputObjectSchema as process_template_stepsWhereUniqueInputObjectSchema } from './process_template_stepsWhereUniqueInput.schema';
import { process_template_stepsUpdateWithWhereUniqueWithoutProcess_templatesInputObjectSchema as process_template_stepsUpdateWithWhereUniqueWithoutProcess_templatesInputObjectSchema } from './process_template_stepsUpdateWithWhereUniqueWithoutProcess_templatesInput.schema';
import { process_template_stepsUpdateManyWithWhereWithoutProcess_templatesInputObjectSchema as process_template_stepsUpdateManyWithWhereWithoutProcess_templatesInputObjectSchema } from './process_template_stepsUpdateManyWithWhereWithoutProcess_templatesInput.schema';
import { process_template_stepsScalarWhereInputObjectSchema as process_template_stepsScalarWhereInputObjectSchema } from './process_template_stepsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_template_stepsCreateWithoutProcess_templatesInputObjectSchema), z.lazy(() => process_template_stepsCreateWithoutProcess_templatesInputObjectSchema).array(), z.lazy(() => process_template_stepsUncheckedCreateWithoutProcess_templatesInputObjectSchema), z.lazy(() => process_template_stepsUncheckedCreateWithoutProcess_templatesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => process_template_stepsCreateOrConnectWithoutProcess_templatesInputObjectSchema), z.lazy(() => process_template_stepsCreateOrConnectWithoutProcess_templatesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => process_template_stepsUpsertWithWhereUniqueWithoutProcess_templatesInputObjectSchema), z.lazy(() => process_template_stepsUpsertWithWhereUniqueWithoutProcess_templatesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => process_template_stepsCreateManyProcess_templatesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => process_template_stepsUpdateWithWhereUniqueWithoutProcess_templatesInputObjectSchema), z.lazy(() => process_template_stepsUpdateWithWhereUniqueWithoutProcess_templatesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => process_template_stepsUpdateManyWithWhereWithoutProcess_templatesInputObjectSchema), z.lazy(() => process_template_stepsUpdateManyWithWhereWithoutProcess_templatesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => process_template_stepsScalarWhereInputObjectSchema), z.lazy(() => process_template_stepsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const process_template_stepsUpdateManyWithoutProcess_templatesNestedInputObjectSchema: z.ZodType<Prisma.process_template_stepsUpdateManyWithoutProcess_templatesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsUpdateManyWithoutProcess_templatesNestedInput>;
export const process_template_stepsUpdateManyWithoutProcess_templatesNestedInputObjectZodSchema = makeSchema();
