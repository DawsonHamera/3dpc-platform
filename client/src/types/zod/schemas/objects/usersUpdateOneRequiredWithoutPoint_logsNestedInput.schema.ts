import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateWithoutPoint_logsInputObjectSchema as usersCreateWithoutPoint_logsInputObjectSchema } from './usersCreateWithoutPoint_logsInput.schema';
import { usersUncheckedCreateWithoutPoint_logsInputObjectSchema as usersUncheckedCreateWithoutPoint_logsInputObjectSchema } from './usersUncheckedCreateWithoutPoint_logsInput.schema';
import { usersCreateOrConnectWithoutPoint_logsInputObjectSchema as usersCreateOrConnectWithoutPoint_logsInputObjectSchema } from './usersCreateOrConnectWithoutPoint_logsInput.schema';
import { usersUpsertWithoutPoint_logsInputObjectSchema as usersUpsertWithoutPoint_logsInputObjectSchema } from './usersUpsertWithoutPoint_logsInput.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateToOneWithWhereWithoutPoint_logsInputObjectSchema as usersUpdateToOneWithWhereWithoutPoint_logsInputObjectSchema } from './usersUpdateToOneWithWhereWithoutPoint_logsInput.schema';
import { usersUpdateWithoutPoint_logsInputObjectSchema as usersUpdateWithoutPoint_logsInputObjectSchema } from './usersUpdateWithoutPoint_logsInput.schema';
import { usersUncheckedUpdateWithoutPoint_logsInputObjectSchema as usersUncheckedUpdateWithoutPoint_logsInputObjectSchema } from './usersUncheckedUpdateWithoutPoint_logsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => usersCreateWithoutPoint_logsInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutPoint_logsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutPoint_logsInputObjectSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutPoint_logsInputObjectSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => usersUpdateToOneWithWhereWithoutPoint_logsInputObjectSchema), z.lazy(() => usersUpdateWithoutPoint_logsInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutPoint_logsInputObjectSchema)]).optional()
}).strict();
export const usersUpdateOneRequiredWithoutPoint_logsNestedInputObjectSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutPoint_logsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateOneRequiredWithoutPoint_logsNestedInput>;
export const usersUpdateOneRequiredWithoutPoint_logsNestedInputObjectZodSchema = makeSchema();
