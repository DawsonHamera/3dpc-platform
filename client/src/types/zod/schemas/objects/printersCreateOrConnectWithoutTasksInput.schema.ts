import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './printersWhereUniqueInput.schema';
import { printersCreateWithoutTasksInputObjectSchema as printersCreateWithoutTasksInputObjectSchema } from './printersCreateWithoutTasksInput.schema';
import { printersUncheckedCreateWithoutTasksInputObjectSchema as printersUncheckedCreateWithoutTasksInputObjectSchema } from './printersUncheckedCreateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => printersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => printersCreateWithoutTasksInputObjectSchema), z.lazy(() => printersUncheckedCreateWithoutTasksInputObjectSchema)])
}).strict();
export const printersCreateOrConnectWithoutTasksInputObjectSchema: z.ZodType<Prisma.printersCreateOrConnectWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.printersCreateOrConnectWithoutTasksInput>;
export const printersCreateOrConnectWithoutTasksInputObjectZodSchema = makeSchema();
