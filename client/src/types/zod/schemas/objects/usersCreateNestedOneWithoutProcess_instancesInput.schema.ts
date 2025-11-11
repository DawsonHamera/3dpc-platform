import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateWithoutProcess_instancesInputObjectSchema as usersCreateWithoutProcess_instancesInputObjectSchema } from './usersCreateWithoutProcess_instancesInput.schema';
import { usersUncheckedCreateWithoutProcess_instancesInputObjectSchema as usersUncheckedCreateWithoutProcess_instancesInputObjectSchema } from './usersUncheckedCreateWithoutProcess_instancesInput.schema';
import { usersCreateOrConnectWithoutProcess_instancesInputObjectSchema as usersCreateOrConnectWithoutProcess_instancesInputObjectSchema } from './usersCreateOrConnectWithoutProcess_instancesInput.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => usersCreateWithoutProcess_instancesInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutProcess_instancesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutProcess_instancesInputObjectSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional()
}).strict();
export const usersCreateNestedOneWithoutProcess_instancesInputObjectSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutProcess_instancesInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateNestedOneWithoutProcess_instancesInput>;
export const usersCreateNestedOneWithoutProcess_instancesInputObjectZodSchema = makeSchema();
