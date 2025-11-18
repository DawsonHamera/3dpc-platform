import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userWhereInputObjectSchema as userWhereInputObjectSchema } from './userWhereInput.schema';
import { userUpdateWithoutPointLogsInputObjectSchema as userUpdateWithoutPointLogsInputObjectSchema } from './userUpdateWithoutPointLogsInput.schema';
import { userUncheckedUpdateWithoutPointLogsInputObjectSchema as userUncheckedUpdateWithoutPointLogsInputObjectSchema } from './userUncheckedUpdateWithoutPointLogsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => userWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => userUpdateWithoutPointLogsInputObjectSchema), z.lazy(() => userUncheckedUpdateWithoutPointLogsInputObjectSchema)])
}).strict();
export const userUpdateToOneWithWhereWithoutPointLogsInputObjectSchema: z.ZodType<Prisma.userUpdateToOneWithWhereWithoutPointLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.userUpdateToOneWithWhereWithoutPointLogsInput>;
export const userUpdateToOneWithWhereWithoutPointLogsInputObjectZodSchema = makeSchema();
