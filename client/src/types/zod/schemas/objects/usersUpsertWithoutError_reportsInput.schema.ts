import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersUpdateWithoutError_reportsInputObjectSchema as usersUpdateWithoutError_reportsInputObjectSchema } from './usersUpdateWithoutError_reportsInput.schema';
import { usersUncheckedUpdateWithoutError_reportsInputObjectSchema as usersUncheckedUpdateWithoutError_reportsInputObjectSchema } from './usersUncheckedUpdateWithoutError_reportsInput.schema';
import { usersCreateWithoutError_reportsInputObjectSchema as usersCreateWithoutError_reportsInputObjectSchema } from './usersCreateWithoutError_reportsInput.schema';
import { usersUncheckedCreateWithoutError_reportsInputObjectSchema as usersUncheckedCreateWithoutError_reportsInputObjectSchema } from './usersUncheckedCreateWithoutError_reportsInput.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => usersUpdateWithoutError_reportsInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutError_reportsInputObjectSchema)]),
  create: z.union([z.lazy(() => usersCreateWithoutError_reportsInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutError_reportsInputObjectSchema)]),
  where: z.lazy(() => usersWhereInputObjectSchema).optional()
}).strict();
export const usersUpsertWithoutError_reportsInputObjectSchema: z.ZodType<Prisma.usersUpsertWithoutError_reportsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpsertWithoutError_reportsInput>;
export const usersUpsertWithoutError_reportsInputObjectZodSchema = makeSchema();
