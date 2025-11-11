import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksCreateWithoutError_reportsInputObjectSchema as tasksCreateWithoutError_reportsInputObjectSchema } from './tasksCreateWithoutError_reportsInput.schema';
import { tasksUncheckedCreateWithoutError_reportsInputObjectSchema as tasksUncheckedCreateWithoutError_reportsInputObjectSchema } from './tasksUncheckedCreateWithoutError_reportsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tasksCreateWithoutError_reportsInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutError_reportsInputObjectSchema)])
}).strict();
export const tasksCreateOrConnectWithoutError_reportsInputObjectSchema: z.ZodType<Prisma.tasksCreateOrConnectWithoutError_reportsInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksCreateOrConnectWithoutError_reportsInput>;
export const tasksCreateOrConnectWithoutError_reportsInputObjectZodSchema = makeSchema();
