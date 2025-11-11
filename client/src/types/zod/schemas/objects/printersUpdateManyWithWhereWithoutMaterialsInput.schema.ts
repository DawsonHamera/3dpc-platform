import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersScalarWhereInputObjectSchema as printersScalarWhereInputObjectSchema } from './printersScalarWhereInput.schema';
import { printersUpdateManyMutationInputObjectSchema as printersUpdateManyMutationInputObjectSchema } from './printersUpdateManyMutationInput.schema';
import { printersUncheckedUpdateManyWithoutMaterialsInputObjectSchema as printersUncheckedUpdateManyWithoutMaterialsInputObjectSchema } from './printersUncheckedUpdateManyWithoutMaterialsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => printersScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => printersUpdateManyMutationInputObjectSchema), z.lazy(() => printersUncheckedUpdateManyWithoutMaterialsInputObjectSchema)])
}).strict();
export const printersUpdateManyWithWhereWithoutMaterialsInputObjectSchema: z.ZodType<Prisma.printersUpdateManyWithWhereWithoutMaterialsInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUpdateManyWithWhereWithoutMaterialsInput>;
export const printersUpdateManyWithWhereWithoutMaterialsInputObjectZodSchema = makeSchema();
