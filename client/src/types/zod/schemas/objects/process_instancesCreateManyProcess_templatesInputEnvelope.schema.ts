import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesCreateManyProcess_templatesInputObjectSchema as process_instancesCreateManyProcess_templatesInputObjectSchema } from './process_instancesCreateManyProcess_templatesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => process_instancesCreateManyProcess_templatesInputObjectSchema), z.lazy(() => process_instancesCreateManyProcess_templatesInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const process_instancesCreateManyProcess_templatesInputEnvelopeObjectSchema: z.ZodType<Prisma.process_instancesCreateManyProcess_templatesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesCreateManyProcess_templatesInputEnvelope>;
export const process_instancesCreateManyProcess_templatesInputEnvelopeObjectZodSchema = makeSchema();
