import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendancesWhereUniqueInputObjectSchema as attendancesWhereUniqueInputObjectSchema } from './attendancesWhereUniqueInput.schema';
import { attendancesUpdateWithoutEventInputObjectSchema as attendancesUpdateWithoutEventInputObjectSchema } from './attendancesUpdateWithoutEventInput.schema';
import { attendancesUncheckedUpdateWithoutEventInputObjectSchema as attendancesUncheckedUpdateWithoutEventInputObjectSchema } from './attendancesUncheckedUpdateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => attendancesWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => attendancesUpdateWithoutEventInputObjectSchema), z.lazy(() => attendancesUncheckedUpdateWithoutEventInputObjectSchema)])
}).strict();
export const attendancesUpdateWithWhereUniqueWithoutEventInputObjectSchema: z.ZodType<Prisma.attendancesUpdateWithWhereUniqueWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.attendancesUpdateWithWhereUniqueWithoutEventInput>;
export const attendancesUpdateWithWhereUniqueWithoutEventInputObjectZodSchema = makeSchema();
