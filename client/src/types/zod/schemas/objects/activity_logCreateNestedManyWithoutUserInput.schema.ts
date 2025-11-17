import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { activity_logCreateWithoutUserInputObjectSchema as activity_logCreateWithoutUserInputObjectSchema } from './activity_logCreateWithoutUserInput.schema';
import { activity_logUncheckedCreateWithoutUserInputObjectSchema as activity_logUncheckedCreateWithoutUserInputObjectSchema } from './activity_logUncheckedCreateWithoutUserInput.schema';
import { activity_logCreateOrConnectWithoutUserInputObjectSchema as activity_logCreateOrConnectWithoutUserInputObjectSchema } from './activity_logCreateOrConnectWithoutUserInput.schema';
import { activity_logCreateManyUserInputEnvelopeObjectSchema as activity_logCreateManyUserInputEnvelopeObjectSchema } from './activity_logCreateManyUserInputEnvelope.schema';
import { activity_logWhereUniqueInputObjectSchema as activity_logWhereUniqueInputObjectSchema } from './activity_logWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => activity_logCreateWithoutUserInputObjectSchema), z.lazy(() => activity_logCreateWithoutUserInputObjectSchema).array(), z.lazy(() => activity_logUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => activity_logUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => activity_logCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => activity_logCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => activity_logCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => activity_logWhereUniqueInputObjectSchema), z.lazy(() => activity_logWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const activity_logCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.activity_logCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logCreateNestedManyWithoutUserInput>;
export const activity_logCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
