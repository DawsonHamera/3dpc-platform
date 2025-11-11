import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templatesCreateWithoutProcess_template_stepsInputObjectSchema as process_templatesCreateWithoutProcess_template_stepsInputObjectSchema } from './process_templatesCreateWithoutProcess_template_stepsInput.schema';
import { process_templatesUncheckedCreateWithoutProcess_template_stepsInputObjectSchema as process_templatesUncheckedCreateWithoutProcess_template_stepsInputObjectSchema } from './process_templatesUncheckedCreateWithoutProcess_template_stepsInput.schema';
import { process_templatesCreateOrConnectWithoutProcess_template_stepsInputObjectSchema as process_templatesCreateOrConnectWithoutProcess_template_stepsInputObjectSchema } from './process_templatesCreateOrConnectWithoutProcess_template_stepsInput.schema';
import { process_templatesUpsertWithoutProcess_template_stepsInputObjectSchema as process_templatesUpsertWithoutProcess_template_stepsInputObjectSchema } from './process_templatesUpsertWithoutProcess_template_stepsInput.schema';
import { process_templatesWhereUniqueInputObjectSchema as process_templatesWhereUniqueInputObjectSchema } from './process_templatesWhereUniqueInput.schema';
import { process_templatesUpdateToOneWithWhereWithoutProcess_template_stepsInputObjectSchema as process_templatesUpdateToOneWithWhereWithoutProcess_template_stepsInputObjectSchema } from './process_templatesUpdateToOneWithWhereWithoutProcess_template_stepsInput.schema';
import { process_templatesUpdateWithoutProcess_template_stepsInputObjectSchema as process_templatesUpdateWithoutProcess_template_stepsInputObjectSchema } from './process_templatesUpdateWithoutProcess_template_stepsInput.schema';
import { process_templatesUncheckedUpdateWithoutProcess_template_stepsInputObjectSchema as process_templatesUncheckedUpdateWithoutProcess_template_stepsInputObjectSchema } from './process_templatesUncheckedUpdateWithoutProcess_template_stepsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_templatesCreateWithoutProcess_template_stepsInputObjectSchema), z.lazy(() => process_templatesUncheckedCreateWithoutProcess_template_stepsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => process_templatesCreateOrConnectWithoutProcess_template_stepsInputObjectSchema).optional(),
  upsert: z.lazy(() => process_templatesUpsertWithoutProcess_template_stepsInputObjectSchema).optional(),
  connect: z.lazy(() => process_templatesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => process_templatesUpdateToOneWithWhereWithoutProcess_template_stepsInputObjectSchema), z.lazy(() => process_templatesUpdateWithoutProcess_template_stepsInputObjectSchema), z.lazy(() => process_templatesUncheckedUpdateWithoutProcess_template_stepsInputObjectSchema)]).optional()
}).strict();
export const process_templatesUpdateOneRequiredWithoutProcess_template_stepsNestedInputObjectSchema: z.ZodType<Prisma.process_templatesUpdateOneRequiredWithoutProcess_template_stepsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesUpdateOneRequiredWithoutProcess_template_stepsNestedInput>;
export const process_templatesUpdateOneRequiredWithoutProcess_template_stepsNestedInputObjectZodSchema = makeSchema();
