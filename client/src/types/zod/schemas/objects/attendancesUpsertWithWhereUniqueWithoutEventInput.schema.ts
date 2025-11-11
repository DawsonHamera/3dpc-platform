import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendancesWhereUniqueInputObjectSchema as attendancesWhereUniqueInputObjectSchema } from './attendancesWhereUniqueInput.schema';
import { attendancesUpdateWithoutEventInputObjectSchema as attendancesUpdateWithoutEventInputObjectSchema } from './attendancesUpdateWithoutEventInput.schema';
import { attendancesUncheckedUpdateWithoutEventInputObjectSchema as attendancesUncheckedUpdateWithoutEventInputObjectSchema } from './attendancesUncheckedUpdateWithoutEventInput.schema';
import { attendancesCreateWithoutEventInputObjectSchema as attendancesCreateWithoutEventInputObjectSchema } from './attendancesCreateWithoutEventInput.schema';
import { attendancesUncheckedCreateWithoutEventInputObjectSchema as attendancesUncheckedCreateWithoutEventInputObjectSchema } from './attendancesUncheckedCreateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => attendancesWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => attendancesUpdateWithoutEventInputObjectSchema), z.lazy(() => attendancesUncheckedUpdateWithoutEventInputObjectSchema)]),
  create: z.union([z.lazy(() => attendancesCreateWithoutEventInputObjectSchema), z.lazy(() => attendancesUncheckedCreateWithoutEventInputObjectSchema)])
}).strict();
export const attendancesUpsertWithWhereUniqueWithoutEventInputObjectSchema: z.ZodType<Prisma.attendancesUpsertWithWhereUniqueWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.attendancesUpsertWithWhereUniqueWithoutEventInput>;
export const attendancesUpsertWithWhereUniqueWithoutEventInputObjectZodSchema = makeSchema();
