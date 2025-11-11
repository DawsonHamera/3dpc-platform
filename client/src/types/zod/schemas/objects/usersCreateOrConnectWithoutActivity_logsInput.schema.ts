import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutActivity_logsInputObjectSchema as usersCreateWithoutActivity_logsInputObjectSchema } from './usersCreateWithoutActivity_logsInput.schema';
import { usersUncheckedCreateWithoutActivity_logsInputObjectSchema as usersUncheckedCreateWithoutActivity_logsInputObjectSchema } from './usersUncheckedCreateWithoutActivity_logsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => usersCreateWithoutActivity_logsInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutActivity_logsInputObjectSchema)])
}).strict();
export const usersCreateOrConnectWithoutActivity_logsInputObjectSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutActivity_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateOrConnectWithoutActivity_logsInput>;
export const usersCreateOrConnectWithoutActivity_logsInputObjectZodSchema = makeSchema();
