import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendancesCreateWithoutEventInputObjectSchema as attendancesCreateWithoutEventInputObjectSchema } from './attendancesCreateWithoutEventInput.schema';
import { attendancesUncheckedCreateWithoutEventInputObjectSchema as attendancesUncheckedCreateWithoutEventInputObjectSchema } from './attendancesUncheckedCreateWithoutEventInput.schema';
import { attendancesCreateOrConnectWithoutEventInputObjectSchema as attendancesCreateOrConnectWithoutEventInputObjectSchema } from './attendancesCreateOrConnectWithoutEventInput.schema';
import { attendancesCreateManyEventInputEnvelopeObjectSchema as attendancesCreateManyEventInputEnvelopeObjectSchema } from './attendancesCreateManyEventInputEnvelope.schema';
import { attendancesWhereUniqueInputObjectSchema as attendancesWhereUniqueInputObjectSchema } from './attendancesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => attendancesCreateWithoutEventInputObjectSchema), z.lazy(() => attendancesCreateWithoutEventInputObjectSchema).array(), z.lazy(() => attendancesUncheckedCreateWithoutEventInputObjectSchema), z.lazy(() => attendancesUncheckedCreateWithoutEventInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => attendancesCreateOrConnectWithoutEventInputObjectSchema), z.lazy(() => attendancesCreateOrConnectWithoutEventInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => attendancesCreateManyEventInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => attendancesWhereUniqueInputObjectSchema), z.lazy(() => attendancesWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const attendancesCreateNestedManyWithoutEventInputObjectSchema: z.ZodType<Prisma.attendancesCreateNestedManyWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.attendancesCreateNestedManyWithoutEventInput>;
export const attendancesCreateNestedManyWithoutEventInputObjectZodSchema = makeSchema();
