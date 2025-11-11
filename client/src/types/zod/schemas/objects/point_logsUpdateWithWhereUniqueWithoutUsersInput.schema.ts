import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { point_logsWhereUniqueInputObjectSchema as point_logsWhereUniqueInputObjectSchema } from './point_logsWhereUniqueInput.schema';
import { point_logsUpdateWithoutUsersInputObjectSchema as point_logsUpdateWithoutUsersInputObjectSchema } from './point_logsUpdateWithoutUsersInput.schema';
import { point_logsUncheckedUpdateWithoutUsersInputObjectSchema as point_logsUncheckedUpdateWithoutUsersInputObjectSchema } from './point_logsUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => point_logsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => point_logsUpdateWithoutUsersInputObjectSchema), z.lazy(() => point_logsUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
export const point_logsUpdateWithWhereUniqueWithoutUsersInputObjectSchema: z.ZodType<Prisma.point_logsUpdateWithWhereUniqueWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logsUpdateWithWhereUniqueWithoutUsersInput>;
export const point_logsUpdateWithWhereUniqueWithoutUsersInputObjectZodSchema = makeSchema();
