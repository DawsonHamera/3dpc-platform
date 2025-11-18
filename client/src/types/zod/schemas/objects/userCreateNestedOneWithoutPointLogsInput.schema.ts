import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userCreateWithoutPointLogsInputObjectSchema as userCreateWithoutPointLogsInputObjectSchema } from './userCreateWithoutPointLogsInput.schema';
import { userUncheckedCreateWithoutPointLogsInputObjectSchema as userUncheckedCreateWithoutPointLogsInputObjectSchema } from './userUncheckedCreateWithoutPointLogsInput.schema';
import { userCreateOrConnectWithoutPointLogsInputObjectSchema as userCreateOrConnectWithoutPointLogsInputObjectSchema } from './userCreateOrConnectWithoutPointLogsInput.schema';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => userCreateWithoutPointLogsInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutPointLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => userCreateOrConnectWithoutPointLogsInputObjectSchema).optional(),
  connect: z.lazy(() => userWhereUniqueInputObjectSchema).optional()
}).strict();
export const userCreateNestedOneWithoutPointLogsInputObjectSchema: z.ZodType<Prisma.userCreateNestedOneWithoutPointLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.userCreateNestedOneWithoutPointLogsInput>;
export const userCreateNestedOneWithoutPointLogsInputObjectZodSchema = makeSchema();
