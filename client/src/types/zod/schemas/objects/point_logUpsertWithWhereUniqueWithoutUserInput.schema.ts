import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { point_logWhereUniqueInputObjectSchema as point_logWhereUniqueInputObjectSchema } from './point_logWhereUniqueInput.schema';
import { point_logUpdateWithoutUserInputObjectSchema as point_logUpdateWithoutUserInputObjectSchema } from './point_logUpdateWithoutUserInput.schema';
import { point_logUncheckedUpdateWithoutUserInputObjectSchema as point_logUncheckedUpdateWithoutUserInputObjectSchema } from './point_logUncheckedUpdateWithoutUserInput.schema';
import { point_logCreateWithoutUserInputObjectSchema as point_logCreateWithoutUserInputObjectSchema } from './point_logCreateWithoutUserInput.schema';
import { point_logUncheckedCreateWithoutUserInputObjectSchema as point_logUncheckedCreateWithoutUserInputObjectSchema } from './point_logUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => point_logWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => point_logUpdateWithoutUserInputObjectSchema), z.lazy(() => point_logUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => point_logCreateWithoutUserInputObjectSchema), z.lazy(() => point_logUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const point_logUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.point_logUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logUpsertWithWhereUniqueWithoutUserInput>;
export const point_logUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
