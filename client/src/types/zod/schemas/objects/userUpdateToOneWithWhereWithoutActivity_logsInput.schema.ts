import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userWhereInputObjectSchema as userWhereInputObjectSchema } from './userWhereInput.schema';
import { userUpdateWithoutActivity_logsInputObjectSchema as userUpdateWithoutActivity_logsInputObjectSchema } from './userUpdateWithoutActivity_logsInput.schema';
import { userUncheckedUpdateWithoutActivity_logsInputObjectSchema as userUncheckedUpdateWithoutActivity_logsInputObjectSchema } from './userUncheckedUpdateWithoutActivity_logsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => userWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => userUpdateWithoutActivity_logsInputObjectSchema), z.lazy(() => userUncheckedUpdateWithoutActivity_logsInputObjectSchema)])
}).strict();
export const userUpdateToOneWithWhereWithoutActivity_logsInputObjectSchema: z.ZodType<Prisma.userUpdateToOneWithWhereWithoutActivity_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.userUpdateToOneWithWhereWithoutActivity_logsInput>;
export const userUpdateToOneWithWhereWithoutActivity_logsInputObjectZodSchema = makeSchema();
