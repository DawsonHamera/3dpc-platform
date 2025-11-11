import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templatesWhereInputObjectSchema as process_templatesWhereInputObjectSchema } from './process_templatesWhereInput.schema';
import { process_templatesUpdateWithoutProcess_template_stepsInputObjectSchema as process_templatesUpdateWithoutProcess_template_stepsInputObjectSchema } from './process_templatesUpdateWithoutProcess_template_stepsInput.schema';
import { process_templatesUncheckedUpdateWithoutProcess_template_stepsInputObjectSchema as process_templatesUncheckedUpdateWithoutProcess_template_stepsInputObjectSchema } from './process_templatesUncheckedUpdateWithoutProcess_template_stepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_templatesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => process_templatesUpdateWithoutProcess_template_stepsInputObjectSchema), z.lazy(() => process_templatesUncheckedUpdateWithoutProcess_template_stepsInputObjectSchema)])
}).strict();
export const process_templatesUpdateToOneWithWhereWithoutProcess_template_stepsInputObjectSchema: z.ZodType<Prisma.process_templatesUpdateToOneWithWhereWithoutProcess_template_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesUpdateToOneWithWhereWithoutProcess_template_stepsInput>;
export const process_templatesUpdateToOneWithWhereWithoutProcess_template_stepsInputObjectZodSchema = makeSchema();
