import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendancesCreateWithoutUserInputObjectSchema as attendancesCreateWithoutUserInputObjectSchema } from './attendancesCreateWithoutUserInput.schema';
import { attendancesUncheckedCreateWithoutUserInputObjectSchema as attendancesUncheckedCreateWithoutUserInputObjectSchema } from './attendancesUncheckedCreateWithoutUserInput.schema';
import { attendancesCreateOrConnectWithoutUserInputObjectSchema as attendancesCreateOrConnectWithoutUserInputObjectSchema } from './attendancesCreateOrConnectWithoutUserInput.schema';
import { attendancesCreateManyUserInputEnvelopeObjectSchema as attendancesCreateManyUserInputEnvelopeObjectSchema } from './attendancesCreateManyUserInputEnvelope.schema';
import { attendancesWhereUniqueInputObjectSchema as attendancesWhereUniqueInputObjectSchema } from './attendancesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => attendancesCreateWithoutUserInputObjectSchema), z.lazy(() => attendancesCreateWithoutUserInputObjectSchema).array(), z.lazy(() => attendancesUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => attendancesUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => attendancesCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => attendancesCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => attendancesCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => attendancesWhereUniqueInputObjectSchema), z.lazy(() => attendancesWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const attendancesUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.attendancesUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.attendancesUncheckedCreateNestedManyWithoutUserInput>;
export const attendancesUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
