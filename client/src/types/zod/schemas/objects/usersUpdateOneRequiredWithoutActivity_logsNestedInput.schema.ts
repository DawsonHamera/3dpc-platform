import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateWithoutActivity_logsInputObjectSchema as usersCreateWithoutActivity_logsInputObjectSchema } from './usersCreateWithoutActivity_logsInput.schema';
import { usersUncheckedCreateWithoutActivity_logsInputObjectSchema as usersUncheckedCreateWithoutActivity_logsInputObjectSchema } from './usersUncheckedCreateWithoutActivity_logsInput.schema';
import { usersCreateOrConnectWithoutActivity_logsInputObjectSchema as usersCreateOrConnectWithoutActivity_logsInputObjectSchema } from './usersCreateOrConnectWithoutActivity_logsInput.schema';
import { usersUpsertWithoutActivity_logsInputObjectSchema as usersUpsertWithoutActivity_logsInputObjectSchema } from './usersUpsertWithoutActivity_logsInput.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateToOneWithWhereWithoutActivity_logsInputObjectSchema as usersUpdateToOneWithWhereWithoutActivity_logsInputObjectSchema } from './usersUpdateToOneWithWhereWithoutActivity_logsInput.schema';
import { usersUpdateWithoutActivity_logsInputObjectSchema as usersUpdateWithoutActivity_logsInputObjectSchema } from './usersUpdateWithoutActivity_logsInput.schema';
import { usersUncheckedUpdateWithoutActivity_logsInputObjectSchema as usersUncheckedUpdateWithoutActivity_logsInputObjectSchema } from './usersUncheckedUpdateWithoutActivity_logsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => usersCreateWithoutActivity_logsInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutActivity_logsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutActivity_logsInputObjectSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutActivity_logsInputObjectSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => usersUpdateToOneWithWhereWithoutActivity_logsInputObjectSchema), z.lazy(() => usersUpdateWithoutActivity_logsInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutActivity_logsInputObjectSchema)]).optional()
}).strict();
export const usersUpdateOneRequiredWithoutActivity_logsNestedInputObjectSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutActivity_logsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateOneRequiredWithoutActivity_logsNestedInput>;
export const usersUpdateOneRequiredWithoutActivity_logsNestedInputObjectZodSchema = makeSchema();
