import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesWhereUniqueInputObjectSchema as process_instancesWhereUniqueInputObjectSchema } from './process_instancesWhereUniqueInput.schema';
import { process_instancesUpdateWithoutProcess_templatesInputObjectSchema as process_instancesUpdateWithoutProcess_templatesInputObjectSchema } from './process_instancesUpdateWithoutProcess_templatesInput.schema';
import { process_instancesUncheckedUpdateWithoutProcess_templatesInputObjectSchema as process_instancesUncheckedUpdateWithoutProcess_templatesInputObjectSchema } from './process_instancesUncheckedUpdateWithoutProcess_templatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_instancesWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => process_instancesUpdateWithoutProcess_templatesInputObjectSchema), z.lazy(() => process_instancesUncheckedUpdateWithoutProcess_templatesInputObjectSchema)])
}).strict();
export const process_instancesUpdateWithWhereUniqueWithoutProcess_templatesInputObjectSchema: z.ZodType<Prisma.process_instancesUpdateWithWhereUniqueWithoutProcess_templatesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesUpdateWithWhereUniqueWithoutProcess_templatesInput>;
export const process_instancesUpdateWithWhereUniqueWithoutProcess_templatesInputObjectZodSchema = makeSchema();
