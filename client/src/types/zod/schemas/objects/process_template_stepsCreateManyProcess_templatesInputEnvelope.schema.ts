import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_template_stepsCreateManyProcess_templatesInputObjectSchema as process_template_stepsCreateManyProcess_templatesInputObjectSchema } from './process_template_stepsCreateManyProcess_templatesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => process_template_stepsCreateManyProcess_templatesInputObjectSchema), z.lazy(() => process_template_stepsCreateManyProcess_templatesInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const process_template_stepsCreateManyProcess_templatesInputEnvelopeObjectSchema: z.ZodType<Prisma.process_template_stepsCreateManyProcess_templatesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsCreateManyProcess_templatesInputEnvelope>;
export const process_template_stepsCreateManyProcess_templatesInputEnvelopeObjectZodSchema = makeSchema();
