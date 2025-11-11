import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendancesWhereUniqueInputObjectSchema as attendancesWhereUniqueInputObjectSchema } from './attendancesWhereUniqueInput.schema';
import { attendancesCreateWithoutUserInputObjectSchema as attendancesCreateWithoutUserInputObjectSchema } from './attendancesCreateWithoutUserInput.schema';
import { attendancesUncheckedCreateWithoutUserInputObjectSchema as attendancesUncheckedCreateWithoutUserInputObjectSchema } from './attendancesUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => attendancesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => attendancesCreateWithoutUserInputObjectSchema), z.lazy(() => attendancesUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const attendancesCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.attendancesCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.attendancesCreateOrConnectWithoutUserInput>;
export const attendancesCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
