import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { materialsCreateWithoutPrintersInputObjectSchema as materialsCreateWithoutPrintersInputObjectSchema } from './materialsCreateWithoutPrintersInput.schema';
import { materialsUncheckedCreateWithoutPrintersInputObjectSchema as materialsUncheckedCreateWithoutPrintersInputObjectSchema } from './materialsUncheckedCreateWithoutPrintersInput.schema';
import { materialsCreateOrConnectWithoutPrintersInputObjectSchema as materialsCreateOrConnectWithoutPrintersInputObjectSchema } from './materialsCreateOrConnectWithoutPrintersInput.schema';
import { materialsWhereUniqueInputObjectSchema as materialsWhereUniqueInputObjectSchema } from './materialsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => materialsCreateWithoutPrintersInputObjectSchema), z.lazy(() => materialsUncheckedCreateWithoutPrintersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => materialsCreateOrConnectWithoutPrintersInputObjectSchema).optional(),
  connect: z.lazy(() => materialsWhereUniqueInputObjectSchema).optional()
}).strict();
export const materialsCreateNestedOneWithoutPrintersInputObjectSchema: z.ZodType<Prisma.materialsCreateNestedOneWithoutPrintersInput> = makeSchema() as unknown as z.ZodType<Prisma.materialsCreateNestedOneWithoutPrintersInput>;
export const materialsCreateNestedOneWithoutPrintersInputObjectZodSchema = makeSchema();
