import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksCreateWithoutModelsInputObjectSchema as tasksCreateWithoutModelsInputObjectSchema } from './tasksCreateWithoutModelsInput.schema';
import { tasksUncheckedCreateWithoutModelsInputObjectSchema as tasksUncheckedCreateWithoutModelsInputObjectSchema } from './tasksUncheckedCreateWithoutModelsInput.schema';
import { tasksCreateOrConnectWithoutModelsInputObjectSchema as tasksCreateOrConnectWithoutModelsInputObjectSchema } from './tasksCreateOrConnectWithoutModelsInput.schema';
import { tasksCreateManyModelsInputEnvelopeObjectSchema as tasksCreateManyModelsInputEnvelopeObjectSchema } from './tasksCreateManyModelsInputEnvelope.schema';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tasksCreateWithoutModelsInputObjectSchema), z.lazy(() => tasksCreateWithoutModelsInputObjectSchema).array(), z.lazy(() => tasksUncheckedCreateWithoutModelsInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutModelsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tasksCreateOrConnectWithoutModelsInputObjectSchema), z.lazy(() => tasksCreateOrConnectWithoutModelsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tasksCreateManyModelsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tasksCreateNestedManyWithoutModelsInputObjectSchema: z.ZodType<Prisma.tasksCreateNestedManyWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksCreateNestedManyWithoutModelsInput>;
export const tasksCreateNestedManyWithoutModelsInputObjectZodSchema = makeSchema();
