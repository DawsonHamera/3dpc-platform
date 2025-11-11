import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutGradeInputObjectSchema as usersCreateWithoutGradeInputObjectSchema } from './usersCreateWithoutGradeInput.schema';
import { usersUncheckedCreateWithoutGradeInputObjectSchema as usersUncheckedCreateWithoutGradeInputObjectSchema } from './usersUncheckedCreateWithoutGradeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => usersCreateWithoutGradeInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutGradeInputObjectSchema)])
}).strict();
export const usersCreateOrConnectWithoutGradeInputObjectSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutGradeInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateOrConnectWithoutGradeInput>;
export const usersCreateOrConnectWithoutGradeInputObjectZodSchema = makeSchema();
