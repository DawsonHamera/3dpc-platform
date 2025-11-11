import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesWhereUniqueInputObjectSchema as process_instancesWhereUniqueInputObjectSchema } from './process_instancesWhereUniqueInput.schema';
import { process_instancesCreateWithoutUsersInputObjectSchema as process_instancesCreateWithoutUsersInputObjectSchema } from './process_instancesCreateWithoutUsersInput.schema';
import { process_instancesUncheckedCreateWithoutUsersInputObjectSchema as process_instancesUncheckedCreateWithoutUsersInputObjectSchema } from './process_instancesUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_instancesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => process_instancesCreateWithoutUsersInputObjectSchema), z.lazy(() => process_instancesUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const process_instancesCreateOrConnectWithoutUsersInputObjectSchema: z.ZodType<Prisma.process_instancesCreateOrConnectWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesCreateOrConnectWithoutUsersInput>;
export const process_instancesCreateOrConnectWithoutUsersInputObjectZodSchema = makeSchema();
