import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { materialsUpdateWithoutPrintersInputObjectSchema as materialsUpdateWithoutPrintersInputObjectSchema } from './materialsUpdateWithoutPrintersInput.schema';
import { materialsUncheckedUpdateWithoutPrintersInputObjectSchema as materialsUncheckedUpdateWithoutPrintersInputObjectSchema } from './materialsUncheckedUpdateWithoutPrintersInput.schema';
import { materialsCreateWithoutPrintersInputObjectSchema as materialsCreateWithoutPrintersInputObjectSchema } from './materialsCreateWithoutPrintersInput.schema';
import { materialsUncheckedCreateWithoutPrintersInputObjectSchema as materialsUncheckedCreateWithoutPrintersInputObjectSchema } from './materialsUncheckedCreateWithoutPrintersInput.schema';
import { materialsWhereInputObjectSchema as materialsWhereInputObjectSchema } from './materialsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => materialsUpdateWithoutPrintersInputObjectSchema), z.lazy(() => materialsUncheckedUpdateWithoutPrintersInputObjectSchema)]),
  create: z.union([z.lazy(() => materialsCreateWithoutPrintersInputObjectSchema), z.lazy(() => materialsUncheckedCreateWithoutPrintersInputObjectSchema)]),
  where: z.lazy(() => materialsWhereInputObjectSchema).optional()
}).strict();
export const materialsUpsertWithoutPrintersInputObjectSchema: z.ZodType<Prisma.materialsUpsertWithoutPrintersInput> = makeSchema() as unknown as z.ZodType<Prisma.materialsUpsertWithoutPrintersInput>;
export const materialsUpsertWithoutPrintersInputObjectZodSchema = makeSchema();
