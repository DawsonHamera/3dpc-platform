import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendanceScalarWhereInputObjectSchema as attendanceScalarWhereInputObjectSchema } from './attendanceScalarWhereInput.schema';
import { attendanceUpdateManyMutationInputObjectSchema as attendanceUpdateManyMutationInputObjectSchema } from './attendanceUpdateManyMutationInput.schema';
import { attendanceUncheckedUpdateManyWithoutEventInputObjectSchema as attendanceUncheckedUpdateManyWithoutEventInputObjectSchema } from './attendanceUncheckedUpdateManyWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => attendanceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => attendanceUpdateManyMutationInputObjectSchema), z.lazy(() => attendanceUncheckedUpdateManyWithoutEventInputObjectSchema)])
}).strict();
export const attendanceUpdateManyWithWhereWithoutEventInputObjectSchema: z.ZodType<Prisma.attendanceUpdateManyWithWhereWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceUpdateManyWithWhereWithoutEventInput>;
export const attendanceUpdateManyWithWhereWithoutEventInputObjectZodSchema = makeSchema();
