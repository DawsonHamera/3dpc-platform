import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesWhereUniqueInputObjectSchema as process_instancesWhereUniqueInputObjectSchema } from './process_instancesWhereUniqueInput.schema';
import { process_instancesCreateWithoutProcess_templatesInputObjectSchema as process_instancesCreateWithoutProcess_templatesInputObjectSchema } from './process_instancesCreateWithoutProcess_templatesInput.schema';
import { process_instancesUncheckedCreateWithoutProcess_templatesInputObjectSchema as process_instancesUncheckedCreateWithoutProcess_templatesInputObjectSchema } from './process_instancesUncheckedCreateWithoutProcess_templatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_instancesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => process_instancesCreateWithoutProcess_templatesInputObjectSchema), z.lazy(() => process_instancesUncheckedCreateWithoutProcess_templatesInputObjectSchema)])
}).strict();
export const process_instancesCreateOrConnectWithoutProcess_templatesInputObjectSchema: z.ZodType<Prisma.process_instancesCreateOrConnectWithoutProcess_templatesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesCreateOrConnectWithoutProcess_templatesInput>;
export const process_instancesCreateOrConnectWithoutProcess_templatesInputObjectZodSchema = makeSchema();
