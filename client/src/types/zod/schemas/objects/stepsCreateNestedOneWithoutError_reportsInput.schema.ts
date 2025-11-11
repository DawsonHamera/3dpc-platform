import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsCreateWithoutError_reportsInputObjectSchema as stepsCreateWithoutError_reportsInputObjectSchema } from './stepsCreateWithoutError_reportsInput.schema';
import { stepsUncheckedCreateWithoutError_reportsInputObjectSchema as stepsUncheckedCreateWithoutError_reportsInputObjectSchema } from './stepsUncheckedCreateWithoutError_reportsInput.schema';
import { stepsCreateOrConnectWithoutError_reportsInputObjectSchema as stepsCreateOrConnectWithoutError_reportsInputObjectSchema } from './stepsCreateOrConnectWithoutError_reportsInput.schema';
import { stepsWhereUniqueInputObjectSchema as stepsWhereUniqueInputObjectSchema } from './stepsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => stepsCreateWithoutError_reportsInputObjectSchema), z.lazy(() => stepsUncheckedCreateWithoutError_reportsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => stepsCreateOrConnectWithoutError_reportsInputObjectSchema).optional(),
  connect: z.lazy(() => stepsWhereUniqueInputObjectSchema).optional()
}).strict();
export const stepsCreateNestedOneWithoutError_reportsInputObjectSchema: z.ZodType<Prisma.stepsCreateNestedOneWithoutError_reportsInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsCreateNestedOneWithoutError_reportsInput>;
export const stepsCreateNestedOneWithoutError_reportsInputObjectZodSchema = makeSchema();
