import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsWhereUniqueInputObjectSchema as error_reportsWhereUniqueInputObjectSchema } from './error_reportsWhereUniqueInput.schema';
import { error_reportsUpdateWithoutUsersInputObjectSchema as error_reportsUpdateWithoutUsersInputObjectSchema } from './error_reportsUpdateWithoutUsersInput.schema';
import { error_reportsUncheckedUpdateWithoutUsersInputObjectSchema as error_reportsUncheckedUpdateWithoutUsersInputObjectSchema } from './error_reportsUncheckedUpdateWithoutUsersInput.schema';
import { error_reportsCreateWithoutUsersInputObjectSchema as error_reportsCreateWithoutUsersInputObjectSchema } from './error_reportsCreateWithoutUsersInput.schema';
import { error_reportsUncheckedCreateWithoutUsersInputObjectSchema as error_reportsUncheckedCreateWithoutUsersInputObjectSchema } from './error_reportsUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => error_reportsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => error_reportsUpdateWithoutUsersInputObjectSchema), z.lazy(() => error_reportsUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => error_reportsCreateWithoutUsersInputObjectSchema), z.lazy(() => error_reportsUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const error_reportsUpsertWithWhereUniqueWithoutUsersInputObjectSchema: z.ZodType<Prisma.error_reportsUpsertWithWhereUniqueWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsUpsertWithWhereUniqueWithoutUsersInput>;
export const error_reportsUpsertWithWhereUniqueWithoutUsersInputObjectZodSchema = makeSchema();
