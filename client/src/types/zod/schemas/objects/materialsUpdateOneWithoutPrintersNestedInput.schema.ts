import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { materialsCreateWithoutPrintersInputObjectSchema as materialsCreateWithoutPrintersInputObjectSchema } from './materialsCreateWithoutPrintersInput.schema';
import { materialsUncheckedCreateWithoutPrintersInputObjectSchema as materialsUncheckedCreateWithoutPrintersInputObjectSchema } from './materialsUncheckedCreateWithoutPrintersInput.schema';
import { materialsCreateOrConnectWithoutPrintersInputObjectSchema as materialsCreateOrConnectWithoutPrintersInputObjectSchema } from './materialsCreateOrConnectWithoutPrintersInput.schema';
import { materialsUpsertWithoutPrintersInputObjectSchema as materialsUpsertWithoutPrintersInputObjectSchema } from './materialsUpsertWithoutPrintersInput.schema';
import { materialsWhereInputObjectSchema as materialsWhereInputObjectSchema } from './materialsWhereInput.schema';
import { materialsWhereUniqueInputObjectSchema as materialsWhereUniqueInputObjectSchema } from './materialsWhereUniqueInput.schema';
import { materialsUpdateToOneWithWhereWithoutPrintersInputObjectSchema as materialsUpdateToOneWithWhereWithoutPrintersInputObjectSchema } from './materialsUpdateToOneWithWhereWithoutPrintersInput.schema';
import { materialsUpdateWithoutPrintersInputObjectSchema as materialsUpdateWithoutPrintersInputObjectSchema } from './materialsUpdateWithoutPrintersInput.schema';
import { materialsUncheckedUpdateWithoutPrintersInputObjectSchema as materialsUncheckedUpdateWithoutPrintersInputObjectSchema } from './materialsUncheckedUpdateWithoutPrintersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => materialsCreateWithoutPrintersInputObjectSchema), z.lazy(() => materialsUncheckedCreateWithoutPrintersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => materialsCreateOrConnectWithoutPrintersInputObjectSchema).optional(),
  upsert: z.lazy(() => materialsUpsertWithoutPrintersInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => materialsWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => materialsWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => materialsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => materialsUpdateToOneWithWhereWithoutPrintersInputObjectSchema), z.lazy(() => materialsUpdateWithoutPrintersInputObjectSchema), z.lazy(() => materialsUncheckedUpdateWithoutPrintersInputObjectSchema)]).optional()
}).strict();
export const materialsUpdateOneWithoutPrintersNestedInputObjectSchema: z.ZodType<Prisma.materialsUpdateOneWithoutPrintersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.materialsUpdateOneWithoutPrintersNestedInput>;
export const materialsUpdateOneWithoutPrintersNestedInputObjectZodSchema = makeSchema();
