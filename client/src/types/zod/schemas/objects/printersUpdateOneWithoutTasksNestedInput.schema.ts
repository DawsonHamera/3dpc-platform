import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersCreateWithoutTasksInputObjectSchema as printersCreateWithoutTasksInputObjectSchema } from './printersCreateWithoutTasksInput.schema';
import { printersUncheckedCreateWithoutTasksInputObjectSchema as printersUncheckedCreateWithoutTasksInputObjectSchema } from './printersUncheckedCreateWithoutTasksInput.schema';
import { printersCreateOrConnectWithoutTasksInputObjectSchema as printersCreateOrConnectWithoutTasksInputObjectSchema } from './printersCreateOrConnectWithoutTasksInput.schema';
import { printersUpsertWithoutTasksInputObjectSchema as printersUpsertWithoutTasksInputObjectSchema } from './printersUpsertWithoutTasksInput.schema';
import { printersWhereInputObjectSchema as printersWhereInputObjectSchema } from './printersWhereInput.schema';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './printersWhereUniqueInput.schema';
import { printersUpdateToOneWithWhereWithoutTasksInputObjectSchema as printersUpdateToOneWithWhereWithoutTasksInputObjectSchema } from './printersUpdateToOneWithWhereWithoutTasksInput.schema';
import { printersUpdateWithoutTasksInputObjectSchema as printersUpdateWithoutTasksInputObjectSchema } from './printersUpdateWithoutTasksInput.schema';
import { printersUncheckedUpdateWithoutTasksInputObjectSchema as printersUncheckedUpdateWithoutTasksInputObjectSchema } from './printersUncheckedUpdateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => printersCreateWithoutTasksInputObjectSchema), z.lazy(() => printersUncheckedCreateWithoutTasksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => printersCreateOrConnectWithoutTasksInputObjectSchema).optional(),
  upsert: z.lazy(() => printersUpsertWithoutTasksInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => printersWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => printersWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => printersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => printersUpdateToOneWithWhereWithoutTasksInputObjectSchema), z.lazy(() => printersUpdateWithoutTasksInputObjectSchema), z.lazy(() => printersUncheckedUpdateWithoutTasksInputObjectSchema)]).optional()
}).strict();
export const printersUpdateOneWithoutTasksNestedInputObjectSchema: z.ZodType<Prisma.printersUpdateOneWithoutTasksNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUpdateOneWithoutTasksNestedInput>;
export const printersUpdateOneWithoutTasksNestedInputObjectZodSchema = makeSchema();
