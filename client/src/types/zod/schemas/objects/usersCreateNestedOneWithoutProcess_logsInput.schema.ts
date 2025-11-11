import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateWithoutProcess_logsInputObjectSchema as usersCreateWithoutProcess_logsInputObjectSchema } from './usersCreateWithoutProcess_logsInput.schema';
import { usersUncheckedCreateWithoutProcess_logsInputObjectSchema as usersUncheckedCreateWithoutProcess_logsInputObjectSchema } from './usersUncheckedCreateWithoutProcess_logsInput.schema';
import { usersCreateOrConnectWithoutProcess_logsInputObjectSchema as usersCreateOrConnectWithoutProcess_logsInputObjectSchema } from './usersCreateOrConnectWithoutProcess_logsInput.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => usersCreateWithoutProcess_logsInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutProcess_logsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutProcess_logsInputObjectSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional()
}).strict();
export const usersCreateNestedOneWithoutProcess_logsInputObjectSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutProcess_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateNestedOneWithoutProcess_logsInput>;
export const usersCreateNestedOneWithoutProcess_logsInputObjectZodSchema = makeSchema();
