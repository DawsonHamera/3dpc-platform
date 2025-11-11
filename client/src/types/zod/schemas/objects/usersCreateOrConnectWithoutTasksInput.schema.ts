import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutTasksInputObjectSchema as usersCreateWithoutTasksInputObjectSchema } from './usersCreateWithoutTasksInput.schema';
import { usersUncheckedCreateWithoutTasksInputObjectSchema as usersUncheckedCreateWithoutTasksInputObjectSchema } from './usersUncheckedCreateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => usersCreateWithoutTasksInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutTasksInputObjectSchema)])
}).strict();
export const usersCreateOrConnectWithoutTasksInputObjectSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateOrConnectWithoutTasksInput>;
export const usersCreateOrConnectWithoutTasksInputObjectZodSchema = makeSchema();
