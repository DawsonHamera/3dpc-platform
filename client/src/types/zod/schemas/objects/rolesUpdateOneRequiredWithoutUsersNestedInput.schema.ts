import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { rolesCreateWithoutUsersInputObjectSchema as rolesCreateWithoutUsersInputObjectSchema } from './rolesCreateWithoutUsersInput.schema';
import { rolesUncheckedCreateWithoutUsersInputObjectSchema as rolesUncheckedCreateWithoutUsersInputObjectSchema } from './rolesUncheckedCreateWithoutUsersInput.schema';
import { rolesCreateOrConnectWithoutUsersInputObjectSchema as rolesCreateOrConnectWithoutUsersInputObjectSchema } from './rolesCreateOrConnectWithoutUsersInput.schema';
import { rolesUpsertWithoutUsersInputObjectSchema as rolesUpsertWithoutUsersInputObjectSchema } from './rolesUpsertWithoutUsersInput.schema';
import { rolesWhereUniqueInputObjectSchema as rolesWhereUniqueInputObjectSchema } from './rolesWhereUniqueInput.schema';
import { rolesUpdateToOneWithWhereWithoutUsersInputObjectSchema as rolesUpdateToOneWithWhereWithoutUsersInputObjectSchema } from './rolesUpdateToOneWithWhereWithoutUsersInput.schema';
import { rolesUpdateWithoutUsersInputObjectSchema as rolesUpdateWithoutUsersInputObjectSchema } from './rolesUpdateWithoutUsersInput.schema';
import { rolesUncheckedUpdateWithoutUsersInputObjectSchema as rolesUncheckedUpdateWithoutUsersInputObjectSchema } from './rolesUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => rolesCreateWithoutUsersInputObjectSchema), z.lazy(() => rolesUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => rolesCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  upsert: z.lazy(() => rolesUpsertWithoutUsersInputObjectSchema).optional(),
  connect: z.lazy(() => rolesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => rolesUpdateToOneWithWhereWithoutUsersInputObjectSchema), z.lazy(() => rolesUpdateWithoutUsersInputObjectSchema), z.lazy(() => rolesUncheckedUpdateWithoutUsersInputObjectSchema)]).optional()
}).strict();
export const rolesUpdateOneRequiredWithoutUsersNestedInputObjectSchema: z.ZodType<Prisma.rolesUpdateOneRequiredWithoutUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.rolesUpdateOneRequiredWithoutUsersNestedInput>;
export const rolesUpdateOneRequiredWithoutUsersNestedInputObjectZodSchema = makeSchema();
