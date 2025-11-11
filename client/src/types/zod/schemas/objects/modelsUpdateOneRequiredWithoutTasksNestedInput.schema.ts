import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { modelsCreateWithoutTasksInputObjectSchema as modelsCreateWithoutTasksInputObjectSchema } from './modelsCreateWithoutTasksInput.schema';
import { modelsUncheckedCreateWithoutTasksInputObjectSchema as modelsUncheckedCreateWithoutTasksInputObjectSchema } from './modelsUncheckedCreateWithoutTasksInput.schema';
import { modelsCreateOrConnectWithoutTasksInputObjectSchema as modelsCreateOrConnectWithoutTasksInputObjectSchema } from './modelsCreateOrConnectWithoutTasksInput.schema';
import { modelsUpsertWithoutTasksInputObjectSchema as modelsUpsertWithoutTasksInputObjectSchema } from './modelsUpsertWithoutTasksInput.schema';
import { modelsWhereUniqueInputObjectSchema as modelsWhereUniqueInputObjectSchema } from './modelsWhereUniqueInput.schema';
import { modelsUpdateToOneWithWhereWithoutTasksInputObjectSchema as modelsUpdateToOneWithWhereWithoutTasksInputObjectSchema } from './modelsUpdateToOneWithWhereWithoutTasksInput.schema';
import { modelsUpdateWithoutTasksInputObjectSchema as modelsUpdateWithoutTasksInputObjectSchema } from './modelsUpdateWithoutTasksInput.schema';
import { modelsUncheckedUpdateWithoutTasksInputObjectSchema as modelsUncheckedUpdateWithoutTasksInputObjectSchema } from './modelsUncheckedUpdateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => modelsCreateWithoutTasksInputObjectSchema), z.lazy(() => modelsUncheckedCreateWithoutTasksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => modelsCreateOrConnectWithoutTasksInputObjectSchema).optional(),
  upsert: z.lazy(() => modelsUpsertWithoutTasksInputObjectSchema).optional(),
  connect: z.lazy(() => modelsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => modelsUpdateToOneWithWhereWithoutTasksInputObjectSchema), z.lazy(() => modelsUpdateWithoutTasksInputObjectSchema), z.lazy(() => modelsUncheckedUpdateWithoutTasksInputObjectSchema)]).optional()
}).strict();
export const modelsUpdateOneRequiredWithoutTasksNestedInputObjectSchema: z.ZodType<Prisma.modelsUpdateOneRequiredWithoutTasksNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.modelsUpdateOneRequiredWithoutTasksNestedInput>;
export const modelsUpdateOneRequiredWithoutTasksNestedInputObjectZodSchema = makeSchema();
