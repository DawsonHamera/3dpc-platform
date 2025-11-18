import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userCreateWithoutRecycling_logsInputObjectSchema as userCreateWithoutRecycling_logsInputObjectSchema } from './userCreateWithoutRecycling_logsInput.schema';
import { userUncheckedCreateWithoutRecycling_logsInputObjectSchema as userUncheckedCreateWithoutRecycling_logsInputObjectSchema } from './userUncheckedCreateWithoutRecycling_logsInput.schema';
import { userCreateOrConnectWithoutRecycling_logsInputObjectSchema as userCreateOrConnectWithoutRecycling_logsInputObjectSchema } from './userCreateOrConnectWithoutRecycling_logsInput.schema';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => userCreateWithoutRecycling_logsInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutRecycling_logsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => userCreateOrConnectWithoutRecycling_logsInputObjectSchema).optional(),
  connect: z.lazy(() => userWhereUniqueInputObjectSchema).optional()
}).strict();
export const userCreateNestedOneWithoutRecycling_logsInputObjectSchema: z.ZodType<Prisma.userCreateNestedOneWithoutRecycling_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.userCreateNestedOneWithoutRecycling_logsInput>;
export const userCreateNestedOneWithoutRecycling_logsInputObjectZodSchema = makeSchema();
