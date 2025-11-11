import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendancesScalarWhereInputObjectSchema as attendancesScalarWhereInputObjectSchema } from './attendancesScalarWhereInput.schema';
import { attendancesUpdateManyMutationInputObjectSchema as attendancesUpdateManyMutationInputObjectSchema } from './attendancesUpdateManyMutationInput.schema';
import { attendancesUncheckedUpdateManyWithoutUserInputObjectSchema as attendancesUncheckedUpdateManyWithoutUserInputObjectSchema } from './attendancesUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => attendancesScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => attendancesUpdateManyMutationInputObjectSchema), z.lazy(() => attendancesUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const attendancesUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.attendancesUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.attendancesUpdateManyWithWhereWithoutUserInput>;
export const attendancesUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
