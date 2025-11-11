import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './printersWhereUniqueInput.schema';
import { printersUpdateWithoutMaterialsInputObjectSchema as printersUpdateWithoutMaterialsInputObjectSchema } from './printersUpdateWithoutMaterialsInput.schema';
import { printersUncheckedUpdateWithoutMaterialsInputObjectSchema as printersUncheckedUpdateWithoutMaterialsInputObjectSchema } from './printersUncheckedUpdateWithoutMaterialsInput.schema';
import { printersCreateWithoutMaterialsInputObjectSchema as printersCreateWithoutMaterialsInputObjectSchema } from './printersCreateWithoutMaterialsInput.schema';
import { printersUncheckedCreateWithoutMaterialsInputObjectSchema as printersUncheckedCreateWithoutMaterialsInputObjectSchema } from './printersUncheckedCreateWithoutMaterialsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => printersWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => printersUpdateWithoutMaterialsInputObjectSchema), z.lazy(() => printersUncheckedUpdateWithoutMaterialsInputObjectSchema)]),
  create: z.union([z.lazy(() => printersCreateWithoutMaterialsInputObjectSchema), z.lazy(() => printersUncheckedCreateWithoutMaterialsInputObjectSchema)])
}).strict();
export const printersUpsertWithWhereUniqueWithoutMaterialsInputObjectSchema: z.ZodType<Prisma.printersUpsertWithWhereUniqueWithoutMaterialsInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUpsertWithWhereUniqueWithoutMaterialsInput>;
export const printersUpsertWithWhereUniqueWithoutMaterialsInputObjectZodSchema = makeSchema();
