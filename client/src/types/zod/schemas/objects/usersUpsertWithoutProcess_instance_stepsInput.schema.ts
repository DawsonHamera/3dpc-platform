import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersUpdateWithoutProcess_instance_stepsInputObjectSchema as usersUpdateWithoutProcess_instance_stepsInputObjectSchema } from './usersUpdateWithoutProcess_instance_stepsInput.schema';
import { usersUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema as usersUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema } from './usersUncheckedUpdateWithoutProcess_instance_stepsInput.schema';
import { usersCreateWithoutProcess_instance_stepsInputObjectSchema as usersCreateWithoutProcess_instance_stepsInputObjectSchema } from './usersCreateWithoutProcess_instance_stepsInput.schema';
import { usersUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema as usersUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema } from './usersUncheckedCreateWithoutProcess_instance_stepsInput.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => usersUpdateWithoutProcess_instance_stepsInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema)]),
  create: z.union([z.lazy(() => usersCreateWithoutProcess_instance_stepsInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema)]),
  where: z.lazy(() => usersWhereInputObjectSchema).optional()
}).strict();
export const usersUpsertWithoutProcess_instance_stepsInputObjectSchema: z.ZodType<Prisma.usersUpsertWithoutProcess_instance_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpsertWithoutProcess_instance_stepsInput>;
export const usersUpsertWithoutProcess_instance_stepsInputObjectZodSchema = makeSchema();
