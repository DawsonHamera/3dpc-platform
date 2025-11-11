import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { materialsWhereUniqueInputObjectSchema as materialsWhereUniqueInputObjectSchema } from './materialsWhereUniqueInput.schema';
import { materialsCreateWithoutPrintersInputObjectSchema as materialsCreateWithoutPrintersInputObjectSchema } from './materialsCreateWithoutPrintersInput.schema';
import { materialsUncheckedCreateWithoutPrintersInputObjectSchema as materialsUncheckedCreateWithoutPrintersInputObjectSchema } from './materialsUncheckedCreateWithoutPrintersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => materialsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => materialsCreateWithoutPrintersInputObjectSchema), z.lazy(() => materialsUncheckedCreateWithoutPrintersInputObjectSchema)])
}).strict();
export const materialsCreateOrConnectWithoutPrintersInputObjectSchema: z.ZodType<Prisma.materialsCreateOrConnectWithoutPrintersInput> = makeSchema() as unknown as z.ZodType<Prisma.materialsCreateOrConnectWithoutPrintersInput>;
export const materialsCreateOrConnectWithoutPrintersInputObjectZodSchema = makeSchema();
