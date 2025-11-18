import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { point_logCreateWithoutUserInputObjectSchema as point_logCreateWithoutUserInputObjectSchema } from './point_logCreateWithoutUserInput.schema';
import { point_logUncheckedCreateWithoutUserInputObjectSchema as point_logUncheckedCreateWithoutUserInputObjectSchema } from './point_logUncheckedCreateWithoutUserInput.schema';
import { point_logCreateOrConnectWithoutUserInputObjectSchema as point_logCreateOrConnectWithoutUserInputObjectSchema } from './point_logCreateOrConnectWithoutUserInput.schema';
import { point_logCreateManyUserInputEnvelopeObjectSchema as point_logCreateManyUserInputEnvelopeObjectSchema } from './point_logCreateManyUserInputEnvelope.schema';
import { point_logWhereUniqueInputObjectSchema as point_logWhereUniqueInputObjectSchema } from './point_logWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => point_logCreateWithoutUserInputObjectSchema), z.lazy(() => point_logCreateWithoutUserInputObjectSchema).array(), z.lazy(() => point_logUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => point_logUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => point_logCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => point_logCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => point_logCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => point_logWhereUniqueInputObjectSchema), z.lazy(() => point_logWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const point_logCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.point_logCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logCreateNestedManyWithoutUserInput>;
export const point_logCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
