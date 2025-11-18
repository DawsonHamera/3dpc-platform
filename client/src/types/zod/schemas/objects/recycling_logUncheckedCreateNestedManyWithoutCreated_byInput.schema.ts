import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { recycling_logCreateWithoutCreated_byInputObjectSchema as recycling_logCreateWithoutCreated_byInputObjectSchema } from './recycling_logCreateWithoutCreated_byInput.schema';
import { recycling_logUncheckedCreateWithoutCreated_byInputObjectSchema as recycling_logUncheckedCreateWithoutCreated_byInputObjectSchema } from './recycling_logUncheckedCreateWithoutCreated_byInput.schema';
import { recycling_logCreateOrConnectWithoutCreated_byInputObjectSchema as recycling_logCreateOrConnectWithoutCreated_byInputObjectSchema } from './recycling_logCreateOrConnectWithoutCreated_byInput.schema';
import { recycling_logCreateManyCreated_byInputEnvelopeObjectSchema as recycling_logCreateManyCreated_byInputEnvelopeObjectSchema } from './recycling_logCreateManyCreated_byInputEnvelope.schema';
import { recycling_logWhereUniqueInputObjectSchema as recycling_logWhereUniqueInputObjectSchema } from './recycling_logWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => recycling_logCreateWithoutCreated_byInputObjectSchema), z.lazy(() => recycling_logCreateWithoutCreated_byInputObjectSchema).array(), z.lazy(() => recycling_logUncheckedCreateWithoutCreated_byInputObjectSchema), z.lazy(() => recycling_logUncheckedCreateWithoutCreated_byInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => recycling_logCreateOrConnectWithoutCreated_byInputObjectSchema), z.lazy(() => recycling_logCreateOrConnectWithoutCreated_byInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => recycling_logCreateManyCreated_byInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => recycling_logWhereUniqueInputObjectSchema), z.lazy(() => recycling_logWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const recycling_logUncheckedCreateNestedManyWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.recycling_logUncheckedCreateNestedManyWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.recycling_logUncheckedCreateNestedManyWithoutCreated_byInput>;
export const recycling_logUncheckedCreateNestedManyWithoutCreated_byInputObjectZodSchema = makeSchema();
