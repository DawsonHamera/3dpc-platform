import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema';
import { usersUpdateWithoutProcess_instance_stepsInputObjectSchema as usersUpdateWithoutProcess_instance_stepsInputObjectSchema } from './usersUpdateWithoutProcess_instance_stepsInput.schema';
import { usersUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema as usersUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema } from './usersUncheckedUpdateWithoutProcess_instance_stepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => usersUpdateWithoutProcess_instance_stepsInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema)])
}).strict();
export const usersUpdateToOneWithWhereWithoutProcess_instance_stepsInputObjectSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutProcess_instance_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutProcess_instance_stepsInput>;
export const usersUpdateToOneWithWhereWithoutProcess_instance_stepsInputObjectZodSchema = makeSchema();
