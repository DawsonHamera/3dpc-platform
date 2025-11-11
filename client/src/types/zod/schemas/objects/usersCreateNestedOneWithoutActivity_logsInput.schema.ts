import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateWithoutActivity_logsInputObjectSchema as usersCreateWithoutActivity_logsInputObjectSchema } from './usersCreateWithoutActivity_logsInput.schema';
import { usersUncheckedCreateWithoutActivity_logsInputObjectSchema as usersUncheckedCreateWithoutActivity_logsInputObjectSchema } from './usersUncheckedCreateWithoutActivity_logsInput.schema';
import { usersCreateOrConnectWithoutActivity_logsInputObjectSchema as usersCreateOrConnectWithoutActivity_logsInputObjectSchema } from './usersCreateOrConnectWithoutActivity_logsInput.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => usersCreateWithoutActivity_logsInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutActivity_logsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutActivity_logsInputObjectSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional()
}).strict();
export const usersCreateNestedOneWithoutActivity_logsInputObjectSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutActivity_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateNestedOneWithoutActivity_logsInput>;
export const usersCreateNestedOneWithoutActivity_logsInputObjectZodSchema = makeSchema();
