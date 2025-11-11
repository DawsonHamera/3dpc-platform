import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templatesWhereUniqueInputObjectSchema as process_templatesWhereUniqueInputObjectSchema } from './process_templatesWhereUniqueInput.schema';
import { process_templatesCreateWithoutProcess_instancesInputObjectSchema as process_templatesCreateWithoutProcess_instancesInputObjectSchema } from './process_templatesCreateWithoutProcess_instancesInput.schema';
import { process_templatesUncheckedCreateWithoutProcess_instancesInputObjectSchema as process_templatesUncheckedCreateWithoutProcess_instancesInputObjectSchema } from './process_templatesUncheckedCreateWithoutProcess_instancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_templatesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => process_templatesCreateWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_templatesUncheckedCreateWithoutProcess_instancesInputObjectSchema)])
}).strict();
export const process_templatesCreateOrConnectWithoutProcess_instancesInputObjectSchema: z.ZodType<Prisma.process_templatesCreateOrConnectWithoutProcess_instancesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesCreateOrConnectWithoutProcess_instancesInput>;
export const process_templatesCreateOrConnectWithoutProcess_instancesInputObjectZodSchema = makeSchema();
