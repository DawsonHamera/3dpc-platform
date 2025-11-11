import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendancesWhereUniqueInputObjectSchema as attendancesWhereUniqueInputObjectSchema } from './attendancesWhereUniqueInput.schema';
import { attendancesUpdateWithoutUserInputObjectSchema as attendancesUpdateWithoutUserInputObjectSchema } from './attendancesUpdateWithoutUserInput.schema';
import { attendancesUncheckedUpdateWithoutUserInputObjectSchema as attendancesUncheckedUpdateWithoutUserInputObjectSchema } from './attendancesUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => attendancesWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => attendancesUpdateWithoutUserInputObjectSchema), z.lazy(() => attendancesUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const attendancesUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.attendancesUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.attendancesUpdateWithWhereUniqueWithoutUserInput>;
export const attendancesUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
