import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutPoint_logsInputObjectSchema as usersCreateWithoutPoint_logsInputObjectSchema } from './usersCreateWithoutPoint_logsInput.schema';
import { usersUncheckedCreateWithoutPoint_logsInputObjectSchema as usersUncheckedCreateWithoutPoint_logsInputObjectSchema } from './usersUncheckedCreateWithoutPoint_logsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => usersCreateWithoutPoint_logsInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutPoint_logsInputObjectSchema)])
}).strict();
export const usersCreateOrConnectWithoutPoint_logsInputObjectSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutPoint_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateOrConnectWithoutPoint_logsInput>;
export const usersCreateOrConnectWithoutPoint_logsInputObjectZodSchema = makeSchema();
