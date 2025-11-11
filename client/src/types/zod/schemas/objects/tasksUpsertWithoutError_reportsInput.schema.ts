import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksUpdateWithoutError_reportsInputObjectSchema as tasksUpdateWithoutError_reportsInputObjectSchema } from './tasksUpdateWithoutError_reportsInput.schema';
import { tasksUncheckedUpdateWithoutError_reportsInputObjectSchema as tasksUncheckedUpdateWithoutError_reportsInputObjectSchema } from './tasksUncheckedUpdateWithoutError_reportsInput.schema';
import { tasksCreateWithoutError_reportsInputObjectSchema as tasksCreateWithoutError_reportsInputObjectSchema } from './tasksCreateWithoutError_reportsInput.schema';
import { tasksUncheckedCreateWithoutError_reportsInputObjectSchema as tasksUncheckedCreateWithoutError_reportsInputObjectSchema } from './tasksUncheckedCreateWithoutError_reportsInput.schema';
import { tasksWhereInputObjectSchema as tasksWhereInputObjectSchema } from './tasksWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tasksUpdateWithoutError_reportsInputObjectSchema), z.lazy(() => tasksUncheckedUpdateWithoutError_reportsInputObjectSchema)]),
  create: z.union([z.lazy(() => tasksCreateWithoutError_reportsInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutError_reportsInputObjectSchema)]),
  where: z.lazy(() => tasksWhereInputObjectSchema).optional()
}).strict();
export const tasksUpsertWithoutError_reportsInputObjectSchema: z.ZodType<Prisma.tasksUpsertWithoutError_reportsInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpsertWithoutError_reportsInput>;
export const tasksUpsertWithoutError_reportsInputObjectZodSchema = makeSchema();
