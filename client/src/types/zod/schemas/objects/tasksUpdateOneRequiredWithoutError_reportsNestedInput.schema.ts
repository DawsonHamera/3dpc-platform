import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksCreateWithoutError_reportsInputObjectSchema as tasksCreateWithoutError_reportsInputObjectSchema } from './tasksCreateWithoutError_reportsInput.schema';
import { tasksUncheckedCreateWithoutError_reportsInputObjectSchema as tasksUncheckedCreateWithoutError_reportsInputObjectSchema } from './tasksUncheckedCreateWithoutError_reportsInput.schema';
import { tasksCreateOrConnectWithoutError_reportsInputObjectSchema as tasksCreateOrConnectWithoutError_reportsInputObjectSchema } from './tasksCreateOrConnectWithoutError_reportsInput.schema';
import { tasksUpsertWithoutError_reportsInputObjectSchema as tasksUpsertWithoutError_reportsInputObjectSchema } from './tasksUpsertWithoutError_reportsInput.schema';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksUpdateToOneWithWhereWithoutError_reportsInputObjectSchema as tasksUpdateToOneWithWhereWithoutError_reportsInputObjectSchema } from './tasksUpdateToOneWithWhereWithoutError_reportsInput.schema';
import { tasksUpdateWithoutError_reportsInputObjectSchema as tasksUpdateWithoutError_reportsInputObjectSchema } from './tasksUpdateWithoutError_reportsInput.schema';
import { tasksUncheckedUpdateWithoutError_reportsInputObjectSchema as tasksUncheckedUpdateWithoutError_reportsInputObjectSchema } from './tasksUncheckedUpdateWithoutError_reportsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tasksCreateWithoutError_reportsInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutError_reportsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tasksCreateOrConnectWithoutError_reportsInputObjectSchema).optional(),
  upsert: z.lazy(() => tasksUpsertWithoutError_reportsInputObjectSchema).optional(),
  connect: z.lazy(() => tasksWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tasksUpdateToOneWithWhereWithoutError_reportsInputObjectSchema), z.lazy(() => tasksUpdateWithoutError_reportsInputObjectSchema), z.lazy(() => tasksUncheckedUpdateWithoutError_reportsInputObjectSchema)]).optional()
}).strict();
export const tasksUpdateOneRequiredWithoutError_reportsNestedInputObjectSchema: z.ZodType<Prisma.tasksUpdateOneRequiredWithoutError_reportsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpdateOneRequiredWithoutError_reportsNestedInput>;
export const tasksUpdateOneRequiredWithoutError_reportsNestedInputObjectZodSchema = makeSchema();
