import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema';
import { usersUpdateWithoutTasksInputObjectSchema as usersUpdateWithoutTasksInputObjectSchema } from './usersUpdateWithoutTasksInput.schema';
import { usersUncheckedUpdateWithoutTasksInputObjectSchema as usersUncheckedUpdateWithoutTasksInputObjectSchema } from './usersUncheckedUpdateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => usersUpdateWithoutTasksInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutTasksInputObjectSchema)])
}).strict();
export const usersUpdateToOneWithWhereWithoutTasksInputObjectSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutTasksInput>;
export const usersUpdateToOneWithWhereWithoutTasksInputObjectZodSchema = makeSchema();
