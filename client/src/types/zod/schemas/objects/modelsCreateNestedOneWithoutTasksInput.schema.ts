import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { modelsCreateWithoutTasksInputObjectSchema as modelsCreateWithoutTasksInputObjectSchema } from './modelsCreateWithoutTasksInput.schema';
import { modelsUncheckedCreateWithoutTasksInputObjectSchema as modelsUncheckedCreateWithoutTasksInputObjectSchema } from './modelsUncheckedCreateWithoutTasksInput.schema';
import { modelsCreateOrConnectWithoutTasksInputObjectSchema as modelsCreateOrConnectWithoutTasksInputObjectSchema } from './modelsCreateOrConnectWithoutTasksInput.schema';
import { modelsWhereUniqueInputObjectSchema as modelsWhereUniqueInputObjectSchema } from './modelsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => modelsCreateWithoutTasksInputObjectSchema), z.lazy(() => modelsUncheckedCreateWithoutTasksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => modelsCreateOrConnectWithoutTasksInputObjectSchema).optional(),
  connect: z.lazy(() => modelsWhereUniqueInputObjectSchema).optional()
}).strict();
export const modelsCreateNestedOneWithoutTasksInputObjectSchema: z.ZodType<Prisma.modelsCreateNestedOneWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.modelsCreateNestedOneWithoutTasksInput>;
export const modelsCreateNestedOneWithoutTasksInputObjectZodSchema = makeSchema();
