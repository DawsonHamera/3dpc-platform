import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendancesWhereUniqueInputObjectSchema as attendancesWhereUniqueInputObjectSchema } from './attendancesWhereUniqueInput.schema';
import { attendancesUpdateWithoutUserInputObjectSchema as attendancesUpdateWithoutUserInputObjectSchema } from './attendancesUpdateWithoutUserInput.schema';
import { attendancesUncheckedUpdateWithoutUserInputObjectSchema as attendancesUncheckedUpdateWithoutUserInputObjectSchema } from './attendancesUncheckedUpdateWithoutUserInput.schema';
import { attendancesCreateWithoutUserInputObjectSchema as attendancesCreateWithoutUserInputObjectSchema } from './attendancesCreateWithoutUserInput.schema';
import { attendancesUncheckedCreateWithoutUserInputObjectSchema as attendancesUncheckedCreateWithoutUserInputObjectSchema } from './attendancesUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => attendancesWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => attendancesUpdateWithoutUserInputObjectSchema), z.lazy(() => attendancesUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => attendancesCreateWithoutUserInputObjectSchema), z.lazy(() => attendancesUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const attendancesUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.attendancesUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.attendancesUpsertWithWhereUniqueWithoutUserInput>;
export const attendancesUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
