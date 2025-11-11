import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateWithoutProcess_instancesInputObjectSchema as usersCreateWithoutProcess_instancesInputObjectSchema } from './usersCreateWithoutProcess_instancesInput.schema';
import { usersUncheckedCreateWithoutProcess_instancesInputObjectSchema as usersUncheckedCreateWithoutProcess_instancesInputObjectSchema } from './usersUncheckedCreateWithoutProcess_instancesInput.schema';
import { usersCreateOrConnectWithoutProcess_instancesInputObjectSchema as usersCreateOrConnectWithoutProcess_instancesInputObjectSchema } from './usersCreateOrConnectWithoutProcess_instancesInput.schema';
import { usersUpsertWithoutProcess_instancesInputObjectSchema as usersUpsertWithoutProcess_instancesInputObjectSchema } from './usersUpsertWithoutProcess_instancesInput.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateToOneWithWhereWithoutProcess_instancesInputObjectSchema as usersUpdateToOneWithWhereWithoutProcess_instancesInputObjectSchema } from './usersUpdateToOneWithWhereWithoutProcess_instancesInput.schema';
import { usersUpdateWithoutProcess_instancesInputObjectSchema as usersUpdateWithoutProcess_instancesInputObjectSchema } from './usersUpdateWithoutProcess_instancesInput.schema';
import { usersUncheckedUpdateWithoutProcess_instancesInputObjectSchema as usersUncheckedUpdateWithoutProcess_instancesInputObjectSchema } from './usersUncheckedUpdateWithoutProcess_instancesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => usersCreateWithoutProcess_instancesInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutProcess_instancesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutProcess_instancesInputObjectSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutProcess_instancesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => usersWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => usersWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => usersUpdateToOneWithWhereWithoutProcess_instancesInputObjectSchema), z.lazy(() => usersUpdateWithoutProcess_instancesInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutProcess_instancesInputObjectSchema)]).optional()
}).strict();
export const usersUpdateOneWithoutProcess_instancesNestedInputObjectSchema: z.ZodType<Prisma.usersUpdateOneWithoutProcess_instancesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateOneWithoutProcess_instancesNestedInput>;
export const usersUpdateOneWithoutProcess_instancesNestedInputObjectZodSchema = makeSchema();
