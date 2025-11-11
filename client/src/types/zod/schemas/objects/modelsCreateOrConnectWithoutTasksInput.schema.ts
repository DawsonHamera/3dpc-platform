import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { modelsWhereUniqueInputObjectSchema as modelsWhereUniqueInputObjectSchema } from './modelsWhereUniqueInput.schema';
import { modelsCreateWithoutTasksInputObjectSchema as modelsCreateWithoutTasksInputObjectSchema } from './modelsCreateWithoutTasksInput.schema';
import { modelsUncheckedCreateWithoutTasksInputObjectSchema as modelsUncheckedCreateWithoutTasksInputObjectSchema } from './modelsUncheckedCreateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => modelsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => modelsCreateWithoutTasksInputObjectSchema), z.lazy(() => modelsUncheckedCreateWithoutTasksInputObjectSchema)])
}).strict();
export const modelsCreateOrConnectWithoutTasksInputObjectSchema: z.ZodType<Prisma.modelsCreateOrConnectWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.modelsCreateOrConnectWithoutTasksInput>;
export const modelsCreateOrConnectWithoutTasksInputObjectZodSchema = makeSchema();
