import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userCreateWithoutActivity_logsInputObjectSchema as userCreateWithoutActivity_logsInputObjectSchema } from './userCreateWithoutActivity_logsInput.schema';
import { userUncheckedCreateWithoutActivity_logsInputObjectSchema as userUncheckedCreateWithoutActivity_logsInputObjectSchema } from './userUncheckedCreateWithoutActivity_logsInput.schema';
import { userCreateOrConnectWithoutActivity_logsInputObjectSchema as userCreateOrConnectWithoutActivity_logsInputObjectSchema } from './userCreateOrConnectWithoutActivity_logsInput.schema';
import { userUpsertWithoutActivity_logsInputObjectSchema as userUpsertWithoutActivity_logsInputObjectSchema } from './userUpsertWithoutActivity_logsInput.schema';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';
import { userUpdateToOneWithWhereWithoutActivity_logsInputObjectSchema as userUpdateToOneWithWhereWithoutActivity_logsInputObjectSchema } from './userUpdateToOneWithWhereWithoutActivity_logsInput.schema';
import { userUpdateWithoutActivity_logsInputObjectSchema as userUpdateWithoutActivity_logsInputObjectSchema } from './userUpdateWithoutActivity_logsInput.schema';
import { userUncheckedUpdateWithoutActivity_logsInputObjectSchema as userUncheckedUpdateWithoutActivity_logsInputObjectSchema } from './userUncheckedUpdateWithoutActivity_logsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => userCreateWithoutActivity_logsInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutActivity_logsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => userCreateOrConnectWithoutActivity_logsInputObjectSchema).optional(),
  upsert: z.lazy(() => userUpsertWithoutActivity_logsInputObjectSchema).optional(),
  connect: z.lazy(() => userWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => userUpdateToOneWithWhereWithoutActivity_logsInputObjectSchema), z.lazy(() => userUpdateWithoutActivity_logsInputObjectSchema), z.lazy(() => userUncheckedUpdateWithoutActivity_logsInputObjectSchema)]).optional()
}).strict();
export const userUpdateOneRequiredWithoutActivity_logsNestedInputObjectSchema: z.ZodType<Prisma.userUpdateOneRequiredWithoutActivity_logsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.userUpdateOneRequiredWithoutActivity_logsNestedInput>;
export const userUpdateOneRequiredWithoutActivity_logsNestedInputObjectZodSchema = makeSchema();
