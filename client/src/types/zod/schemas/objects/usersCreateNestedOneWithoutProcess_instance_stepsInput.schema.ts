import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateWithoutProcess_instance_stepsInputObjectSchema as usersCreateWithoutProcess_instance_stepsInputObjectSchema } from './usersCreateWithoutProcess_instance_stepsInput.schema';
import { usersUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema as usersUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema } from './usersUncheckedCreateWithoutProcess_instance_stepsInput.schema';
import { usersCreateOrConnectWithoutProcess_instance_stepsInputObjectSchema as usersCreateOrConnectWithoutProcess_instance_stepsInputObjectSchema } from './usersCreateOrConnectWithoutProcess_instance_stepsInput.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => usersCreateWithoutProcess_instance_stepsInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutProcess_instance_stepsInputObjectSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional()
}).strict();
export const usersCreateNestedOneWithoutProcess_instance_stepsInputObjectSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutProcess_instance_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateNestedOneWithoutProcess_instance_stepsInput>;
export const usersCreateNestedOneWithoutProcess_instance_stepsInputObjectZodSchema = makeSchema();
