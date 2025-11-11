import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersUpdateWithoutTasksInputObjectSchema as printersUpdateWithoutTasksInputObjectSchema } from './printersUpdateWithoutTasksInput.schema';
import { printersUncheckedUpdateWithoutTasksInputObjectSchema as printersUncheckedUpdateWithoutTasksInputObjectSchema } from './printersUncheckedUpdateWithoutTasksInput.schema';
import { printersCreateWithoutTasksInputObjectSchema as printersCreateWithoutTasksInputObjectSchema } from './printersCreateWithoutTasksInput.schema';
import { printersUncheckedCreateWithoutTasksInputObjectSchema as printersUncheckedCreateWithoutTasksInputObjectSchema } from './printersUncheckedCreateWithoutTasksInput.schema';
import { printersWhereInputObjectSchema as printersWhereInputObjectSchema } from './printersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => printersUpdateWithoutTasksInputObjectSchema), z.lazy(() => printersUncheckedUpdateWithoutTasksInputObjectSchema)]),
  create: z.union([z.lazy(() => printersCreateWithoutTasksInputObjectSchema), z.lazy(() => printersUncheckedCreateWithoutTasksInputObjectSchema)]),
  where: z.lazy(() => printersWhereInputObjectSchema).optional()
}).strict();
export const printersUpsertWithoutTasksInputObjectSchema: z.ZodType<Prisma.printersUpsertWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUpsertWithoutTasksInput>;
export const printersUpsertWithoutTasksInputObjectZodSchema = makeSchema();
