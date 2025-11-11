import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema';
import { usersUpdateWithoutProcess_logsInputObjectSchema as usersUpdateWithoutProcess_logsInputObjectSchema } from './usersUpdateWithoutProcess_logsInput.schema';
import { usersUncheckedUpdateWithoutProcess_logsInputObjectSchema as usersUncheckedUpdateWithoutProcess_logsInputObjectSchema } from './usersUncheckedUpdateWithoutProcess_logsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => usersUpdateWithoutProcess_logsInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutProcess_logsInputObjectSchema)])
}).strict();
export const usersUpdateToOneWithWhereWithoutProcess_logsInputObjectSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutProcess_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutProcess_logsInput>;
export const usersUpdateToOneWithWhereWithoutProcess_logsInputObjectZodSchema = makeSchema();
