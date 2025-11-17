import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { roleCreateWithoutUsersInputObjectSchema as roleCreateWithoutUsersInputObjectSchema } from './roleCreateWithoutUsersInput.schema';
import { roleUncheckedCreateWithoutUsersInputObjectSchema as roleUncheckedCreateWithoutUsersInputObjectSchema } from './roleUncheckedCreateWithoutUsersInput.schema';
import { roleCreateOrConnectWithoutUsersInputObjectSchema as roleCreateOrConnectWithoutUsersInputObjectSchema } from './roleCreateOrConnectWithoutUsersInput.schema';
import { roleUpsertWithoutUsersInputObjectSchema as roleUpsertWithoutUsersInputObjectSchema } from './roleUpsertWithoutUsersInput.schema';
import { roleWhereUniqueInputObjectSchema as roleWhereUniqueInputObjectSchema } from './roleWhereUniqueInput.schema';
import { roleUpdateToOneWithWhereWithoutUsersInputObjectSchema as roleUpdateToOneWithWhereWithoutUsersInputObjectSchema } from './roleUpdateToOneWithWhereWithoutUsersInput.schema';
import { roleUpdateWithoutUsersInputObjectSchema as roleUpdateWithoutUsersInputObjectSchema } from './roleUpdateWithoutUsersInput.schema';
import { roleUncheckedUpdateWithoutUsersInputObjectSchema as roleUncheckedUpdateWithoutUsersInputObjectSchema } from './roleUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => roleCreateWithoutUsersInputObjectSchema), z.lazy(() => roleUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => roleCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  upsert: z.lazy(() => roleUpsertWithoutUsersInputObjectSchema).optional(),
  connect: z.lazy(() => roleWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => roleUpdateToOneWithWhereWithoutUsersInputObjectSchema), z.lazy(() => roleUpdateWithoutUsersInputObjectSchema), z.lazy(() => roleUncheckedUpdateWithoutUsersInputObjectSchema)]).optional()
}).strict();
export const roleUpdateOneRequiredWithoutUsersNestedInputObjectSchema: z.ZodType<Prisma.roleUpdateOneRequiredWithoutUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.roleUpdateOneRequiredWithoutUsersNestedInput>;
export const roleUpdateOneRequiredWithoutUsersNestedInputObjectZodSchema = makeSchema();
