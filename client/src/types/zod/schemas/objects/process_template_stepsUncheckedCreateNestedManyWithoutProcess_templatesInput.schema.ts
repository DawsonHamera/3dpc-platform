import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_template_stepsCreateWithoutProcess_templatesInputObjectSchema as process_template_stepsCreateWithoutProcess_templatesInputObjectSchema } from './process_template_stepsCreateWithoutProcess_templatesInput.schema';
import { process_template_stepsUncheckedCreateWithoutProcess_templatesInputObjectSchema as process_template_stepsUncheckedCreateWithoutProcess_templatesInputObjectSchema } from './process_template_stepsUncheckedCreateWithoutProcess_templatesInput.schema';
import { process_template_stepsCreateOrConnectWithoutProcess_templatesInputObjectSchema as process_template_stepsCreateOrConnectWithoutProcess_templatesInputObjectSchema } from './process_template_stepsCreateOrConnectWithoutProcess_templatesInput.schema';
import { process_template_stepsCreateManyProcess_templatesInputEnvelopeObjectSchema as process_template_stepsCreateManyProcess_templatesInputEnvelopeObjectSchema } from './process_template_stepsCreateManyProcess_templatesInputEnvelope.schema';
import { process_template_stepsWhereUniqueInputObjectSchema as process_template_stepsWhereUniqueInputObjectSchema } from './process_template_stepsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_template_stepsCreateWithoutProcess_templatesInputObjectSchema), z.lazy(() => process_template_stepsCreateWithoutProcess_templatesInputObjectSchema).array(), z.lazy(() => process_template_stepsUncheckedCreateWithoutProcess_templatesInputObjectSchema), z.lazy(() => process_template_stepsUncheckedCreateWithoutProcess_templatesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => process_template_stepsCreateOrConnectWithoutProcess_templatesInputObjectSchema), z.lazy(() => process_template_stepsCreateOrConnectWithoutProcess_templatesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => process_template_stepsCreateManyProcess_templatesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const process_template_stepsUncheckedCreateNestedManyWithoutProcess_templatesInputObjectSchema: z.ZodType<Prisma.process_template_stepsUncheckedCreateNestedManyWithoutProcess_templatesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsUncheckedCreateNestedManyWithoutProcess_templatesInput>;
export const process_template_stepsUncheckedCreateNestedManyWithoutProcess_templatesInputObjectZodSchema = makeSchema();
