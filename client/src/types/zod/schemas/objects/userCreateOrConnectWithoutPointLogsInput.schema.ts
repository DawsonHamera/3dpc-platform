import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';
import { userCreateWithoutPointLogsInputObjectSchema as userCreateWithoutPointLogsInputObjectSchema } from './userCreateWithoutPointLogsInput.schema';
import { userUncheckedCreateWithoutPointLogsInputObjectSchema as userUncheckedCreateWithoutPointLogsInputObjectSchema } from './userUncheckedCreateWithoutPointLogsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => userWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => userCreateWithoutPointLogsInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutPointLogsInputObjectSchema)])
}).strict();
export const userCreateOrConnectWithoutPointLogsInputObjectSchema: z.ZodType<Prisma.userCreateOrConnectWithoutPointLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.userCreateOrConnectWithoutPointLogsInput>;
export const userCreateOrConnectWithoutPointLogsInputObjectZodSchema = makeSchema();
