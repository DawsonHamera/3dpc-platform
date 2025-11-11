import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksUpdateWithoutPrintersInputObjectSchema as tasksUpdateWithoutPrintersInputObjectSchema } from './tasksUpdateWithoutPrintersInput.schema';
import { tasksUncheckedUpdateWithoutPrintersInputObjectSchema as tasksUncheckedUpdateWithoutPrintersInputObjectSchema } from './tasksUncheckedUpdateWithoutPrintersInput.schema';
import { tasksCreateWithoutPrintersInputObjectSchema as tasksCreateWithoutPrintersInputObjectSchema } from './tasksCreateWithoutPrintersInput.schema';
import { tasksUncheckedCreateWithoutPrintersInputObjectSchema as tasksUncheckedCreateWithoutPrintersInputObjectSchema } from './tasksUncheckedCreateWithoutPrintersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tasksUpdateWithoutPrintersInputObjectSchema), z.lazy(() => tasksUncheckedUpdateWithoutPrintersInputObjectSchema)]),
  create: z.union([z.lazy(() => tasksCreateWithoutPrintersInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutPrintersInputObjectSchema)])
}).strict();
export const tasksUpsertWithWhereUniqueWithoutPrintersInputObjectSchema: z.ZodType<Prisma.tasksUpsertWithWhereUniqueWithoutPrintersInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpsertWithWhereUniqueWithoutPrintersInput>;
export const tasksUpsertWithWhereUniqueWithoutPrintersInputObjectZodSchema = makeSchema();
