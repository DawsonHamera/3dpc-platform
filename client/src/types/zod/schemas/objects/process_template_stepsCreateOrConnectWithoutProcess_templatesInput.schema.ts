import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_template_stepsWhereUniqueInputObjectSchema as process_template_stepsWhereUniqueInputObjectSchema } from './process_template_stepsWhereUniqueInput.schema';
import { process_template_stepsCreateWithoutProcess_templatesInputObjectSchema as process_template_stepsCreateWithoutProcess_templatesInputObjectSchema } from './process_template_stepsCreateWithoutProcess_templatesInput.schema';
import { process_template_stepsUncheckedCreateWithoutProcess_templatesInputObjectSchema as process_template_stepsUncheckedCreateWithoutProcess_templatesInputObjectSchema } from './process_template_stepsUncheckedCreateWithoutProcess_templatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => process_template_stepsCreateWithoutProcess_templatesInputObjectSchema), z.lazy(() => process_template_stepsUncheckedCreateWithoutProcess_templatesInputObjectSchema)])
}).strict();
export const process_template_stepsCreateOrConnectWithoutProcess_templatesInputObjectSchema: z.ZodType<Prisma.process_template_stepsCreateOrConnectWithoutProcess_templatesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsCreateOrConnectWithoutProcess_templatesInput>;
export const process_template_stepsCreateOrConnectWithoutProcess_templatesInputObjectZodSchema = makeSchema();
