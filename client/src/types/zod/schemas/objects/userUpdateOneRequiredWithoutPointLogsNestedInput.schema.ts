import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userCreateWithoutPointLogsInputObjectSchema as userCreateWithoutPointLogsInputObjectSchema } from './userCreateWithoutPointLogsInput.schema';
import { userUncheckedCreateWithoutPointLogsInputObjectSchema as userUncheckedCreateWithoutPointLogsInputObjectSchema } from './userUncheckedCreateWithoutPointLogsInput.schema';
import { userCreateOrConnectWithoutPointLogsInputObjectSchema as userCreateOrConnectWithoutPointLogsInputObjectSchema } from './userCreateOrConnectWithoutPointLogsInput.schema';
import { userUpsertWithoutPointLogsInputObjectSchema as userUpsertWithoutPointLogsInputObjectSchema } from './userUpsertWithoutPointLogsInput.schema';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';
import { userUpdateToOneWithWhereWithoutPointLogsInputObjectSchema as userUpdateToOneWithWhereWithoutPointLogsInputObjectSchema } from './userUpdateToOneWithWhereWithoutPointLogsInput.schema';
import { userUpdateWithoutPointLogsInputObjectSchema as userUpdateWithoutPointLogsInputObjectSchema } from './userUpdateWithoutPointLogsInput.schema';
import { userUncheckedUpdateWithoutPointLogsInputObjectSchema as userUncheckedUpdateWithoutPointLogsInputObjectSchema } from './userUncheckedUpdateWithoutPointLogsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => userCreateWithoutPointLogsInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutPointLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => userCreateOrConnectWithoutPointLogsInputObjectSchema).optional(),
  upsert: z.lazy(() => userUpsertWithoutPointLogsInputObjectSchema).optional(),
  connect: z.lazy(() => userWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => userUpdateToOneWithWhereWithoutPointLogsInputObjectSchema), z.lazy(() => userUpdateWithoutPointLogsInputObjectSchema), z.lazy(() => userUncheckedUpdateWithoutPointLogsInputObjectSchema)]).optional()
}).strict();
export const userUpdateOneRequiredWithoutPointLogsNestedInputObjectSchema: z.ZodType<Prisma.userUpdateOneRequiredWithoutPointLogsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.userUpdateOneRequiredWithoutPointLogsNestedInput>;
export const userUpdateOneRequiredWithoutPointLogsNestedInputObjectZodSchema = makeSchema();
