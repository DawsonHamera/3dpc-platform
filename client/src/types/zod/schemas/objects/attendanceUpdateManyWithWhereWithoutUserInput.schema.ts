import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendanceScalarWhereInputObjectSchema as attendanceScalarWhereInputObjectSchema } from './attendanceScalarWhereInput.schema';
import { attendanceUpdateManyMutationInputObjectSchema as attendanceUpdateManyMutationInputObjectSchema } from './attendanceUpdateManyMutationInput.schema';
import { attendanceUncheckedUpdateManyWithoutUserInputObjectSchema as attendanceUncheckedUpdateManyWithoutUserInputObjectSchema } from './attendanceUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => attendanceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => attendanceUpdateManyMutationInputObjectSchema), z.lazy(() => attendanceUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const attendanceUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.attendanceUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceUpdateManyWithWhereWithoutUserInput>;
export const attendanceUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
