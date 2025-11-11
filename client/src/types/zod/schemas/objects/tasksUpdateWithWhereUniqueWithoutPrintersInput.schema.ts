import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksUpdateWithoutPrintersInputObjectSchema as tasksUpdateWithoutPrintersInputObjectSchema } from './tasksUpdateWithoutPrintersInput.schema';
import { tasksUncheckedUpdateWithoutPrintersInputObjectSchema as tasksUncheckedUpdateWithoutPrintersInputObjectSchema } from './tasksUncheckedUpdateWithoutPrintersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tasksUpdateWithoutPrintersInputObjectSchema), z.lazy(() => tasksUncheckedUpdateWithoutPrintersInputObjectSchema)])
}).strict();
export const tasksUpdateWithWhereUniqueWithoutPrintersInputObjectSchema: z.ZodType<Prisma.tasksUpdateWithWhereUniqueWithoutPrintersInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpdateWithWhereUniqueWithoutPrintersInput>;
export const tasksUpdateWithWhereUniqueWithoutPrintersInputObjectZodSchema = makeSchema();
