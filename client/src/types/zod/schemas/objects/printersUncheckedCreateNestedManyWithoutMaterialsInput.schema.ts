import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersCreateWithoutMaterialsInputObjectSchema as printersCreateWithoutMaterialsInputObjectSchema } from './printersCreateWithoutMaterialsInput.schema';
import { printersUncheckedCreateWithoutMaterialsInputObjectSchema as printersUncheckedCreateWithoutMaterialsInputObjectSchema } from './printersUncheckedCreateWithoutMaterialsInput.schema';
import { printersCreateOrConnectWithoutMaterialsInputObjectSchema as printersCreateOrConnectWithoutMaterialsInputObjectSchema } from './printersCreateOrConnectWithoutMaterialsInput.schema';
import { printersCreateManyMaterialsInputEnvelopeObjectSchema as printersCreateManyMaterialsInputEnvelopeObjectSchema } from './printersCreateManyMaterialsInputEnvelope.schema';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './printersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => printersCreateWithoutMaterialsInputObjectSchema), z.lazy(() => printersCreateWithoutMaterialsInputObjectSchema).array(), z.lazy(() => printersUncheckedCreateWithoutMaterialsInputObjectSchema), z.lazy(() => printersUncheckedCreateWithoutMaterialsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => printersCreateOrConnectWithoutMaterialsInputObjectSchema), z.lazy(() => printersCreateOrConnectWithoutMaterialsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => printersCreateManyMaterialsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => printersWhereUniqueInputObjectSchema), z.lazy(() => printersWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const printersUncheckedCreateNestedManyWithoutMaterialsInputObjectSchema: z.ZodType<Prisma.printersUncheckedCreateNestedManyWithoutMaterialsInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUncheckedCreateNestedManyWithoutMaterialsInput>;
export const printersUncheckedCreateNestedManyWithoutMaterialsInputObjectZodSchema = makeSchema();
