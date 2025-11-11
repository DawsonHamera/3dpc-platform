import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksCreateWithoutError_reportsInputObjectSchema as tasksCreateWithoutError_reportsInputObjectSchema } from './tasksCreateWithoutError_reportsInput.schema';
import { tasksUncheckedCreateWithoutError_reportsInputObjectSchema as tasksUncheckedCreateWithoutError_reportsInputObjectSchema } from './tasksUncheckedCreateWithoutError_reportsInput.schema';
import { tasksCreateOrConnectWithoutError_reportsInputObjectSchema as tasksCreateOrConnectWithoutError_reportsInputObjectSchema } from './tasksCreateOrConnectWithoutError_reportsInput.schema';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tasksCreateWithoutError_reportsInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutError_reportsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tasksCreateOrConnectWithoutError_reportsInputObjectSchema).optional(),
  connect: z.lazy(() => tasksWhereUniqueInputObjectSchema).optional()
}).strict();
export const tasksCreateNestedOneWithoutError_reportsInputObjectSchema: z.ZodType<Prisma.tasksCreateNestedOneWithoutError_reportsInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksCreateNestedOneWithoutError_reportsInput>;
export const tasksCreateNestedOneWithoutError_reportsInputObjectZodSchema = makeSchema();
