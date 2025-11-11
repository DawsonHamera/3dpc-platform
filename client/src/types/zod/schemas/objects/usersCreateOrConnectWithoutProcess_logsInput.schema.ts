import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutProcess_logsInputObjectSchema as usersCreateWithoutProcess_logsInputObjectSchema } from './usersCreateWithoutProcess_logsInput.schema';
import { usersUncheckedCreateWithoutProcess_logsInputObjectSchema as usersUncheckedCreateWithoutProcess_logsInputObjectSchema } from './usersUncheckedCreateWithoutProcess_logsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => usersCreateWithoutProcess_logsInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutProcess_logsInputObjectSchema)])
}).strict();
export const usersCreateOrConnectWithoutProcess_logsInputObjectSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutProcess_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateOrConnectWithoutProcess_logsInput>;
export const usersCreateOrConnectWithoutProcess_logsInputObjectZodSchema = makeSchema();
