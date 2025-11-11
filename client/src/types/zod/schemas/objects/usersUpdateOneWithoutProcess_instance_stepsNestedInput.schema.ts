import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateWithoutProcess_instance_stepsInputObjectSchema as usersCreateWithoutProcess_instance_stepsInputObjectSchema } from './usersCreateWithoutProcess_instance_stepsInput.schema';
import { usersUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema as usersUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema } from './usersUncheckedCreateWithoutProcess_instance_stepsInput.schema';
import { usersCreateOrConnectWithoutProcess_instance_stepsInputObjectSchema as usersCreateOrConnectWithoutProcess_instance_stepsInputObjectSchema } from './usersCreateOrConnectWithoutProcess_instance_stepsInput.schema';
import { usersUpsertWithoutProcess_instance_stepsInputObjectSchema as usersUpsertWithoutProcess_instance_stepsInputObjectSchema } from './usersUpsertWithoutProcess_instance_stepsInput.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateToOneWithWhereWithoutProcess_instance_stepsInputObjectSchema as usersUpdateToOneWithWhereWithoutProcess_instance_stepsInputObjectSchema } from './usersUpdateToOneWithWhereWithoutProcess_instance_stepsInput.schema';
import { usersUpdateWithoutProcess_instance_stepsInputObjectSchema as usersUpdateWithoutProcess_instance_stepsInputObjectSchema } from './usersUpdateWithoutProcess_instance_stepsInput.schema';
import { usersUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema as usersUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema } from './usersUncheckedUpdateWithoutProcess_instance_stepsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => usersCreateWithoutProcess_instance_stepsInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutProcess_instance_stepsInputObjectSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutProcess_instance_stepsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => usersWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => usersWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => usersUpdateToOneWithWhereWithoutProcess_instance_stepsInputObjectSchema), z.lazy(() => usersUpdateWithoutProcess_instance_stepsInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema)]).optional()
}).strict();
export const usersUpdateOneWithoutProcess_instance_stepsNestedInputObjectSchema: z.ZodType<Prisma.usersUpdateOneWithoutProcess_instance_stepsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateOneWithoutProcess_instance_stepsNestedInput>;
export const usersUpdateOneWithoutProcess_instance_stepsNestedInputObjectZodSchema = makeSchema();
