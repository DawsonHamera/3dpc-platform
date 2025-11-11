import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersScalarWhereInputObjectSchema as usersScalarWhereInputObjectSchema } from './usersScalarWhereInput.schema';
import { usersUpdateManyMutationInputObjectSchema as usersUpdateManyMutationInputObjectSchema } from './usersUpdateManyMutationInput.schema';
import { usersUncheckedUpdateManyWithoutGradeInputObjectSchema as usersUncheckedUpdateManyWithoutGradeInputObjectSchema } from './usersUncheckedUpdateManyWithoutGradeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => usersUpdateManyMutationInputObjectSchema), z.lazy(() => usersUncheckedUpdateManyWithoutGradeInputObjectSchema)])
}).strict();
export const usersUpdateManyWithWhereWithoutGradeInputObjectSchema: z.ZodType<Prisma.usersUpdateManyWithWhereWithoutGradeInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateManyWithWhereWithoutGradeInput>;
export const usersUpdateManyWithWhereWithoutGradeInputObjectZodSchema = makeSchema();
