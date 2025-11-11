import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateWithoutTasksInputObjectSchema as usersCreateWithoutTasksInputObjectSchema } from './usersCreateWithoutTasksInput.schema';
import { usersUncheckedCreateWithoutTasksInputObjectSchema as usersUncheckedCreateWithoutTasksInputObjectSchema } from './usersUncheckedCreateWithoutTasksInput.schema';
import { usersCreateOrConnectWithoutTasksInputObjectSchema as usersCreateOrConnectWithoutTasksInputObjectSchema } from './usersCreateOrConnectWithoutTasksInput.schema';
import { usersUpsertWithoutTasksInputObjectSchema as usersUpsertWithoutTasksInputObjectSchema } from './usersUpsertWithoutTasksInput.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateToOneWithWhereWithoutTasksInputObjectSchema as usersUpdateToOneWithWhereWithoutTasksInputObjectSchema } from './usersUpdateToOneWithWhereWithoutTasksInput.schema';
import { usersUpdateWithoutTasksInputObjectSchema as usersUpdateWithoutTasksInputObjectSchema } from './usersUpdateWithoutTasksInput.schema';
import { usersUncheckedUpdateWithoutTasksInputObjectSchema as usersUncheckedUpdateWithoutTasksInputObjectSchema } from './usersUncheckedUpdateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => usersCreateWithoutTasksInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutTasksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutTasksInputObjectSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutTasksInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => usersWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => usersWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => usersUpdateToOneWithWhereWithoutTasksInputObjectSchema), z.lazy(() => usersUpdateWithoutTasksInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutTasksInputObjectSchema)]).optional()
}).strict();
export const usersUpdateOneWithoutTasksNestedInputObjectSchema: z.ZodType<Prisma.usersUpdateOneWithoutTasksNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateOneWithoutTasksNestedInput>;
export const usersUpdateOneWithoutTasksNestedInputObjectZodSchema = makeSchema();
