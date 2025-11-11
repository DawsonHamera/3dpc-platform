import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateWithoutTasksInputObjectSchema as usersCreateWithoutTasksInputObjectSchema } from './usersCreateWithoutTasksInput.schema';
import { usersUncheckedCreateWithoutTasksInputObjectSchema as usersUncheckedCreateWithoutTasksInputObjectSchema } from './usersUncheckedCreateWithoutTasksInput.schema';
import { usersCreateOrConnectWithoutTasksInputObjectSchema as usersCreateOrConnectWithoutTasksInputObjectSchema } from './usersCreateOrConnectWithoutTasksInput.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => usersCreateWithoutTasksInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutTasksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutTasksInputObjectSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional()
}).strict();
export const usersCreateNestedOneWithoutTasksInputObjectSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateNestedOneWithoutTasksInput>;
export const usersCreateNestedOneWithoutTasksInputObjectZodSchema = makeSchema();
