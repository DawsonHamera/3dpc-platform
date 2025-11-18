import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { point_logWhereUniqueInputObjectSchema as point_logWhereUniqueInputObjectSchema } from './point_logWhereUniqueInput.schema';
import { point_logUpdateWithoutUserInputObjectSchema as point_logUpdateWithoutUserInputObjectSchema } from './point_logUpdateWithoutUserInput.schema';
import { point_logUncheckedUpdateWithoutUserInputObjectSchema as point_logUncheckedUpdateWithoutUserInputObjectSchema } from './point_logUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => point_logWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => point_logUpdateWithoutUserInputObjectSchema), z.lazy(() => point_logUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const point_logUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.point_logUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logUpdateWithWhereUniqueWithoutUserInput>;
export const point_logUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
