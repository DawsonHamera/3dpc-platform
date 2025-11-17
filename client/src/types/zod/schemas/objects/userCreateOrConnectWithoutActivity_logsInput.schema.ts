import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';
import { userCreateWithoutActivity_logsInputObjectSchema as userCreateWithoutActivity_logsInputObjectSchema } from './userCreateWithoutActivity_logsInput.schema';
import { userUncheckedCreateWithoutActivity_logsInputObjectSchema as userUncheckedCreateWithoutActivity_logsInputObjectSchema } from './userUncheckedCreateWithoutActivity_logsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => userWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => userCreateWithoutActivity_logsInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutActivity_logsInputObjectSchema)])
}).strict();
export const userCreateOrConnectWithoutActivity_logsInputObjectSchema: z.ZodType<Prisma.userCreateOrConnectWithoutActivity_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.userCreateOrConnectWithoutActivity_logsInput>;
export const userCreateOrConnectWithoutActivity_logsInputObjectZodSchema = makeSchema();
