import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateWithoutError_reportsInputObjectSchema as usersCreateWithoutError_reportsInputObjectSchema } from './usersCreateWithoutError_reportsInput.schema';
import { usersUncheckedCreateWithoutError_reportsInputObjectSchema as usersUncheckedCreateWithoutError_reportsInputObjectSchema } from './usersUncheckedCreateWithoutError_reportsInput.schema';
import { usersCreateOrConnectWithoutError_reportsInputObjectSchema as usersCreateOrConnectWithoutError_reportsInputObjectSchema } from './usersCreateOrConnectWithoutError_reportsInput.schema';
import { usersUpsertWithoutError_reportsInputObjectSchema as usersUpsertWithoutError_reportsInputObjectSchema } from './usersUpsertWithoutError_reportsInput.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateToOneWithWhereWithoutError_reportsInputObjectSchema as usersUpdateToOneWithWhereWithoutError_reportsInputObjectSchema } from './usersUpdateToOneWithWhereWithoutError_reportsInput.schema';
import { usersUpdateWithoutError_reportsInputObjectSchema as usersUpdateWithoutError_reportsInputObjectSchema } from './usersUpdateWithoutError_reportsInput.schema';
import { usersUncheckedUpdateWithoutError_reportsInputObjectSchema as usersUncheckedUpdateWithoutError_reportsInputObjectSchema } from './usersUncheckedUpdateWithoutError_reportsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => usersCreateWithoutError_reportsInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutError_reportsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutError_reportsInputObjectSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutError_reportsInputObjectSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => usersUpdateToOneWithWhereWithoutError_reportsInputObjectSchema), z.lazy(() => usersUpdateWithoutError_reportsInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutError_reportsInputObjectSchema)]).optional()
}).strict();
export const usersUpdateOneRequiredWithoutError_reportsNestedInputObjectSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutError_reportsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateOneRequiredWithoutError_reportsNestedInput>;
export const usersUpdateOneRequiredWithoutError_reportsNestedInputObjectZodSchema = makeSchema();
