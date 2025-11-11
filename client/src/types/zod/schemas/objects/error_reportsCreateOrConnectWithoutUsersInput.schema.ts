import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsWhereUniqueInputObjectSchema as error_reportsWhereUniqueInputObjectSchema } from './error_reportsWhereUniqueInput.schema';
import { error_reportsCreateWithoutUsersInputObjectSchema as error_reportsCreateWithoutUsersInputObjectSchema } from './error_reportsCreateWithoutUsersInput.schema';
import { error_reportsUncheckedCreateWithoutUsersInputObjectSchema as error_reportsUncheckedCreateWithoutUsersInputObjectSchema } from './error_reportsUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => error_reportsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => error_reportsCreateWithoutUsersInputObjectSchema), z.lazy(() => error_reportsUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const error_reportsCreateOrConnectWithoutUsersInputObjectSchema: z.ZodType<Prisma.error_reportsCreateOrConnectWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsCreateOrConnectWithoutUsersInput>;
export const error_reportsCreateOrConnectWithoutUsersInputObjectZodSchema = makeSchema();
