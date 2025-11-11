import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templatesUpdateWithoutProcess_template_stepsInputObjectSchema as process_templatesUpdateWithoutProcess_template_stepsInputObjectSchema } from './process_templatesUpdateWithoutProcess_template_stepsInput.schema';
import { process_templatesUncheckedUpdateWithoutProcess_template_stepsInputObjectSchema as process_templatesUncheckedUpdateWithoutProcess_template_stepsInputObjectSchema } from './process_templatesUncheckedUpdateWithoutProcess_template_stepsInput.schema';
import { process_templatesCreateWithoutProcess_template_stepsInputObjectSchema as process_templatesCreateWithoutProcess_template_stepsInputObjectSchema } from './process_templatesCreateWithoutProcess_template_stepsInput.schema';
import { process_templatesUncheckedCreateWithoutProcess_template_stepsInputObjectSchema as process_templatesUncheckedCreateWithoutProcess_template_stepsInputObjectSchema } from './process_templatesUncheckedCreateWithoutProcess_template_stepsInput.schema';
import { process_templatesWhereInputObjectSchema as process_templatesWhereInputObjectSchema } from './process_templatesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => process_templatesUpdateWithoutProcess_template_stepsInputObjectSchema), z.lazy(() => process_templatesUncheckedUpdateWithoutProcess_template_stepsInputObjectSchema)]),
  create: z.union([z.lazy(() => process_templatesCreateWithoutProcess_template_stepsInputObjectSchema), z.lazy(() => process_templatesUncheckedCreateWithoutProcess_template_stepsInputObjectSchema)]),
  where: z.lazy(() => process_templatesWhereInputObjectSchema).optional()
}).strict();
export const process_templatesUpsertWithoutProcess_template_stepsInputObjectSchema: z.ZodType<Prisma.process_templatesUpsertWithoutProcess_template_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesUpsertWithoutProcess_template_stepsInput>;
export const process_templatesUpsertWithoutProcess_template_stepsInputObjectZodSchema = makeSchema();
