import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksCreateWithoutPrintersInputObjectSchema as tasksCreateWithoutPrintersInputObjectSchema } from './tasksCreateWithoutPrintersInput.schema';
import { tasksUncheckedCreateWithoutPrintersInputObjectSchema as tasksUncheckedCreateWithoutPrintersInputObjectSchema } from './tasksUncheckedCreateWithoutPrintersInput.schema';
import { tasksCreateOrConnectWithoutPrintersInputObjectSchema as tasksCreateOrConnectWithoutPrintersInputObjectSchema } from './tasksCreateOrConnectWithoutPrintersInput.schema';
import { tasksCreateManyPrintersInputEnvelopeObjectSchema as tasksCreateManyPrintersInputEnvelopeObjectSchema } from './tasksCreateManyPrintersInputEnvelope.schema';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tasksCreateWithoutPrintersInputObjectSchema), z.lazy(() => tasksCreateWithoutPrintersInputObjectSchema).array(), z.lazy(() => tasksUncheckedCreateWithoutPrintersInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutPrintersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tasksCreateOrConnectWithoutPrintersInputObjectSchema), z.lazy(() => tasksCreateOrConnectWithoutPrintersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tasksCreateManyPrintersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tasksUncheckedCreateNestedManyWithoutPrintersInputObjectSchema: z.ZodType<Prisma.tasksUncheckedCreateNestedManyWithoutPrintersInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUncheckedCreateNestedManyWithoutPrintersInput>;
export const tasksUncheckedCreateNestedManyWithoutPrintersInputObjectZodSchema = makeSchema();
