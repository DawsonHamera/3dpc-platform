import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersUpdateWithoutTasksInputObjectSchema as usersUpdateWithoutTasksInputObjectSchema } from './usersUpdateWithoutTasksInput.schema';
import { usersUncheckedUpdateWithoutTasksInputObjectSchema as usersUncheckedUpdateWithoutTasksInputObjectSchema } from './usersUncheckedUpdateWithoutTasksInput.schema';
import { usersCreateWithoutTasksInputObjectSchema as usersCreateWithoutTasksInputObjectSchema } from './usersCreateWithoutTasksInput.schema';
import { usersUncheckedCreateWithoutTasksInputObjectSchema as usersUncheckedCreateWithoutTasksInputObjectSchema } from './usersUncheckedCreateWithoutTasksInput.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => usersUpdateWithoutTasksInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutTasksInputObjectSchema)]),
  create: z.union([z.lazy(() => usersCreateWithoutTasksInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutTasksInputObjectSchema)]),
  where: z.lazy(() => usersWhereInputObjectSchema).optional()
}).strict();
export const usersUpsertWithoutTasksInputObjectSchema: z.ZodType<Prisma.usersUpsertWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpsertWithoutTasksInput>;
export const usersUpsertWithoutTasksInputObjectZodSchema = makeSchema();
