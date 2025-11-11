import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateWithoutGradeInputObjectSchema as usersCreateWithoutGradeInputObjectSchema } from './usersCreateWithoutGradeInput.schema';
import { usersUncheckedCreateWithoutGradeInputObjectSchema as usersUncheckedCreateWithoutGradeInputObjectSchema } from './usersUncheckedCreateWithoutGradeInput.schema';
import { usersCreateOrConnectWithoutGradeInputObjectSchema as usersCreateOrConnectWithoutGradeInputObjectSchema } from './usersCreateOrConnectWithoutGradeInput.schema';
import { usersCreateManyGradeInputEnvelopeObjectSchema as usersCreateManyGradeInputEnvelopeObjectSchema } from './usersCreateManyGradeInputEnvelope.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => usersCreateWithoutGradeInputObjectSchema), z.lazy(() => usersCreateWithoutGradeInputObjectSchema).array(), z.lazy(() => usersUncheckedCreateWithoutGradeInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutGradeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => usersCreateOrConnectWithoutGradeInputObjectSchema), z.lazy(() => usersCreateOrConnectWithoutGradeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => usersCreateManyGradeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => usersWhereUniqueInputObjectSchema), z.lazy(() => usersWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const usersCreateNestedManyWithoutGradeInputObjectSchema: z.ZodType<Prisma.usersCreateNestedManyWithoutGradeInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateNestedManyWithoutGradeInput>;
export const usersCreateNestedManyWithoutGradeInputObjectZodSchema = makeSchema();
