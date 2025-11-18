import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';
import { userCreateWithoutRecycling_logsInputObjectSchema as userCreateWithoutRecycling_logsInputObjectSchema } from './userCreateWithoutRecycling_logsInput.schema';
import { userUncheckedCreateWithoutRecycling_logsInputObjectSchema as userUncheckedCreateWithoutRecycling_logsInputObjectSchema } from './userUncheckedCreateWithoutRecycling_logsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => userWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => userCreateWithoutRecycling_logsInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutRecycling_logsInputObjectSchema)])
}).strict();
export const userCreateOrConnectWithoutRecycling_logsInputObjectSchema: z.ZodType<Prisma.userCreateOrConnectWithoutRecycling_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.userCreateOrConnectWithoutRecycling_logsInput>;
export const userCreateOrConnectWithoutRecycling_logsInputObjectZodSchema = makeSchema();
