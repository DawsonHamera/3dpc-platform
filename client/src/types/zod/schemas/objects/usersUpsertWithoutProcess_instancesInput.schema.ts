import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersUpdateWithoutProcess_instancesInputObjectSchema as usersUpdateWithoutProcess_instancesInputObjectSchema } from './usersUpdateWithoutProcess_instancesInput.schema';
import { usersUncheckedUpdateWithoutProcess_instancesInputObjectSchema as usersUncheckedUpdateWithoutProcess_instancesInputObjectSchema } from './usersUncheckedUpdateWithoutProcess_instancesInput.schema';
import { usersCreateWithoutProcess_instancesInputObjectSchema as usersCreateWithoutProcess_instancesInputObjectSchema } from './usersCreateWithoutProcess_instancesInput.schema';
import { usersUncheckedCreateWithoutProcess_instancesInputObjectSchema as usersUncheckedCreateWithoutProcess_instancesInputObjectSchema } from './usersUncheckedCreateWithoutProcess_instancesInput.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => usersUpdateWithoutProcess_instancesInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutProcess_instancesInputObjectSchema)]),
  create: z.union([z.lazy(() => usersCreateWithoutProcess_instancesInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutProcess_instancesInputObjectSchema)]),
  where: z.lazy(() => usersWhereInputObjectSchema).optional()
}).strict();
export const usersUpsertWithoutProcess_instancesInputObjectSchema: z.ZodType<Prisma.usersUpsertWithoutProcess_instancesInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpsertWithoutProcess_instancesInput>;
export const usersUpsertWithoutProcess_instancesInputObjectZodSchema = makeSchema();
