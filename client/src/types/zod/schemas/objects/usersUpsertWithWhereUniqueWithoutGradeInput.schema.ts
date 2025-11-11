import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateWithoutGradeInputObjectSchema as usersUpdateWithoutGradeInputObjectSchema } from './usersUpdateWithoutGradeInput.schema';
import { usersUncheckedUpdateWithoutGradeInputObjectSchema as usersUncheckedUpdateWithoutGradeInputObjectSchema } from './usersUncheckedUpdateWithoutGradeInput.schema';
import { usersCreateWithoutGradeInputObjectSchema as usersCreateWithoutGradeInputObjectSchema } from './usersCreateWithoutGradeInput.schema';
import { usersUncheckedCreateWithoutGradeInputObjectSchema as usersUncheckedCreateWithoutGradeInputObjectSchema } from './usersUncheckedCreateWithoutGradeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => usersUpdateWithoutGradeInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutGradeInputObjectSchema)]),
  create: z.union([z.lazy(() => usersCreateWithoutGradeInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutGradeInputObjectSchema)])
}).strict();
export const usersUpsertWithWhereUniqueWithoutGradeInputObjectSchema: z.ZodType<Prisma.usersUpsertWithWhereUniqueWithoutGradeInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpsertWithWhereUniqueWithoutGradeInput>;
export const usersUpsertWithWhereUniqueWithoutGradeInputObjectZodSchema = makeSchema();
