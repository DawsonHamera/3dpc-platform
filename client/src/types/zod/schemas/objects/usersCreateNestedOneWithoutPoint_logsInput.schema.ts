import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateWithoutPoint_logsInputObjectSchema as usersCreateWithoutPoint_logsInputObjectSchema } from './usersCreateWithoutPoint_logsInput.schema';
import { usersUncheckedCreateWithoutPoint_logsInputObjectSchema as usersUncheckedCreateWithoutPoint_logsInputObjectSchema } from './usersUncheckedCreateWithoutPoint_logsInput.schema';
import { usersCreateOrConnectWithoutPoint_logsInputObjectSchema as usersCreateOrConnectWithoutPoint_logsInputObjectSchema } from './usersCreateOrConnectWithoutPoint_logsInput.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => usersCreateWithoutPoint_logsInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutPoint_logsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutPoint_logsInputObjectSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional()
}).strict();
export const usersCreateNestedOneWithoutPoint_logsInputObjectSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutPoint_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateNestedOneWithoutPoint_logsInput>;
export const usersCreateNestedOneWithoutPoint_logsInputObjectZodSchema = makeSchema();
