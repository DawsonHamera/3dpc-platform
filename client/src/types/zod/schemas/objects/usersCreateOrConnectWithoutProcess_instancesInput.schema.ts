import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutProcess_instancesInputObjectSchema as usersCreateWithoutProcess_instancesInputObjectSchema } from './usersCreateWithoutProcess_instancesInput.schema';
import { usersUncheckedCreateWithoutProcess_instancesInputObjectSchema as usersUncheckedCreateWithoutProcess_instancesInputObjectSchema } from './usersUncheckedCreateWithoutProcess_instancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => usersCreateWithoutProcess_instancesInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutProcess_instancesInputObjectSchema)])
}).strict();
export const usersCreateOrConnectWithoutProcess_instancesInputObjectSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutProcess_instancesInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateOrConnectWithoutProcess_instancesInput>;
export const usersCreateOrConnectWithoutProcess_instancesInputObjectZodSchema = makeSchema();
