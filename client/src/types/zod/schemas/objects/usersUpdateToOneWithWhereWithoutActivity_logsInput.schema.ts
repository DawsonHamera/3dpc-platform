import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema';
import { usersUpdateWithoutActivity_logsInputObjectSchema as usersUpdateWithoutActivity_logsInputObjectSchema } from './usersUpdateWithoutActivity_logsInput.schema';
import { usersUncheckedUpdateWithoutActivity_logsInputObjectSchema as usersUncheckedUpdateWithoutActivity_logsInputObjectSchema } from './usersUncheckedUpdateWithoutActivity_logsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => usersUpdateWithoutActivity_logsInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutActivity_logsInputObjectSchema)])
}).strict();
export const usersUpdateToOneWithWhereWithoutActivity_logsInputObjectSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutActivity_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutActivity_logsInput>;
export const usersUpdateToOneWithWhereWithoutActivity_logsInputObjectZodSchema = makeSchema();
