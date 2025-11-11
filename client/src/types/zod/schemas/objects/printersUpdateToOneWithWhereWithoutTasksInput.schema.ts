import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersWhereInputObjectSchema as printersWhereInputObjectSchema } from './printersWhereInput.schema';
import { printersUpdateWithoutTasksInputObjectSchema as printersUpdateWithoutTasksInputObjectSchema } from './printersUpdateWithoutTasksInput.schema';
import { printersUncheckedUpdateWithoutTasksInputObjectSchema as printersUncheckedUpdateWithoutTasksInputObjectSchema } from './printersUncheckedUpdateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => printersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => printersUpdateWithoutTasksInputObjectSchema), z.lazy(() => printersUncheckedUpdateWithoutTasksInputObjectSchema)])
}).strict();
export const printersUpdateToOneWithWhereWithoutTasksInputObjectSchema: z.ZodType<Prisma.printersUpdateToOneWithWhereWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUpdateToOneWithWhereWithoutTasksInput>;
export const printersUpdateToOneWithWhereWithoutTasksInputObjectZodSchema = makeSchema();
