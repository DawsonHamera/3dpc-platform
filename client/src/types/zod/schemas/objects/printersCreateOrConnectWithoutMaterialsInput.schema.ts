import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './printersWhereUniqueInput.schema';
import { printersCreateWithoutMaterialsInputObjectSchema as printersCreateWithoutMaterialsInputObjectSchema } from './printersCreateWithoutMaterialsInput.schema';
import { printersUncheckedCreateWithoutMaterialsInputObjectSchema as printersUncheckedCreateWithoutMaterialsInputObjectSchema } from './printersUncheckedCreateWithoutMaterialsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => printersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => printersCreateWithoutMaterialsInputObjectSchema), z.lazy(() => printersUncheckedCreateWithoutMaterialsInputObjectSchema)])
}).strict();
export const printersCreateOrConnectWithoutMaterialsInputObjectSchema: z.ZodType<Prisma.printersCreateOrConnectWithoutMaterialsInput> = makeSchema() as unknown as z.ZodType<Prisma.printersCreateOrConnectWithoutMaterialsInput>;
export const printersCreateOrConnectWithoutMaterialsInputObjectZodSchema = makeSchema();
