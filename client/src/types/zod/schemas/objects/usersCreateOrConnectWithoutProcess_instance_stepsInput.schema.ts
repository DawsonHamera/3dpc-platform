import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutProcess_instance_stepsInputObjectSchema as usersCreateWithoutProcess_instance_stepsInputObjectSchema } from './usersCreateWithoutProcess_instance_stepsInput.schema';
import { usersUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema as usersUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema } from './usersUncheckedCreateWithoutProcess_instance_stepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => usersCreateWithoutProcess_instance_stepsInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema)])
}).strict();
export const usersCreateOrConnectWithoutProcess_instance_stepsInputObjectSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutProcess_instance_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateOrConnectWithoutProcess_instance_stepsInput>;
export const usersCreateOrConnectWithoutProcess_instance_stepsInputObjectZodSchema = makeSchema();
