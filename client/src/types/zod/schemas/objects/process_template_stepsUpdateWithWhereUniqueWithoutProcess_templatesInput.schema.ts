import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_template_stepsWhereUniqueInputObjectSchema as process_template_stepsWhereUniqueInputObjectSchema } from './process_template_stepsWhereUniqueInput.schema';
import { process_template_stepsUpdateWithoutProcess_templatesInputObjectSchema as process_template_stepsUpdateWithoutProcess_templatesInputObjectSchema } from './process_template_stepsUpdateWithoutProcess_templatesInput.schema';
import { process_template_stepsUncheckedUpdateWithoutProcess_templatesInputObjectSchema as process_template_stepsUncheckedUpdateWithoutProcess_templatesInputObjectSchema } from './process_template_stepsUncheckedUpdateWithoutProcess_templatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => process_template_stepsUpdateWithoutProcess_templatesInputObjectSchema), z.lazy(() => process_template_stepsUncheckedUpdateWithoutProcess_templatesInputObjectSchema)])
}).strict();
export const process_template_stepsUpdateWithWhereUniqueWithoutProcess_templatesInputObjectSchema: z.ZodType<Prisma.process_template_stepsUpdateWithWhereUniqueWithoutProcess_templatesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsUpdateWithWhereUniqueWithoutProcess_templatesInput>;
export const process_template_stepsUpdateWithWhereUniqueWithoutProcess_templatesInputObjectZodSchema = makeSchema();
