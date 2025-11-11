import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema';
import { usersUpdateWithoutPoint_logsInputObjectSchema as usersUpdateWithoutPoint_logsInputObjectSchema } from './usersUpdateWithoutPoint_logsInput.schema';
import { usersUncheckedUpdateWithoutPoint_logsInputObjectSchema as usersUncheckedUpdateWithoutPoint_logsInputObjectSchema } from './usersUncheckedUpdateWithoutPoint_logsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => usersUpdateWithoutPoint_logsInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutPoint_logsInputObjectSchema)])
}).strict();
export const usersUpdateToOneWithWhereWithoutPoint_logsInputObjectSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutPoint_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutPoint_logsInput>;
export const usersUpdateToOneWithWhereWithoutPoint_logsInputObjectZodSchema = makeSchema();
