import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendancesScalarWhereInputObjectSchema as attendancesScalarWhereInputObjectSchema } from './attendancesScalarWhereInput.schema';
import { attendancesUpdateManyMutationInputObjectSchema as attendancesUpdateManyMutationInputObjectSchema } from './attendancesUpdateManyMutationInput.schema';
import { attendancesUncheckedUpdateManyWithoutEventInputObjectSchema as attendancesUncheckedUpdateManyWithoutEventInputObjectSchema } from './attendancesUncheckedUpdateManyWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => attendancesScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => attendancesUpdateManyMutationInputObjectSchema), z.lazy(() => attendancesUncheckedUpdateManyWithoutEventInputObjectSchema)])
}).strict();
export const attendancesUpdateManyWithWhereWithoutEventInputObjectSchema: z.ZodType<Prisma.attendancesUpdateManyWithWhereWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.attendancesUpdateManyWithWhereWithoutEventInput>;
export const attendancesUpdateManyWithWhereWithoutEventInputObjectZodSchema = makeSchema();
