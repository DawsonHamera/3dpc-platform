import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_template_stepsScalarWhereInputObjectSchema as process_template_stepsScalarWhereInputObjectSchema } from './process_template_stepsScalarWhereInput.schema';
import { process_template_stepsUpdateManyMutationInputObjectSchema as process_template_stepsUpdateManyMutationInputObjectSchema } from './process_template_stepsUpdateManyMutationInput.schema';
import { process_template_stepsUncheckedUpdateManyWithoutProcess_templatesInputObjectSchema as process_template_stepsUncheckedUpdateManyWithoutProcess_templatesInputObjectSchema } from './process_template_stepsUncheckedUpdateManyWithoutProcess_templatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_template_stepsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => process_template_stepsUpdateManyMutationInputObjectSchema), z.lazy(() => process_template_stepsUncheckedUpdateManyWithoutProcess_templatesInputObjectSchema)])
}).strict();
export const process_template_stepsUpdateManyWithWhereWithoutProcess_templatesInputObjectSchema: z.ZodType<Prisma.process_template_stepsUpdateManyWithWhereWithoutProcess_templatesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsUpdateManyWithWhereWithoutProcess_templatesInput>;
export const process_template_stepsUpdateManyWithWhereWithoutProcess_templatesInputObjectZodSchema = makeSchema();
