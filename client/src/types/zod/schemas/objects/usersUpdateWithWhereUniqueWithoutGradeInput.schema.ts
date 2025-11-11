import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateWithoutGradeInputObjectSchema as usersUpdateWithoutGradeInputObjectSchema } from './usersUpdateWithoutGradeInput.schema';
import { usersUncheckedUpdateWithoutGradeInputObjectSchema as usersUncheckedUpdateWithoutGradeInputObjectSchema } from './usersUncheckedUpdateWithoutGradeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => usersUpdateWithoutGradeInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutGradeInputObjectSchema)])
}).strict();
export const usersUpdateWithWhereUniqueWithoutGradeInputObjectSchema: z.ZodType<Prisma.usersUpdateWithWhereUniqueWithoutGradeInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateWithWhereUniqueWithoutGradeInput>;
export const usersUpdateWithWhereUniqueWithoutGradeInputObjectZodSchema = makeSchema();
