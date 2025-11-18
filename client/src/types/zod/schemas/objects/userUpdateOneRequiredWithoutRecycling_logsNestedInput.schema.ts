import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userCreateWithoutRecycling_logsInputObjectSchema as userCreateWithoutRecycling_logsInputObjectSchema } from './userCreateWithoutRecycling_logsInput.schema';
import { userUncheckedCreateWithoutRecycling_logsInputObjectSchema as userUncheckedCreateWithoutRecycling_logsInputObjectSchema } from './userUncheckedCreateWithoutRecycling_logsInput.schema';
import { userCreateOrConnectWithoutRecycling_logsInputObjectSchema as userCreateOrConnectWithoutRecycling_logsInputObjectSchema } from './userCreateOrConnectWithoutRecycling_logsInput.schema';
import { userUpsertWithoutRecycling_logsInputObjectSchema as userUpsertWithoutRecycling_logsInputObjectSchema } from './userUpsertWithoutRecycling_logsInput.schema';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';
import { userUpdateToOneWithWhereWithoutRecycling_logsInputObjectSchema as userUpdateToOneWithWhereWithoutRecycling_logsInputObjectSchema } from './userUpdateToOneWithWhereWithoutRecycling_logsInput.schema';
import { userUpdateWithoutRecycling_logsInputObjectSchema as userUpdateWithoutRecycling_logsInputObjectSchema } from './userUpdateWithoutRecycling_logsInput.schema';
import { userUncheckedUpdateWithoutRecycling_logsInputObjectSchema as userUncheckedUpdateWithoutRecycling_logsInputObjectSchema } from './userUncheckedUpdateWithoutRecycling_logsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => userCreateWithoutRecycling_logsInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutRecycling_logsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => userCreateOrConnectWithoutRecycling_logsInputObjectSchema).optional(),
  upsert: z.lazy(() => userUpsertWithoutRecycling_logsInputObjectSchema).optional(),
  connect: z.lazy(() => userWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => userUpdateToOneWithWhereWithoutRecycling_logsInputObjectSchema), z.lazy(() => userUpdateWithoutRecycling_logsInputObjectSchema), z.lazy(() => userUncheckedUpdateWithoutRecycling_logsInputObjectSchema)]).optional()
}).strict();
export const userUpdateOneRequiredWithoutRecycling_logsNestedInputObjectSchema: z.ZodType<Prisma.userUpdateOneRequiredWithoutRecycling_logsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.userUpdateOneRequiredWithoutRecycling_logsNestedInput>;
export const userUpdateOneRequiredWithoutRecycling_logsNestedInputObjectZodSchema = makeSchema();
