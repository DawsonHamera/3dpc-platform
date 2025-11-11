import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsCreateWithoutError_reportsInputObjectSchema as stepsCreateWithoutError_reportsInputObjectSchema } from './stepsCreateWithoutError_reportsInput.schema';
import { stepsUncheckedCreateWithoutError_reportsInputObjectSchema as stepsUncheckedCreateWithoutError_reportsInputObjectSchema } from './stepsUncheckedCreateWithoutError_reportsInput.schema';
import { stepsCreateOrConnectWithoutError_reportsInputObjectSchema as stepsCreateOrConnectWithoutError_reportsInputObjectSchema } from './stepsCreateOrConnectWithoutError_reportsInput.schema';
import { stepsUpsertWithoutError_reportsInputObjectSchema as stepsUpsertWithoutError_reportsInputObjectSchema } from './stepsUpsertWithoutError_reportsInput.schema';
import { stepsWhereInputObjectSchema as stepsWhereInputObjectSchema } from './stepsWhereInput.schema';
import { stepsWhereUniqueInputObjectSchema as stepsWhereUniqueInputObjectSchema } from './stepsWhereUniqueInput.schema';
import { stepsUpdateToOneWithWhereWithoutError_reportsInputObjectSchema as stepsUpdateToOneWithWhereWithoutError_reportsInputObjectSchema } from './stepsUpdateToOneWithWhereWithoutError_reportsInput.schema';
import { stepsUpdateWithoutError_reportsInputObjectSchema as stepsUpdateWithoutError_reportsInputObjectSchema } from './stepsUpdateWithoutError_reportsInput.schema';
import { stepsUncheckedUpdateWithoutError_reportsInputObjectSchema as stepsUncheckedUpdateWithoutError_reportsInputObjectSchema } from './stepsUncheckedUpdateWithoutError_reportsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => stepsCreateWithoutError_reportsInputObjectSchema), z.lazy(() => stepsUncheckedCreateWithoutError_reportsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => stepsCreateOrConnectWithoutError_reportsInputObjectSchema).optional(),
  upsert: z.lazy(() => stepsUpsertWithoutError_reportsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => stepsWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => stepsWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => stepsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => stepsUpdateToOneWithWhereWithoutError_reportsInputObjectSchema), z.lazy(() => stepsUpdateWithoutError_reportsInputObjectSchema), z.lazy(() => stepsUncheckedUpdateWithoutError_reportsInputObjectSchema)]).optional()
}).strict();
export const stepsUpdateOneWithoutError_reportsNestedInputObjectSchema: z.ZodType<Prisma.stepsUpdateOneWithoutError_reportsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsUpdateOneWithoutError_reportsNestedInput>;
export const stepsUpdateOneWithoutError_reportsNestedInputObjectZodSchema = makeSchema();
