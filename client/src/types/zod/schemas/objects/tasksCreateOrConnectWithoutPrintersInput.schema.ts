import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksCreateWithoutPrintersInputObjectSchema as tasksCreateWithoutPrintersInputObjectSchema } from './tasksCreateWithoutPrintersInput.schema';
import { tasksUncheckedCreateWithoutPrintersInputObjectSchema as tasksUncheckedCreateWithoutPrintersInputObjectSchema } from './tasksUncheckedCreateWithoutPrintersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tasksCreateWithoutPrintersInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutPrintersInputObjectSchema)])
}).strict();
export const tasksCreateOrConnectWithoutPrintersInputObjectSchema: z.ZodType<Prisma.tasksCreateOrConnectWithoutPrintersInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksCreateOrConnectWithoutPrintersInput>;
export const tasksCreateOrConnectWithoutPrintersInputObjectZodSchema = makeSchema();
