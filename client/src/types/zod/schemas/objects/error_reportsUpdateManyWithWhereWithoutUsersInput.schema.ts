import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsScalarWhereInputObjectSchema as error_reportsScalarWhereInputObjectSchema } from './error_reportsScalarWhereInput.schema';
import { error_reportsUpdateManyMutationInputObjectSchema as error_reportsUpdateManyMutationInputObjectSchema } from './error_reportsUpdateManyMutationInput.schema';
import { error_reportsUncheckedUpdateManyWithoutUsersInputObjectSchema as error_reportsUncheckedUpdateManyWithoutUsersInputObjectSchema } from './error_reportsUncheckedUpdateManyWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => error_reportsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => error_reportsUpdateManyMutationInputObjectSchema), z.lazy(() => error_reportsUncheckedUpdateManyWithoutUsersInputObjectSchema)])
}).strict();
export const error_reportsUpdateManyWithWhereWithoutUsersInputObjectSchema: z.ZodType<Prisma.error_reportsUpdateManyWithWhereWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsUpdateManyWithWhereWithoutUsersInput>;
export const error_reportsUpdateManyWithWhereWithoutUsersInputObjectZodSchema = makeSchema();
