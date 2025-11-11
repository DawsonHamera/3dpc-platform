import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templatesCreateWithoutProcess_template_stepsInputObjectSchema as process_templatesCreateWithoutProcess_template_stepsInputObjectSchema } from './process_templatesCreateWithoutProcess_template_stepsInput.schema';
import { process_templatesUncheckedCreateWithoutProcess_template_stepsInputObjectSchema as process_templatesUncheckedCreateWithoutProcess_template_stepsInputObjectSchema } from './process_templatesUncheckedCreateWithoutProcess_template_stepsInput.schema';
import { process_templatesCreateOrConnectWithoutProcess_template_stepsInputObjectSchema as process_templatesCreateOrConnectWithoutProcess_template_stepsInputObjectSchema } from './process_templatesCreateOrConnectWithoutProcess_template_stepsInput.schema';
import { process_templatesWhereUniqueInputObjectSchema as process_templatesWhereUniqueInputObjectSchema } from './process_templatesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_templatesCreateWithoutProcess_template_stepsInputObjectSchema), z.lazy(() => process_templatesUncheckedCreateWithoutProcess_template_stepsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => process_templatesCreateOrConnectWithoutProcess_template_stepsInputObjectSchema).optional(),
  connect: z.lazy(() => process_templatesWhereUniqueInputObjectSchema).optional()
}).strict();
export const process_templatesCreateNestedOneWithoutProcess_template_stepsInputObjectSchema: z.ZodType<Prisma.process_templatesCreateNestedOneWithoutProcess_template_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesCreateNestedOneWithoutProcess_template_stepsInput>;
export const process_templatesCreateNestedOneWithoutProcess_template_stepsInputObjectZodSchema = makeSchema();
