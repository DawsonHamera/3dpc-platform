import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { activity_logsCreateWithoutUserInputObjectSchema as activity_logsCreateWithoutUserInputObjectSchema } from './activity_logsCreateWithoutUserInput.schema';
import { activity_logsUncheckedCreateWithoutUserInputObjectSchema as activity_logsUncheckedCreateWithoutUserInputObjectSchema } from './activity_logsUncheckedCreateWithoutUserInput.schema';
import { activity_logsCreateOrConnectWithoutUserInputObjectSchema as activity_logsCreateOrConnectWithoutUserInputObjectSchema } from './activity_logsCreateOrConnectWithoutUserInput.schema';
import { activity_logsCreateManyUserInputEnvelopeObjectSchema as activity_logsCreateManyUserInputEnvelopeObjectSchema } from './activity_logsCreateManyUserInputEnvelope.schema';
import { activity_logsWhereUniqueInputObjectSchema as activity_logsWhereUniqueInputObjectSchema } from './activity_logsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => activity_logsCreateWithoutUserInputObjectSchema), z.lazy(() => activity_logsCreateWithoutUserInputObjectSchema).array(), z.lazy(() => activity_logsUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => activity_logsUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => activity_logsCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => activity_logsCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => activity_logsCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => activity_logsWhereUniqueInputObjectSchema), z.lazy(() => activity_logsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const activity_logsUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.activity_logsUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logsUncheckedCreateNestedManyWithoutUserInput>;
export const activity_logsUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
