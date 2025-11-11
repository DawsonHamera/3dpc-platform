import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { point_logsScalarWhereInputObjectSchema as point_logsScalarWhereInputObjectSchema } from './point_logsScalarWhereInput.schema';
import { point_logsUpdateManyMutationInputObjectSchema as point_logsUpdateManyMutationInputObjectSchema } from './point_logsUpdateManyMutationInput.schema';
import { point_logsUncheckedUpdateManyWithoutUsersInputObjectSchema as point_logsUncheckedUpdateManyWithoutUsersInputObjectSchema } from './point_logsUncheckedUpdateManyWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => point_logsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => point_logsUpdateManyMutationInputObjectSchema), z.lazy(() => point_logsUncheckedUpdateManyWithoutUsersInputObjectSchema)])
}).strict();
export const point_logsUpdateManyWithWhereWithoutUsersInputObjectSchema: z.ZodType<Prisma.point_logsUpdateManyWithWhereWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logsUpdateManyWithWhereWithoutUsersInput>;
export const point_logsUpdateManyWithWhereWithoutUsersInputObjectZodSchema = makeSchema();
