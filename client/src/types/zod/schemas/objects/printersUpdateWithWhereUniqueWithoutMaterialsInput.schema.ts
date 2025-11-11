import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './printersWhereUniqueInput.schema';
import { printersUpdateWithoutMaterialsInputObjectSchema as printersUpdateWithoutMaterialsInputObjectSchema } from './printersUpdateWithoutMaterialsInput.schema';
import { printersUncheckedUpdateWithoutMaterialsInputObjectSchema as printersUncheckedUpdateWithoutMaterialsInputObjectSchema } from './printersUncheckedUpdateWithoutMaterialsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => printersWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => printersUpdateWithoutMaterialsInputObjectSchema), z.lazy(() => printersUncheckedUpdateWithoutMaterialsInputObjectSchema)])
}).strict();
export const printersUpdateWithWhereUniqueWithoutMaterialsInputObjectSchema: z.ZodType<Prisma.printersUpdateWithWhereUniqueWithoutMaterialsInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUpdateWithWhereUniqueWithoutMaterialsInput>;
export const printersUpdateWithWhereUniqueWithoutMaterialsInputObjectZodSchema = makeSchema();
