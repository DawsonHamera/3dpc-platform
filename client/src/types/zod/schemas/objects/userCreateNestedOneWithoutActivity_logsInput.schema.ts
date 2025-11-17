import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userCreateWithoutActivity_logsInputObjectSchema as userCreateWithoutActivity_logsInputObjectSchema } from './userCreateWithoutActivity_logsInput.schema';
import { userUncheckedCreateWithoutActivity_logsInputObjectSchema as userUncheckedCreateWithoutActivity_logsInputObjectSchema } from './userUncheckedCreateWithoutActivity_logsInput.schema';
import { userCreateOrConnectWithoutActivity_logsInputObjectSchema as userCreateOrConnectWithoutActivity_logsInputObjectSchema } from './userCreateOrConnectWithoutActivity_logsInput.schema';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => userCreateWithoutActivity_logsInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutActivity_logsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => userCreateOrConnectWithoutActivity_logsInputObjectSchema).optional(),
  connect: z.lazy(() => userWhereUniqueInputObjectSchema).optional()
}).strict();
export const userCreateNestedOneWithoutActivity_logsInputObjectSchema: z.ZodType<Prisma.userCreateNestedOneWithoutActivity_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.userCreateNestedOneWithoutActivity_logsInput>;
export const userCreateNestedOneWithoutActivity_logsInputObjectZodSchema = makeSchema();
