import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userWhereInputObjectSchema as userWhereInputObjectSchema } from './userWhereInput.schema';
import { userUpdateWithoutRecycling_logsInputObjectSchema as userUpdateWithoutRecycling_logsInputObjectSchema } from './userUpdateWithoutRecycling_logsInput.schema';
import { userUncheckedUpdateWithoutRecycling_logsInputObjectSchema as userUncheckedUpdateWithoutRecycling_logsInputObjectSchema } from './userUncheckedUpdateWithoutRecycling_logsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => userWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => userUpdateWithoutRecycling_logsInputObjectSchema), z.lazy(() => userUncheckedUpdateWithoutRecycling_logsInputObjectSchema)])
}).strict();
export const userUpdateToOneWithWhereWithoutRecycling_logsInputObjectSchema: z.ZodType<Prisma.userUpdateToOneWithWhereWithoutRecycling_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.userUpdateToOneWithWhereWithoutRecycling_logsInput>;
export const userUpdateToOneWithWhereWithoutRecycling_logsInputObjectZodSchema = makeSchema();
