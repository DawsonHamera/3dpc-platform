import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { materialsWhereInputObjectSchema as materialsWhereInputObjectSchema } from './materialsWhereInput.schema';
import { materialsUpdateWithoutPrintersInputObjectSchema as materialsUpdateWithoutPrintersInputObjectSchema } from './materialsUpdateWithoutPrintersInput.schema';
import { materialsUncheckedUpdateWithoutPrintersInputObjectSchema as materialsUncheckedUpdateWithoutPrintersInputObjectSchema } from './materialsUncheckedUpdateWithoutPrintersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => materialsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => materialsUpdateWithoutPrintersInputObjectSchema), z.lazy(() => materialsUncheckedUpdateWithoutPrintersInputObjectSchema)])
}).strict();
export const materialsUpdateToOneWithWhereWithoutPrintersInputObjectSchema: z.ZodType<Prisma.materialsUpdateToOneWithWhereWithoutPrintersInput> = makeSchema() as unknown as z.ZodType<Prisma.materialsUpdateToOneWithWhereWithoutPrintersInput>;
export const materialsUpdateToOneWithWhereWithoutPrintersInputObjectZodSchema = makeSchema();
