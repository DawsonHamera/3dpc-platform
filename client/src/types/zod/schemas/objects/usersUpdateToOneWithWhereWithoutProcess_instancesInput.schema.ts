import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema';
import { usersUpdateWithoutProcess_instancesInputObjectSchema as usersUpdateWithoutProcess_instancesInputObjectSchema } from './usersUpdateWithoutProcess_instancesInput.schema';
import { usersUncheckedUpdateWithoutProcess_instancesInputObjectSchema as usersUncheckedUpdateWithoutProcess_instancesInputObjectSchema } from './usersUncheckedUpdateWithoutProcess_instancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => usersUpdateWithoutProcess_instancesInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutProcess_instancesInputObjectSchema)])
}).strict();
export const usersUpdateToOneWithWhereWithoutProcess_instancesInputObjectSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutProcess_instancesInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutProcess_instancesInput>;
export const usersUpdateToOneWithWhereWithoutProcess_instancesInputObjectZodSchema = makeSchema();
