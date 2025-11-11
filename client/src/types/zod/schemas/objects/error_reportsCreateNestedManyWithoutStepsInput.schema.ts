import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsCreateWithoutStepsInputObjectSchema as error_reportsCreateWithoutStepsInputObjectSchema } from './error_reportsCreateWithoutStepsInput.schema';
import { error_reportsUncheckedCreateWithoutStepsInputObjectSchema as error_reportsUncheckedCreateWithoutStepsInputObjectSchema } from './error_reportsUncheckedCreateWithoutStepsInput.schema';
import { error_reportsCreateOrConnectWithoutStepsInputObjectSchema as error_reportsCreateOrConnectWithoutStepsInputObjectSchema } from './error_reportsCreateOrConnectWithoutStepsInput.schema';
import { error_reportsCreateManyStepsInputEnvelopeObjectSchema as error_reportsCreateManyStepsInputEnvelopeObjectSchema } from './error_reportsCreateManyStepsInputEnvelope.schema';
import { error_reportsWhereUniqueInputObjectSchema as error_reportsWhereUniqueInputObjectSchema } from './error_reportsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => error_reportsCreateWithoutStepsInputObjectSchema), z.lazy(() => error_reportsCreateWithoutStepsInputObjectSchema).array(), z.lazy(() => error_reportsUncheckedCreateWithoutStepsInputObjectSchema), z.lazy(() => error_reportsUncheckedCreateWithoutStepsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => error_reportsCreateOrConnectWithoutStepsInputObjectSchema), z.lazy(() => error_reportsCreateOrConnectWithoutStepsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => error_reportsCreateManyStepsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => error_reportsWhereUniqueInputObjectSchema), z.lazy(() => error_reportsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const error_reportsCreateNestedManyWithoutStepsInputObjectSchema: z.ZodType<Prisma.error_reportsCreateNestedManyWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsCreateNestedManyWithoutStepsInput>;
export const error_reportsCreateNestedManyWithoutStepsInputObjectZodSchema = makeSchema();
