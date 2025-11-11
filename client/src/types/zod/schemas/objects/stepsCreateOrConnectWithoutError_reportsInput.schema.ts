import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsWhereUniqueInputObjectSchema as stepsWhereUniqueInputObjectSchema } from './stepsWhereUniqueInput.schema';
import { stepsCreateWithoutError_reportsInputObjectSchema as stepsCreateWithoutError_reportsInputObjectSchema } from './stepsCreateWithoutError_reportsInput.schema';
import { stepsUncheckedCreateWithoutError_reportsInputObjectSchema as stepsUncheckedCreateWithoutError_reportsInputObjectSchema } from './stepsUncheckedCreateWithoutError_reportsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => stepsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => stepsCreateWithoutError_reportsInputObjectSchema), z.lazy(() => stepsUncheckedCreateWithoutError_reportsInputObjectSchema)])
}).strict();
export const stepsCreateOrConnectWithoutError_reportsInputObjectSchema: z.ZodType<Prisma.stepsCreateOrConnectWithoutError_reportsInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsCreateOrConnectWithoutError_reportsInput>;
export const stepsCreateOrConnectWithoutError_reportsInputObjectZodSchema = makeSchema();
