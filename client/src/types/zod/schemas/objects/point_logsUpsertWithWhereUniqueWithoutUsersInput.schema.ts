import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { point_logsWhereUniqueInputObjectSchema as point_logsWhereUniqueInputObjectSchema } from './point_logsWhereUniqueInput.schema';
import { point_logsUpdateWithoutUsersInputObjectSchema as point_logsUpdateWithoutUsersInputObjectSchema } from './point_logsUpdateWithoutUsersInput.schema';
import { point_logsUncheckedUpdateWithoutUsersInputObjectSchema as point_logsUncheckedUpdateWithoutUsersInputObjectSchema } from './point_logsUncheckedUpdateWithoutUsersInput.schema';
import { point_logsCreateWithoutUsersInputObjectSchema as point_logsCreateWithoutUsersInputObjectSchema } from './point_logsCreateWithoutUsersInput.schema';
import { point_logsUncheckedCreateWithoutUsersInputObjectSchema as point_logsUncheckedCreateWithoutUsersInputObjectSchema } from './point_logsUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => point_logsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => point_logsUpdateWithoutUsersInputObjectSchema), z.lazy(() => point_logsUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => point_logsCreateWithoutUsersInputObjectSchema), z.lazy(() => point_logsUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const point_logsUpsertWithWhereUniqueWithoutUsersInputObjectSchema: z.ZodType<Prisma.point_logsUpsertWithWhereUniqueWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logsUpsertWithWhereUniqueWithoutUsersInput>;
export const point_logsUpsertWithWhereUniqueWithoutUsersInputObjectZodSchema = makeSchema();
