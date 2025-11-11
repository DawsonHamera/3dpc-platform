import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { point_logsWhereUniqueInputObjectSchema as point_logsWhereUniqueInputObjectSchema } from './point_logsWhereUniqueInput.schema';
import { point_logsCreateWithoutUsersInputObjectSchema as point_logsCreateWithoutUsersInputObjectSchema } from './point_logsCreateWithoutUsersInput.schema';
import { point_logsUncheckedCreateWithoutUsersInputObjectSchema as point_logsUncheckedCreateWithoutUsersInputObjectSchema } from './point_logsUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => point_logsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => point_logsCreateWithoutUsersInputObjectSchema), z.lazy(() => point_logsUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const point_logsCreateOrConnectWithoutUsersInputObjectSchema: z.ZodType<Prisma.point_logsCreateOrConnectWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logsCreateOrConnectWithoutUsersInput>;
export const point_logsCreateOrConnectWithoutUsersInputObjectZodSchema = makeSchema();
