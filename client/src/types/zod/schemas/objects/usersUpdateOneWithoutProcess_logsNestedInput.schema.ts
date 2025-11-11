import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateWithoutProcess_logsInputObjectSchema as usersCreateWithoutProcess_logsInputObjectSchema } from './usersCreateWithoutProcess_logsInput.schema';
import { usersUncheckedCreateWithoutProcess_logsInputObjectSchema as usersUncheckedCreateWithoutProcess_logsInputObjectSchema } from './usersUncheckedCreateWithoutProcess_logsInput.schema';
import { usersCreateOrConnectWithoutProcess_logsInputObjectSchema as usersCreateOrConnectWithoutProcess_logsInputObjectSchema } from './usersCreateOrConnectWithoutProcess_logsInput.schema';
import { usersUpsertWithoutProcess_logsInputObjectSchema as usersUpsertWithoutProcess_logsInputObjectSchema } from './usersUpsertWithoutProcess_logsInput.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateToOneWithWhereWithoutProcess_logsInputObjectSchema as usersUpdateToOneWithWhereWithoutProcess_logsInputObjectSchema } from './usersUpdateToOneWithWhereWithoutProcess_logsInput.schema';
import { usersUpdateWithoutProcess_logsInputObjectSchema as usersUpdateWithoutProcess_logsInputObjectSchema } from './usersUpdateWithoutProcess_logsInput.schema';
import { usersUncheckedUpdateWithoutProcess_logsInputObjectSchema as usersUncheckedUpdateWithoutProcess_logsInputObjectSchema } from './usersUncheckedUpdateWithoutProcess_logsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => usersCreateWithoutProcess_logsInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutProcess_logsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutProcess_logsInputObjectSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutProcess_logsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => usersWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => usersWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => usersUpdateToOneWithWhereWithoutProcess_logsInputObjectSchema), z.lazy(() => usersUpdateWithoutProcess_logsInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutProcess_logsInputObjectSchema)]).optional()
}).strict();
export const usersUpdateOneWithoutProcess_logsNestedInputObjectSchema: z.ZodType<Prisma.usersUpdateOneWithoutProcess_logsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateOneWithoutProcess_logsNestedInput>;
export const usersUpdateOneWithoutProcess_logsNestedInputObjectZodSchema = makeSchema();
