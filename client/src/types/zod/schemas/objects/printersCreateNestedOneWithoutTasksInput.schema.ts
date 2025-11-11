import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersCreateWithoutTasksInputObjectSchema as printersCreateWithoutTasksInputObjectSchema } from './printersCreateWithoutTasksInput.schema';
import { printersUncheckedCreateWithoutTasksInputObjectSchema as printersUncheckedCreateWithoutTasksInputObjectSchema } from './printersUncheckedCreateWithoutTasksInput.schema';
import { printersCreateOrConnectWithoutTasksInputObjectSchema as printersCreateOrConnectWithoutTasksInputObjectSchema } from './printersCreateOrConnectWithoutTasksInput.schema';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './printersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => printersCreateWithoutTasksInputObjectSchema), z.lazy(() => printersUncheckedCreateWithoutTasksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => printersCreateOrConnectWithoutTasksInputObjectSchema).optional(),
  connect: z.lazy(() => printersWhereUniqueInputObjectSchema).optional()
}).strict();
export const printersCreateNestedOneWithoutTasksInputObjectSchema: z.ZodType<Prisma.printersCreateNestedOneWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.printersCreateNestedOneWithoutTasksInput>;
export const printersCreateNestedOneWithoutTasksInputObjectZodSchema = makeSchema();
